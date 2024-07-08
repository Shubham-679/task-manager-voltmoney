import Form from "../Molecules/Form";
import { useTodo } from "../../Context/TodoContext";

const AddTodo = () => {
  const { addTodo, editTodo } = useTodo();

  const onSubmit = (inputValues) => {
    if(inputValues?.id) editTodo(inputValues)
    else addTodo(inputValues)
  };

  return <Form onSubmit={onSubmit} />;
};

export default AddTodo;
