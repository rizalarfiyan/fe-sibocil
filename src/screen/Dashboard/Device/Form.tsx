import { Label } from '@radix-ui/react-label'

import Button from '@/components/Button'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
import Input from '@/components/Input'

import { useDashboardDeviceForm } from './hooks'
import { DeviceScreenFormProps } from './types'

const DeviceScreenForm: React.FC<DeviceScreenFormProps> = (props) => {
  const { form, isDisable, onSubmit } = useDashboardDeviceForm(props)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
        <div className='grid gap-4 py-4'>
          {props.fill?.token && (
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='device-token'>Token</Label>
              <Input
                id='device-token'
                defaultValue={props.fill?.token}
                parentClassName='col-span-3'
                disabled
              />
            </div>
          )}
          <Form.Field
            control={form.control}
            name='name'
            render={({ field }) => (
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-name'>Name</Label>
                <Input
                  id='device-name'
                  type='text'
                  placeholder='John'
                  parentClassName='col-span-3'
                  {...field}
                />
              </div>
            )}
          />
          <Form.Field
            control={form.control}
            name='location'
            render={({ field }) => (
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-location'>Location</Label>
                <Input
                  id='device-location'
                  type='text'
                  placeholder='John'
                  parentClassName='col-span-3'
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <Dialog.Footer>
          <Button type='submit' disabled={isDisable}>
            Submit
          </Button>
        </Dialog.Footer>
      </form>
    </Form>
  )
}

export default DeviceScreenForm
