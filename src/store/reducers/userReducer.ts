import { IGetAllUsersAction, IRemoveUserAction, ISortUsersAction, IUserState, UserAction, UserActionTypes } from "../../types/types"
import { sortByField } from "../../utils/sort/sortByField"

const initialState: IUserState = {
  users: [],
  usersWithoutChanges: [],
  isUsersLoading: false,
  userError: null
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {isUsersLoading: true, userError: null, users: [], usersWithoutChanges: []}
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {isUsersLoading: false, userError: null, users: action.payload, usersWithoutChanges: action.payload}
    case UserActionTypes.FETCH_USERS_ERROR:
      return {isUsersLoading: false, userError: action.payload, users: [], usersWithoutChanges: []}
    case UserActionTypes.REMOVE_USER:
      return {...state , users: state.users.filter((user) => user.id !== action.payload)}
    case UserActionTypes.GET_ALL_USERS:
      return {...state , users: [...state.usersWithoutChanges.filter((user) => {
          return action.payload.includes(user.id);
        })
      ]}
    case UserActionTypes.SORT_USERS:
      return {...state , users: [...state.users].sort((a, b) =>
        action.payload.clickNumber === 2
          ? sortByField(a, b, action.payload.sortValue)
          : sortByField(b, a, action.payload.sortValue)
      )}
    default:
      return state
  }
}

export const removeUserAction = (payload: number): IRemoveUserAction => ({type: UserActionTypes.REMOVE_USER, payload})
export const getAllUsersAction = (payload: number[]): IGetAllUsersAction => ({type: UserActionTypes.GET_ALL_USERS, payload})
export const sortUsersAction = (payload: {clickNumber: number, sortValue: string}): ISortUsersAction => ({type: UserActionTypes.SORT_USERS, payload})
