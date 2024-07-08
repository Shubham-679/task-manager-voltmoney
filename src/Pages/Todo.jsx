import AddTodo from "../Components/Organisms/AddTodo";
import TodoList from "../Components/Organisms/TodoList";
import { motion } from "framer-motion";

const Todo = () => {  
  return (
    <main className="App">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 rounded-md relative shadow-customdark
					transition-all duration-500"
      >
        <AddTodo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" rounded-md overflow-hidden relative bg-[#181A25] shadow-customdark transition-all duration-500
          border border-1 border-[#393A4B] "
      >
        <TodoList />
      </motion.div>
    </main>
  );
};

export default Todo;
