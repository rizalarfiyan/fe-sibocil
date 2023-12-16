import { z } from 'zod'

const schema = z.object({
  token: z.string(),
  name: z.string().min(3, 'Name is too sort').max(50, 'Name is too long.'),
  location: z
    .string()
    .min(5, 'Location is too sort.')
    .max(150, 'Location is too long.'),
})

export default schema
