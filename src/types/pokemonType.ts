import { ThunkDispatch } from "redux-thunk";

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
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
export interface POKEMON_LOADING {
  type: "POKEMON_LOADING";
}
export interface POKEMON_FAIL {
  type: "POKEMON_FAIL";
}
export interface POKEMON_SUCCESS {
  type: "POKEMON_SUCCESS";
  payload: PokemonType;
}
export type PokemonAction = POKEMON_LOADING | POKEMON_FAIL | POKEMON_SUCCESS;
export type PokemonDispatch = ThunkDispatch<PokemonState, void, PokemonAction>;
