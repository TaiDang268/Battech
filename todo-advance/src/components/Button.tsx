interface IButton {
  title?: string;
  className?: string;
  onClick?: () => void;
}
const Button = (props: IButton) => {
  const { title, className, onClick } = props;
  return (
    <button
      className={`${className}  rounded h-9 px-4
       text-center box-border `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
