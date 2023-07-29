import '../App.css'
interface IButton {
  title?: string
  className?: string
  onClick?: () => void
}
const Button = (props: IButton) => {
  const { title, className, onClick } = props
  return (
    <button
      className={`${className}   h-9 px-4
       text-center box-border text-2xl w-full `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
