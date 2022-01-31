import { FilterState, FilterAction, FilterActionType } from './../../types/filter';

const initialState: FilterState  = {
  typeFilter: "",
  sortBy: 'num',
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionType.FILTER_BY_TYPE :
      return {...state, typeFilter: action.payload};
    case FilterActionType.SORT_BY:
      return {...state, sortBy: action.payload}
    default:
      return state;
  }
}