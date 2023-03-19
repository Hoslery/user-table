/**
 * Функция преобразования даты к виду 'dd.mm.yyyy'
 * @param dateFromServer - дата
 */
export const formatDate = (dateFromServer: string) => {
  const date = new Date(dateFromServer)
  return date.toLocaleDateString();
}