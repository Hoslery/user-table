import { sortByField } from "../../utils/sort/sortByField"

const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
const REMOVE_USER = "REMOVE_USER"
const GET_ALL_USERS = "GET_ALL_USERS"
const SORT_USERS = "SORT_USERS"

const initialState = {
  users: [],
  usersWithoutChanges: [],
  isUsersLoading: false,
  userError: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {isUsersLoading: true, userError: null, users: [], usersWithoutChanges: []}
    case FETCH_USERS_SUCCESS:
      return {isUsersLoading: false, userError: null, users: action.payload, usersWithoutChanges: action.payload}
    case FETCH_USERS_ERROR:
      return {isUsersLoading: false, userError: action.payload, users: [], usersWithoutChanges: []}
    case REMOVE_USER:
      return {...state , users: state.users.filter((user) => user.id !== action.payload)}
    case GET_ALL_USERS:
      return {...state , users: [...state.usersWithoutChanges.filter((user) => {
          return action.payload.includes(user.id);
        })
      ]}
    case SORT_USERS:
      return {...state , users: [...state.users].sort((a, b) =>
        action.payload.clickNumber === 2
          ? sortByField(a, b, action.payload.sortValue)
          : sortByField(b, a, action.payload.sortValue)
      )}
    default:
      return state
  }
}

export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})
export const getAllUsersAction = (payload) => ({type: GET_ALL_USERS, payload})
export const sortUsersAction = (payload) => ({type: SORT_USERS, payload})
