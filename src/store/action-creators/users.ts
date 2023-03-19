import { Dispatch } from "redux";
import Api from "../../API/Api";
import { UserAction, UserActionTypes } from "../../types/types";

export const fetchUsers = (limit: number, page: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await Api.getAllUsers(limit, page);
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
    } 
    catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: `Извините, произошла ошибка :(`})
    }
  }
}