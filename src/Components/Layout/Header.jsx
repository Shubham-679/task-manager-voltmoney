import { motion } from "framer-motion";

const item = {
  hide: { opacity: 0, rotateX: 100, y: 50 },
  show: { opacity: 1, rotateX: 0, y: 0 },
};

const Header = () => (
    <header className="App-header flex mb-5 items-center'">
      <div className="overflow-hidden mr-auto">
        <motion.h1 className="text-4xl font-bold pt-3 text-accent text-white transition-colors duration-500 inline-flex">
          <motion.span variants={item} className="mr-2">
            T
          </motion.span>
          <motion.span variants={item} className="mr-2">
            O
          </motion.span>
          <motion.span variants={item} className="mr-2">
            D
          </motion.span>
          <motion.span variants={item}>O</motion.span>
        </motion.h1>
      </div>
    </header>
  );

export default Header;
