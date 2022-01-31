export enum PokACtionType {
  FETCH_POKEMON = 'FETCH_POKEMON',
  FETCH_POKEMON_SUCCES = 'FETCH_POKEMON_SUCCES',
  FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR',
  FETCH_POKEMON_TOTAL_COUNT = 'FETCH_POKEMON_TOTAL_COUNT',
}

export interface PokListType {
  img: string;
  name: string;
  id: number;
  num: string;
  type: string[];
}

interface FetchPokAction {
  type: PokACtionType.FETCH_POKEMON;
}
interface FetchPokSuccesAction {
  type: PokACtionType.FETCH_POKEMON_SUCCES;
  payload: PokListType[]
}
interface FetchPokErrorAction {
  type: PokACtionType.FETCH_POKEMON_ERROR;
  payload: null | string
}
interface FetchPokTotalCountAction {
  type: PokACtionType.FETCH_POKEMON_TOTAL_COUNT;
  payload: number
}

export type PokAction = FetchPokAction | FetchPokSuccesAction | FetchPokErrorAction | FetchPokTotalCountAction

export interface PokState {
  pokemons: PokListType[];
  loading: boolean;
  error: null | string;
  totalCount:  number
}