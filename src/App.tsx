import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { getPokemon } from "./redux/actions/pokemonAction";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
const App = () => {
  const pokemonState = useAppSelector((state) => state.pokemonReducer);


  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  const sendName = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    dispatch(getPokemon(pokemonName));
  };

  return (
    <>
      {" "}
      <div className="App">
        <input type="text" onChange={handleChange} />
        <button onClick={sendName}>click</button>
      </div>
      <ul>
        <li>{pokemonState.error?pokemonState.error:""}</li>
       <li>{pokemonState.pokemon.name}</li>
       <li>{pokemonState.pokemon.weight}</li>
      </ul>
    </>
  );
};

export default App;
