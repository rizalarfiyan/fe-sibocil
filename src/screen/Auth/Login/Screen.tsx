'use client'

import GoogleIcon from '@/assets/icons/google.svg'
import Button from '@/components/Button'
import Form from '@/components/Form'
import HorizontalLine from '@/components/HorizontalLine'
import Input from '@/components/Input'
import Typography from '@/components/Typography'

import useLogin from './hooks'

interface LoginProps {}

const LoginScreen: React.FC<LoginProps> = () => {
  const {
    form,
    isDisable,
    isLoading,
    onSubmit,
    onGoogleLogin,
    isDisableGoogle,
  } = useLogin()

  return (
    <div className='space-y-5'>
      <div className='text-center'>
        <Button
          variant='outline'
          state='secondary'
          isFluid
          onClick={onGoogleLogin}
          leftIcon={<GoogleIcon className='mr-2 h-7 w-7' />}
          className='max-w-[220px] border-secondary-300'
          disabled={isDisableGoogle}
        >
          Login With Google
        </Button>
      </div>
      <HorizontalLine lineHeight={1}>
        <Typography as='span'>or</Typography>
      </HorizontalLine>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
          <Form.Field
            control={form.control}
            name='phone_number'
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control>
                  <Input type='text' placeholder='628xxxxxxxxxx' {...field} />
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
