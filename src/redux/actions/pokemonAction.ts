import { Dispatch } from "redux";
import axios from "axios";
import { PokemonDispatch } from "../../types/pokemonType";

export const getPokemon =
  (pokemon: string) => async (dispatch: PokemonDispatch) => {
    dispatch({
      type: "POKEMON_LOADING",
    });
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      dispatch({
        type: "POKEMON_SUCCESS",
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: "POKEMON_FAIL",
      });
    }
  };
