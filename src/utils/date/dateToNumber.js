/**
 * Функция преобразования даты к числу в мс
 * @param date - дата
 */
export const dateToNumber = (date) => {
  return +new Date(date)
}