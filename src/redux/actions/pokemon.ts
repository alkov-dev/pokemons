import axios from 'axios';
import { Dispatch } from 'react';
import { PokemonAction, PokemonActionTypes } from '../../types/pokemon';

export const fetchPok = (id : string | undefined) => {
  return async (dispatch : Dispatch<PokemonAction>) => {
    try {
      dispatch({type: PokemonActionTypes.FETCH_POKE})
      await axios.get(`/pokemons/${id}`).then(({data}) =>
      dispatch({type: PokemonActionTypes.FETCH_POKE_SUCCES, payload: data}))
    } catch (e) {
      dispatch({type: PokemonActionTypes.FETCH_POKE_ERROR, payload: 'error fetch'})
    }
  }
}