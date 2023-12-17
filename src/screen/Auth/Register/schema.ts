import { z } from 'zod'

import { REGEX_PHONE_NUMBER } from '@/constants'

const schema = z.object({
  first_name: z
    .string()
    .min(3, 'First name is too sort.')
    .max(100, 'First name is too long.'),
  last_name: z.preprocess((val) => {
    if (!val || typeof val !== 'string') return undefined
    return val === '' ? undefined : val
  }, z.string().min(3, 'Last name is too sort.').max(100, 'Last name is too long.').optional()),
  phone_number: z
    .string()
    .refine(
      (value) => REGEX_PHONE_NUMBER.test(value),
      'Phone number invalid indonesian phone number format.',
    ),
})

export default schema
