export enum PokemonActionTypes {
  FETCH_POKE = 'FETCH_POKE',
  FETCH_POKE_SUCCES = 'FETCH_POKE_SUCCES',
  FETCH_POKE_ERROR = 'FETCH_POKE_ERROR',
}

interface Evolution {
  num: string;
  name: string;
}

export interface PokemonInfo {
  id: number;
  name: string;
  img: string;
  num: string;
  height: string;
  weight: string;
  type: string[];
  weaknesses: string[];
  next_evolution: Evolution[];
}

export interface PokemonState {
  pokemon: null | PokemonInfo;
  loading: boolean;
  error: null | string;
}

interface FetchPokemonAction {
  type: PokemonActionTypes.FETCH_POKE;
}
interface FetchPokemonSuccesAction {
  type: PokemonActionTypes.FETCH_POKE_SUCCES;
  payload: PokemonInfo;
}
interface FetchPokemonErrorAction {
  type: PokemonActionTypes.FETCH_POKE_ERROR;
  payload: null | string;
}

export type PokemonAction = FetchPokemonAction | FetchPokemonSuccesAction | FetchPokemonErrorAction;