import { z } from 'zod'

const schema = z.object({
  token: z.string(),
  name: z.string().min(3, 'Name is required.'),
  location: z.string().min(5, 'Location is required.'),
})

export default schema
