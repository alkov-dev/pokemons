export enum FilterActionType {
  FILTER_BY_TYPE = 'FILTER_BY_TYPE',
  SORT_BY = 'SORT_BY',
}

export interface FilterState {
  typeFilter: string;
  sortBy: string;
}
interface FilterTypeAction {
  type: FilterActionType.FILTER_BY_TYPE;
  payload: string;
}
interface SortByAction {
  type: FilterActionType.SORT_BY;
  payload: string;
}

export type FilterAction = FilterTypeAction | SortByAction;
