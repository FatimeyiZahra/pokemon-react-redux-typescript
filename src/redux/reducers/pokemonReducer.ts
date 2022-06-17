import {
  PokemonAction,
  PokemonState,
  PokemonType,
} from "../../types/pokemonType";

const initialState: PokemonState = {
  loading: false,
  error: "",
  pokemon: {} as PokemonType,
};

const pokemonReducer = (
  state: PokemonState = initialState,
  action: PokemonAction
) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return { ...state, loading: true };
    case "POKEMON_SUCCESS":
      return { ...state, loading: false, pokemon: action.payload };
    case "POKEMON_FAIL":
      return { ...state, loading: false, error: "error" };
    default:
      return state;
  }
};
export default pokemonReducer;
