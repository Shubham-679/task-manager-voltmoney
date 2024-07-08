import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTodo } from "../../Context/TodoContext";

const TodoMessage = () => {

    const { state : { todos, filterBy } } = useTodo();

	const filteredTodos = todos.filter((task) => {
		if (filterBy === 'Active') {
			return !task.completed
		}
		if (filterBy === 'Completed') {
			return task.completed
		}
		return true
	})

	const item = {
		hide: {
			height: 0,
			rotateX: '90deg',
		},
		shown: (custom) => ({
			height: !custom ? 'auto' : 0,
			rotateX: !custom ? '0deg' : '90deg',
			transition: {
				duration: 1,
			},
		}),
	}


	return (
		<motion.li
			key={'no-tasks'}
			variants={item}
			initial='hide'
			animate='shown'
			custom={filteredTodos.length !== 0}
			exit='hide'
			style={{
				originY: 'bottom',
				transformPerspective: 500,
			}}
		>
			<div
				className={`list-items p-3 bg-[#25273D] 
					transition-all duration-500
					text-sm justify-center flex content-center items-center`}
			>
				<div className={`px-1 mt-3 mb-2 text-sm pb-5`}>
					<AnimatePresence>
						{filteredTodos.length === 0 && filterBy === 'Active' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='Active'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No active todo
							</motion.div>
						)}
						{filteredTodos.length === 0 && filterBy === 'Completed' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='Completed'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No completed todo
							</motion.div>
						)}
						{filteredTodos.length === 0 && filterBy === 'All' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='All'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No todo yet
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.li>
	)
}
export default TodoMessage