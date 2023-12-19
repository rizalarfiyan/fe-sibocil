import { cn } from '@/utils/classes'

import Typography from '@/components/Typography'

interface DashboardTitleProps {
  className?: string
  title: string
  description: string
}

const DashboardTitle: React.FC<DashboardTitleProps> = (props) => {
  const { className, title, description } = props

  return (
    <div className={cn('max-w-3xl space-y-2', className)}>
      <Typography variant='h2' as='h1'>
        {title}
      </Typography>
      <Typography variant='p'>{description}</Typography>
    </div>
  )
}

export default DashboardTitle
