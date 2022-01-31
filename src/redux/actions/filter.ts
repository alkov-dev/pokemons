import { FilterAction, FilterActionType } from './../../types/filter';
import { Dispatch } from "react"

export const filterBy = (query: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({type: FilterActionType.FILTER_BY_TYPE, payload: query})
  }
}

export const sortByPopup = (query: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({type: FilterActionType.SORT_BY, payload: query})
  }
}