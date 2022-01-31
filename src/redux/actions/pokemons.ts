import axios from "axios"
import { Dispatch } from "react"
import { PokAction, PokACtionType } from "../../types/pokemons"


export const fetchPokemons = (type: string, sort: string, page: number, limit: number) => {
  return async (dispatch: Dispatch<PokAction>) => {
    try {
      dispatch({type: PokACtionType.FETCH_POKEMON})
      const response =  await axios.get(`/pokemons?${type === "All" ? '' : `type_like=${type}`}&_sort=${sort}&_page=${page}&_limit=${limit}`)

      const totalCount :number = Number(response.headers['x-total-count'])

      dispatch({type: PokACtionType.FETCH_POKEMON_TOTAL_COUNT, payload: totalCount})
      dispatch({type: PokACtionType.FETCH_POKEMON_SUCCES, payload: response.data})

    } catch (e) {
      dispatch({type: PokACtionType.FETCH_POKEMON_ERROR, payload: 'Error fetch'})
    }
  }
}