'use client'

import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'

import useLogin from './hooks'

interface LoginProps {}

const LoginScreen: React.FC<LoginProps> = () => {
  const { form, isDisable, isLoading, onSubmit } = useLogin()

  return (
    <div className='space-y-5'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
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
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginScreen
