import React from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'
import TodoItems from './TodoItems'
import TodoMessage from '../Molecules/TodoMessage';
import { useTodo } from '../../Context/TodoContext';

const TodoList = () => {

    const { state : { todos, filterBy }, setTodos } = useTodo();

	function showFilterTodoIf(completed) {
		if (filterBy === 'Active' && completed) {
			return true
		}
		if (filterBy === 'Completed' && !completed) {
			return true
		}
		return false
	}

	return (
		<>
			<Reorder.Group
				axis='y'
				onReorder={(todos) => {
					setTodos(todos)
				}}
				values={todos}
				className='overflow-hidden'
			>
				<AnimatePresence>
					{todos.map((todo) => {
						return <TodoItems todo={todo} key={'item' + todo.id} show={showFilterTodoIf(todo.completed)}  />
					})
                    }
					<TodoMessage/>
				</AnimatePresence>
			</Reorder.Group>
		</>
	)
}
export default TodoList