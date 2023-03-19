const initialState = {
  hideFilter: true,
  activeCategory: -1,
}

const SET_HIDE_FILTER = "SET_HIDE_FILTER"
const SET_CATEGORY = "SET_CATEGORY"

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HIDE_FILTER:
      return {...state, hideFilter: action.payload}
    case SET_CATEGORY:
      return {...state, activeCategory: action.payload}
    default:
      return state
  }
}

export const setHideFilterAction = (payload) => ({type: SET_HIDE_FILTER, payload})
export const setCategoryAction = (payload) => ({type: SET_CATEGORY, payload})