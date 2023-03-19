import { IFilterState, FilterAction, FilterActionTypes, ISetHideFilterAction, ISetCategoryAction } from "../../types/types"

const initialState: IFilterState = {
  hideFilter: true,
  activeCategory: -1,
}

export const filterReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.SET_HIDE_FILTER:
      return {...state, hideFilter: action.payload}
    case FilterActionTypes.SET_CATEGORY:
      return {...state, activeCategory: action.payload}
    default:
      return state
  }
}

export const setHideFilterAction = (payload: boolean): ISetHideFilterAction  => ({type: FilterActionTypes.SET_HIDE_FILTER, payload})
export const setCategoryAction = (payload: number): ISetCategoryAction => ({type: FilterActionTypes.SET_CATEGORY, payload})