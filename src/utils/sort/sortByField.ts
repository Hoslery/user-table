import { IUser } from "../../types/types";
import { dateToNumber } from "../date/dateToNumber";

/**
 * Функция сортировки (для сравнения пользователей)
 * @param a
 * @param b
 * @param sortValue - поле, по которому ведется сортировка
 */
export const sortByField = (
  a: IUser,
  b: IUser,
  sortValue: string
) => {
  if (sortValue === "registration_date") {
    return dateToNumber(a[sortValue]) - dateToNumber(b[sortValue]);
  } else return a["rating"] - b["rating"];
};
