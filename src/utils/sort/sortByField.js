import { dateToNumber } from "../date/dateToNumber";

/**
 * Функция сортировки (для сравнения пользователей)
 * @param a
 * @param b
 * @param sortValue - поле, по которому ведется сортировка
 */
export const sortByField = (a, b, sortValue) => {
  if (sortValue === "registration_date") {
    return dateToNumber(a[sortValue]) - dateToNumber(b[sortValue]);
  } else return a[sortValue] - b[sortValue];
};
