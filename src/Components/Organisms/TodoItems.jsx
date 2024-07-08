import React from "react";
import { useMotionValue, Reorder, motion } from "framer-motion";
import Checkbox from "../Atoms/Checkbox";
import EditButton from "../Atoms/EditButton";
import { useTodo } from '../../Context/TodoContext';
import CrossButton from "../Atoms/CrossButton";

const TodoItems = ({ todo, show }) => {
  
  const { id, title, desc, completed } = todo;

  const { deleteTodo, setInputValues, toggleTodo, setTodos } = useTodo();

  const y = useMotionValue(0);

  const item = {
    hide: {
      height: 0,
      rotateX: "-90deg",
    },
    shown: (custom) => ({
      height: !custom ? "auto" : 0,
      rotateX: !custom ? "0deg" : "-90deg",
    }),
  };

  return (
    <Reorder.Item
      value={todo}
      id={id}
      style={{ y }}
      className="relative first:rounded-t-sm"
      onDragEnd={() => setTodos()}
    >
      <motion.div
        variants={item}
        custom={show}
        initial={"hide"}
        exit={"hide"}
        animate={"shown"}
        whileHover={"hover"}
        whileFocus={"focus"}
        style={{
          originY: "top",
          transformPerspective: 500,
        }}
        className="backface-hidden flex"
        transition={{
          ease: "easeInOut",
          duration: 0.75,
          height: { ease: [0.7, 0, 0.4, 1], duration: 0.75 },
        }}
      >
        <div
          className={`list-items p-3 w-full
					outline outline-1
					bg-[#25273D]
                    outline-[#393A4B]
					cursor-move
					transition-all duration-500 
					`}
        >
          <div className="flex content-center items-center overflow-hidden">
            <Checkbox
              checked={completed}
              onChange={() => toggleTodo(id)}
              disabled={show}
              name="done"
            />
            <p
              className={`
					${
            completed
              ? ` text-[#4D5067] after:bg-[#4D5067] after:w-full`
              : `after:w-0 after:bg-[#C8CBE7] text-[#d1d2da]`
          } 
					px-1 mt-3 mb-2 text-sm relative		
					after:absolute after:top-1/2 after:left-0 after:h-[1px]
					after:transition-all after:duration-300 after:ease-out
					transition-all duration-300 ease-out
					`}
            >
              {title}
            </p>

            <motion.span
              className="ml-auto mr-2 flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              variants={{
                hover: {
                  opacity: 1,
                },
                focus: {
                  opacity: 1,
                },
              }}
              transition={{ duration: 0 }}
            >
              <EditButton 
                onClick={() => setInputValues(todo)} 
                ariaLabel="Edit" 
                disabled={completed} />
              <CrossButton
                cross={true}
                onClick={() => deleteTodo(id)}
                ariaLabel="Delete"
              />
            </motion.span>
          </div>
          {desc && desc !== "" && <p
              className={`
            ${completed ? ` text-[#4D5067]  after:w-full` : ` text-[#d1d2da] after:w-0`} 
            px-1 mt-3 mb-2 text-sm relative			
            after:absolute after:top-1/2 after:left-0 after:h-[1px]
            after:transition-all after:duration-300 after:ease-out
            transition-all duration-300 ease-out
            `}
            >
              {desc}
          </p>}
        </div>
      </motion.div>
    </Reorder.Item>
  );
};

export default TodoItems;
