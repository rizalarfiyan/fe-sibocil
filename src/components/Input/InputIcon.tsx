const InputIcon: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
      {children}
    </div>
  )
}

export default InputIcon
