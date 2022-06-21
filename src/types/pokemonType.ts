import { ThunkDispatch } from "redux-thunk";
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  name:string;
  weight:number;
};
export interface PokemonState {
  pokemon: PokemonType;
  error: string;
  loading: boolean;
}
export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
 interface POKEMON_LOADING {
  type: typeof POKEMON_LOADING
}

interface POKEMON_FAIL {
  type: typeof POKEMON_FAIL
}

interface POKEMON_SUCCESS {
  type: typeof POKEMON_SUCCESS,
  payload: PokemonType
}
export type PokemonAction = POKEMON_LOADING | POKEMON_FAIL | POKEMON_SUCCESS;
export type PokemonDispatch = ThunkDispatch<PokemonState, void, PokemonAction>;
