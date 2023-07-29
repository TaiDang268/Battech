interface IPropsInput {
  type?: 'text' | 'number' | 'email' | 'password'
  value?: string | number
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IPropsInput) => {
  const { type, value, name, placeholder, disabled, onChange } = props
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        onChange={onChange}
        className='h-9 text-base bg-white rounded border outline-none border-blue-500 px-2  '
      />
    </div>
  )
}
export default Input
