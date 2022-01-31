import { PokemonAction, PokemonActionTypes, PokemonState} from "../../types/pokemon";

const initialState: PokemonState = {
  pokemon: null,
  loading: false,
  error: null
}

export const pokeReducer = (state = initialState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKE: return {loading: true, error: null, pokemon: null};
    case PokemonActionTypes.FETCH_POKE_SUCCES: return {loading: false, error: null, pokemon: action.payload};
    case PokemonActionTypes.FETCH_POKE_ERROR: return {loading: false, error: action.payload, pokemon: null};
    default:
      return state;
  }
}