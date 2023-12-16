import { Eye, Pencil, RotateCcw, Trash } from 'lucide-react'

import AlertDialog from '@/components/AlertDialog'
import Button from '@/components/Button'
import Dialog from '@/components/Dialog'
import useDisclosure from '@/hooks/useDisclosure'

import DeviceScreenForm from './Form'
import { DeviceScreenActionProps } from './types'

const DeviceScreenAction: React.FC<DeviceScreenActionProps> = (props) => {
  const { tableRef, idx, data, onDelete } = props
  const isDeleted = data.is_deleted
  const state = useDisclosure()

  return (
    <div className='flex gap-2'>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button
            size='icon'
            variant='subtle'
            state='info'
            className='h-7 w-7 border border-info-500'
          >
            <Eye className='h-4 w-4' />
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title className='text-center'>View Device</Dialog.Title>
          </Dialog.Header>
          <DeviceScreenForm
            state={state}
            tableRef={tableRef}
            idx={idx}
            isView
            fill={{
              location: data.location,
              name: data.name,
              token: data.token,
            }}
          />
        </Dialog.Content>
      </Dialog>
      <Dialog open={state.isOpen} onOpenChange={state.toggle}>
        <Dialog.Trigger asChild>
          <Button
            size='icon'
            variant='subtle'
            state='success'
            className='h-7 w-7 border border-success-500'
          >
            <Pencil className='h-4 w-4' />
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title className='text-center'>Edit Device</Dialog.Title>
          </Dialog.Header>
          <DeviceScreenForm
            state={state}
            tableRef={tableRef}
            idx={idx}
            fill={{
              location: data.location,
              name: data.name,
              token: data.token,
            }}
          />
        </Dialog.Content>
      </Dialog>
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          {isDeleted ? (
            <Button
              size='icon'
              variant='subtle'
              state='warning'
              className='h-7 w-7 border border-warning-500'
            >
              <RotateCcw className='h-4 w-4' />
            </Button>
          ) : (
            <Button
              size='icon'
              variant='subtle'
              state='danger'
              className='h-7 w-7 border border-danger-500'
            >
              <Trash className='h-4 w-4' />
            </Button>
          )}
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
              Make sure you want to {isDeleted ? 'restore' : 'delete'} the
              device?
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action
              state={isDeleted ? 'warning' : 'danger'}
              onClick={onDelete(idx)}
            >
              {isDeleted ? 'Restore' : 'Delete'}
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  )
}

export default DeviceScreenAction
