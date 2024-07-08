import { useState } from "react";
import Input from "../Atoms/Input";
import { useTodo } from "../../Context/TodoContext";
import CrossButton from "../Atoms/CrossButton";

const Form = ({ onSubmit }) => {

  const [error, setError] = useState(null);
  
  const { state: { inputValues }, setInputValues } = useTodo();

  const onChange = ({ target: { value, name } }) => setInputValues({ ...inputValues, [name]: value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValues.title.replace(/\s/g, "") !== "") {
      onSubmit(inputValues);
      setInputValues({ title: "", desc: "" });
    } else {
      setError("Title is required.");
      setTimeout(() => {
        setError(null)
      }, 2000);
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} autocomplete="off">
        <Input
          name="title"
          value={inputValues.title}
          onChange={onChange}
          placeholder="Title"
        />
        <Input
          name="desc"
          value={inputValues.desc}
          onChange={onChange}
          placeholder="Description"
        />
        <CrossButton
          ariaLabel="Add task"
          className={`inline absolute left-1 translate-y-[-50%]`}
          disabled={!!error}
          type="submit"
        />
      </form>
      {error && <ErrorBox erroMessage={error} />}
    </>
  );
};

export default Form;

const ErrorBox = ({ erroMessage }) => {
  return (
    <div
      class="flex items-center p-4 mb-4 text-sm rounded-lg bg-[#25273D] text-red-400 w-full
					outline outline-1 outline-[#393A4B]
					transition-all duration-500 
					"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Error!</span> {erroMessage}
      </div>
    </div>
  );
};
