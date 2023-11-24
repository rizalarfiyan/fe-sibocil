import { z } from 'zod'

import { REGEX_PHONE_NUMBER } from '@/constants'

const schema = z.object({
  phone_number: z
    .string()
    .refine(
      (value) => REGEX_PHONE_NUMBER.test(value),
      'Phone number invalid indonesian phone number format.',
    ),
})

export default schema
