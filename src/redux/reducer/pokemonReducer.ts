import { PokAction, PokACtionType, PokState } from "../../types/pokemons";




const initialState: PokState = {
  pokemons: [],
  loading: false,
  error: null,
  totalCount: 0,
}

export const pokemonReducer = (state = initialState, action: PokAction): PokState => {
  switch (action.type) {
    case PokACtionType.FETCH_POKEMON:
      return {
        ...state,
        loading: true,
        error: null,
        pokemons: []
      };
    case PokACtionType.FETCH_POKEMON_SUCCES:
      return {
        ...state,
        loading: false,
        error: null,
        pokemons: action.payload,
      };
    case PokACtionType.FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pokemons: []
      };
    case PokACtionType.FETCH_POKEMON_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
}