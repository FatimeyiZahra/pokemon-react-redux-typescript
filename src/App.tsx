import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { getPokemon } from "./redux/actions/pokemonAction";
import { RootStore } from ".";
import { AppDispatch } from ".";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
const App = () => {
  const pokemonState = useAppSelector(state => state.pokemonReducer);

  console.log(pokemonState);

  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState("ditto");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  useEffect(() => {
    dispatch(getPokemon(pokemonName))
  }, []);

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default App;
