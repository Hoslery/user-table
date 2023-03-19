/**
 * Функция преобразования даты к числу в мс
 * @param date - дата
 */
export const dateToNumber = (date: string) => {
  return +new Date(date)
}