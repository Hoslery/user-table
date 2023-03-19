import Api from "../../API/Api";

export const fetchUsers = (limit, page) => {
  return async (dispatch) => {
    try {
      dispatch({type: "FETCH_USERS"})
      const response = await Api.getAllUsers(limit, page);
      dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
    } 
    catch (e) {
      dispatch({type: "FETCH_USERS_ERROR", payload: `Извините, произошла ошибка :(`})
    }
  }
}