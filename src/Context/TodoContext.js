import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { nanoid } from "nanoid";
import { getTodos, setItemInLS, getFilter } from "../Utility/utils";


const initialState = {
  todos: getTodos(),
  inputValues : {
    title : "",
    desc: ""
  },
  filterBy : getFilter()
};

const TodoContext = createContext();

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = "EDIT_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_INPUT_VALUES = "SET_INPUT_VALUES";
const SET_TODOS = "SET_TODOS";
const SET_FILTER = "SET_FILTER"


const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case EDIT_TODO:
      return {
          ...state,
          todos : state.todos.map((todo) => todo.id ===  action.payload.id ? { ...todo, ...action.payload } : todo )
      }
    case TOGGLE_TODO: 
      return {
          ...state,
          todos : state.todos.map((todo) => todo.id ===  action.payload ? { ...todo, completed: !todo.completed } : todo )
      }
    case SET_INPUT_VALUES: 
      return {
          ...state,
        inputValues : action.payload
      }
    case SET_TODOS:
      return {
        ...state,
        todos : action.payload ?  action.payload : state.todos
      }
    case SET_FILTER: 
      return {
        ...state,
        filterBy : action.payload
      }
    default:
      return state;
  }
};


export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    setItemInLS("filterBy", state.filterBy);
  }, [state.filterBy]);


  useEffect(() => {
    setItemInLS("todosList", state.todos);
  }, [state.todos, state.todos.length]);

  
  const addTodo = ({ title, desc }) => {
    const newTodo = {
      id: nanoid(),
      title,
      desc,
      completed: false
    };
    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const editTodo = (inputValues) => {
    dispatch({ type: EDIT_TODO, payload: inputValues }); 
  }

  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id }); 
  }

  const setInputValues = (values) => {
    dispatch({ type: SET_INPUT_VALUES, payload: values }); 
  }

  const setTodos = (todos) => {
    dispatch({ type: SET_TODOS, payload: todos });
  }

  const setFilter = (filter) => {
    dispatch({ type: SET_FILTER, payload: filter });
  }

  return (
    <TodoContext.Provider value={{ state, addTodo, deleteTodo, toggleTodo, setInputValues, editTodo, setTodos, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};


export const useTodo = () => {
  return useContext(TodoContext);
};
