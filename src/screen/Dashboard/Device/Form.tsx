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
  const { form, isDisable, onSubmit, onCopy, tooltip, isUpdate, isLoading } =
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
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-name'>Name</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='device-name'
                    type='text'
                    placeholder='Sibocil AMIKOM 1'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='location'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='device-location'>Location</Label>
                <div className='col-span-3 space-y-2'>
                  <Textarea
                    id='device-location'
                    placeholder='Sibocil yang berada di gedung 7 lantai 1 Universitas AMIKOM Yogyakarta'
                    className='max-h-48'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
        </div>
        {!props.isView && (
          <Dialog.Footer>
            <Button type='submit' isLoading={isLoading} disabled={isDisable}>
              {isUpdate ? 'Update' : 'Create'}
            </Button>
          </Dialog.Footer>
        )}
      </form>
    </Form>
  )
}

export default DeviceScreenForm
