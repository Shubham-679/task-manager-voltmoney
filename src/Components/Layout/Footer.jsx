import React from "react";
import { useTodo } from "../../Context/TodoContext";
import { options } from "../../Utility/constants";

const Footer = () => {

  const { state: { todos, filterBy }, setTodos, setFilter } = useTodo();

  const todosLeft = todos.filter((todo) => !todo.completed).length;

  const removeAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div
      className="flex p-2 mt-1 text-xs bg-[#25273D]  transition-all duration-500
					border-t border-1 border-[#393A4B]
					text-[#5B5E7E] rounded-md"
    >
      <span className="flex-1 flex pt-1.5 pb-1 px-1.5">
        {todosLeft} item{todosLeft > 1 && "s"} left
      </span>

      <span className="flex-1 text-center flex justify-center gap-3 ">
        {options.map((option, i) => (
          <button
            key={i + option}
            className={`
						font-bold pt-1.5 pb-1 px-1.5 
						rounded-sm
						focus:outline-none
						focus:outline-offset-2
						focus:outline-accent
						focus:outline-2
						${filterBy !== option && " hover:text-[#E3E4F1] focus:text-[#E3E4F1]"}
						${filterBy === option ? " text-accent text-[#E3E4F1]" : "text-[#5B5E7E] cursor-pointer"
                    }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </span>

      <span className="flex-1 text-right cursor-pointer">
        <button
          className="pt-1.5 pb-1 px-1.5 						
					rounded-sm
					focus:outline-none
					focus:outline-offset-2
					focus:outline-accent
					focus:outline-2
					text-[#5B5E7E]
					hover:text-[#E3E4F1]"
          onClick={removeAll}
        >
          Clear Completed
        </button>
      </span>
    </div>
  );
}
export default Footer;
