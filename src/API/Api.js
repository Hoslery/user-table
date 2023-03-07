import axios from "axios";

export default class Api {
  static async getAllUsers(limit = 5, page = 1) {
    const response = await axios.get(
      `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users/?limit=${limit}&page=${page}`
    );
    return response;
  }
}