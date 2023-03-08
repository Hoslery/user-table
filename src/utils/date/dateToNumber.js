export const dateToNumber = (date) => {
  const dateArr = date.split('.').reverse()
  return +new Date(dateArr.join('-'))
}