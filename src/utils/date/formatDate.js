export const formatDate = (users) => {
  return users.map((user) => {
    const date = new Date(user['registration_date'])
    user['registration_date'] = date.toLocaleDateString()
    return user
  })
}