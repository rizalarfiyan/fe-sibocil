import { z } from 'zod'

import { REGEX_PHONE_NUMBER } from '@/constants'

//! FIXME schema here
const schema = z.object({
  first_name: z.string().min(5, 'First name is required.'),
  last_name: z.string().min(5, 'First name is required.'),
  phone_number: z
    .string()
    .refine(
      (value) => REGEX_PHONE_NUMBER.test(value),
      'Phone number invalid indonesian phone number format.',
    ),
})

export default schema
