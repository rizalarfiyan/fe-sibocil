import { OnChangeValue } from 'react-select'

import { SelectValue } from '@/@types'
import Button from '@/components/Button'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Select from '@/components/Select'
import { USER_OPTION } from '@/constants/options'

import { useDashboardUserForm } from './hook'
import { UserScreenFormProps } from './types'

const UserScreenForm: React.FC<UserScreenFormProps> = (props) => {
  const { form, isDisable, onSubmit, isUpdate } = useDashboardUserForm(props)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='full space-y-6'>
        <div className='grid gap-4 py-4'>
          <Form.Field
            control={form.control}
            name='first_name'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-first-name'>First Name</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='user-first-name'
                    type='text'
                    placeholder='Muhamad Rizal'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='last_name'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-last-name'>Last Name</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='user-last-name'
                    type='text'
                    placeholder='Arfiyan'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='phone_number'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-phone-number'>Phone Number</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='user-phone-number'
                    type='number'
                    placeholder='628xxxxxxxxxx'
                    className='arrow-hide'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='identity'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-identity'>Identity</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='user-identity'
                    type='text'
                    placeholder='ab:2g:9h:jq:7e:28:r9'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='google_id'
            disabled={props.isView}
            render={({ field }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-google-id'>Google Id</Label>
                <div className='col-span-3 space-y-2'>
                  <Input
                    id='user-google-id'
                    type='text'
                    placeholder='283203759283523835934'
                    {...field}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name='role'
            disabled={props.isView}
            render={({ field: { value, onChange } }) => (
              <Form.Item className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='user-role'>Role</Label>
                <div className='col-span-3 space-y-2'>
                  <Select
                    value={USER_OPTION.filter((val) => val.value === value)}
                    options={USER_OPTION}
                    id='user-role'
                    placeholder='Role'
                    onChange={(val: OnChangeValue<unknown, false>) => {
                      onChange((val as SelectValue).value)
                    }}
                  />
                  <Form.Message />
                </div>
              </Form.Item>
            )}
          />
        </div>
        {!props.isView && (
          <Dialog.Footer>
            <Button type='submit' disabled={isDisable}>
              {isUpdate ? 'Update' : 'Create'}
            </Button>
          </Dialog.Footer>
        )}
      </form>
    </Form>
  )
}

export default UserScreenForm
