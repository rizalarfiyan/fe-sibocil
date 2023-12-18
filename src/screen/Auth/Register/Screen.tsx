'use client'

import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'

import useRegister from './hooks'

export interface RegisterProps {
  first_name?: string
  last_name?: string
}

const RegisterScreen: React.FC<RegisterProps> = (props) => {
  const { form, isDisable, isLoading, onSubmit } = useRegister(props)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
        <Form.Field
          control={form.control}
          name='first_name'
          render={({ field }) => (
            <Form.Item>
              <Form.Label>First Name</Form.Label>
              <Form.Control>
                <Input type='text' placeholder='John' {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name='last_name'
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Last Name</Form.Label>
              <Form.Control>
                <Input type='text' placeholder='Doe' {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name='phone_number'
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control>
                <Input
                  type='number'
                  className='arrow-hide'
                  placeholder='628xxxxxxxxxx'
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button
          type='submit'
          isFluid
          isLoading={isLoading}
          disabled={isDisable}
        >
          Register
        </Button>
      </form>
    </Form>
  )
}

export default RegisterScreen
