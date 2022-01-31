import { filterReducer } from './filterReducer';
import { pokemonReducer } from './pokemonReducer';
import { combineReducers } from "redux";
import { pokeReducer } from './pokeReducer';


export const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  filter: filterReducer,
  pokemon: pokeReducer
})

export type RootState = ReturnType<typeof rootReducer>