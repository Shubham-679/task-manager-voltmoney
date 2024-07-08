
const Input = ({ name, value, onChange, placeholder = "Create a new todo..." }) => {
  return (
    <label htmlFor={name}>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
						pl-14 pt-5 pb-4 bg-[#25273D] hover:bg-[#25273D]
						 text-[#C8CBE7] border border-[#393A4B] rounded-md w-full
						focus:outline-none focus:outline-offset-2 focus:outline-accent focus:outline-2 
            caret-accent transition-colors duration-500"
      />
    </label>
  );
};

export default Input;
