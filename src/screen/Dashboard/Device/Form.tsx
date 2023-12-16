import { Label } from '@radix-ui/react-label'
import { Copy } from 'lucide-react'

import Button from '@/components/Button'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Tooltip from '@/components/Tooltip'

import { useDashboardDeviceForm } from './hooks'
import { DeviceScreenFormProps } from './types'

const DeviceScreenForm: React.FC<DeviceScreenFormProps> = (props) => {
  const { form, isDisable, onSubmit, onCopy, tooltip } =
    useDashboardDeviceForm(props)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
        <div className='grid gap-4 py-4'>
          {props.fill?.token && (
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='device-token'>Token</Label>
              <div className='col-span-3 flex gap-2'>
                <Tooltip.Provider>
                  <Tooltip open={tooltip.isOpen} onOpenChange={tooltip.close}>
                    <Tooltip.Trigger asChild>
                      <Input
                        id='device-token'
                        defaultValue={props.fill?.token}
                        disabled
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Content side='bottom' align='center'>
                      Success copy to clipboard!
                    </Tooltip.Content>
                  </Tooltip>
                </Tooltip.Provider>
                <Button size='icon' type='button' onClick={onCopy}>
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>
          )}
          <Form.Field
            control={form.control}
            name='name'
            disabled={props.isView}
            render={({ field }) => (
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-name'>Name</Label>
                <Input
                  id='device-name'
                  type='text'
                  placeholder='Device Name'
                  parentClassName='col-span-3'
                  {...field}
                />
              </div>
            )}
          />
          <Form.Field
            control={form.control}
            name='location'
            disabled={props.isView}
            render={({ field }) => (
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-location'>Location</Label>
                <Textarea
                  id='device-location'
                  placeholder='Device Location'
                  className='col-span-3 max-h-48'
                  {...field}
                />
              </div>
            )}
          />
        </div>
        {!props.isView && (
          <Dialog.Footer>
            <Button type='submit' disabled={isDisable}>
              Submit
            </Button>
          </Dialog.Footer>
        )}
      </form>
    </Form>
  )
}

export default DeviceScreenForm
