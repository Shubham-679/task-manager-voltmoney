import "./App.css";
import Layout from "./Components/Layout/Layout";
import Todo from "./Pages/Todo";
import { motion, MotionConfig } from "framer-motion";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.55,
      },
    },
  };

  return (
    <TodoProvider>
      <MotionConfig reducedMotion="user">
        <motion.div
          variants={container}
          initial="hide"
          animate="show"
          className={`App min-h-screen text-[#494C6B]`}
        >
          <Layout>
            <Todo />
          </Layout>
        </motion.div>
      </MotionConfig>
    </TodoProvider>
  );
}

export default App;
