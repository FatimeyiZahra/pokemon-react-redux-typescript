import { Dispatch } from "redux";
import axios from "axios";
import { PokemonDispatch,POKEMON_FAIL,POKEMON_LOADING,POKEMON_SUCCESS,PokemonAction } from "../../types/pokemonType";
import { ThunkAction } from "@reduxjs/toolkit";
import { ThunkActionDispatch } from "redux-thunk";
import { RootState } from "../store/store";

export const getPokemon =
  (pokemon: string): ThunkAction<void, RootState, unknown, PokemonAction> =>
  async dispatch =>  {
    dispatch({
      type: POKEMON_LOADING,
    });
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POKEMON_FAIL,
      });
    }
  };
