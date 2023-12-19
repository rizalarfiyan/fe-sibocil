export const getFullName = (firstName: string, lastName: string): string => {
  if (!lastName) return firstName
  return `${firstName} ${lastName}`
}

export const getAvatarName = (fullName: string) => {
  const words = fullName.split(' ')
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase()
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
}
