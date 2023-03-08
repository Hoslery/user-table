import { dateToNumber } from "../date/dateToNumber";

export const sortByField = (a, b, sortValue) => {
  if (sortValue === "registration_date") {
    return dateToNumber(a[sortValue]) - dateToNumber(b[sortValue]);
  } else return a[sortValue] - b[sortValue];
};
