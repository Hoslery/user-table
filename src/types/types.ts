export interface ISort {
  id: number,
  text: string,
  sort: string,
}

export interface IUser {
  id: number,
  username: string,
  email: string,
  registration_date: string,
  rating: number,
}

export interface IUserState {
  users: IUser[],
  usersWithoutChanges: IUser[],
  isUsersLoading: boolean,
  userError: null | string
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  REMOVE_USER = "REMOVE_USER",
  GET_ALL_USERS = "GET_ALL_USERS",
  SORT_USERS = "SORT_USERS",
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}

interface IFetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: IUser[]
}

interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload: string
}

export interface IRemoveUserAction {
  type: UserActionTypes.REMOVE_USER
  payload: number
}

export interface IGetAllUsersAction {
  type: UserActionTypes.GET_ALL_USERS,
  payload: number[]
}

export interface ISortUsersAction {
  type: UserActionTypes.SORT_USERS,
  payload: {
    clickNumber: number,
    sortValue: string,
  }
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction | IRemoveUserAction | IGetAllUsersAction | ISortUsersAction

export enum FilterActionTypes {
  SET_HIDE_FILTER = "SET_HIDE_FILTER",
  SET_CATEGORY = "SET_CATEGORY"
}

export interface IFilterState {
  hideFilter: boolean,
  activeCategory: number
}

export interface ISetHideFilterAction {
  type: FilterActionTypes.SET_HIDE_FILTER,
  payload: boolean
}

export interface ISetCategoryAction {
  type: FilterActionTypes.SET_CATEGORY,
  payload: number
}

export type FilterAction = ISetHideFilterAction | ISetCategoryAction