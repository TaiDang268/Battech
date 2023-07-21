interface ISelect {
  options: string[];
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}
const Select = (props: ISelect) => {
  const { options, className, onChange, value } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };
  return (
    <>
      <select
        className={` ${className} 
        flex justify-between items-center
        px-2  bg-slate-400 rounded h-9 w-40 
        outline-none hover:cursor-pointer`}
        onChange={handleChange}
        value={value}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
