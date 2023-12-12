export const getFullName = (firstName: string, lastName: string): string => {
  if (!lastName) return firstName
  return `${firstName} ${lastName}`
}
