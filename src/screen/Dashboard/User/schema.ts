import { z } from 'zod'

import { AUTH_ROLE, REGEX_PHONE_NUMBER } from '@/constants'

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
  identity: z
    .string()
    .min(8, 'Identity is invalid.')
    .max(50, 'Identity is invalid.'),
  google_id: z.preprocess((val) => {
    if (!val || typeof val !== 'string') return undefined
    return val === '' ? undefined : val
  }, z.string().min(8, 'Google Id is too sort.').max(30, 'Google Id is too long.').optional()),
  role: z.enum([AUTH_ROLE.admin, AUTH_ROLE.guest]),
})

export default schema
