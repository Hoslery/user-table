export const formatDate = (dateFromServer) => {
  const date = new Date(dateFromServer)
  return date.toLocaleDateString();
}