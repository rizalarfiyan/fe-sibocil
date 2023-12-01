'use client'

import { ArrowLeft } from 'lucide-react'

import { cn } from '@/utils/classes'

import Button from '@/components/Button'

import useVerificationBack from './hooks'

interface VerificationBackButtonProps {
  children?: React.ReactNode
  className?: string
}

const VerificationBackButton: React.FC<VerificationBackButtonProps> = ({
  children,
  className,
}) => {
  const { onBackToLogin } = useVerificationBack()

  return (
    <Button
      size={!children ? 'icon' : 'md'}
      variant='outline'
      state='secondary'
      className={cn(
        !className && 'absolute left-5 top-5 !mt-0 border-secondary-200',
        className,
      )}
      leftIcon={children ? <ArrowLeft className='mr-2' /> : undefined}
      onClick={onBackToLogin}
    >
      {children ? children : <ArrowLeft />}
    </Button>
  )
}

export default VerificationBackButton
