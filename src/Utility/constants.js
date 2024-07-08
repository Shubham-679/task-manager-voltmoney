import { nanoid } from "nanoid";

export const initialTodos = [
    {
      id: nanoid(),
      title: "Complete online JavaScript course",
      desc : "by youtube and udemy courses",
      completed: true,
    },
    { id: nanoid(), title: "Print and send invitation", completed: false },
    { id: nanoid(), title: "60 minutes gym", completed: false },
    {
      id: nanoid(),
      title: "Complete Todo App for voltmoney",
      completed: true,
    },
  ];

  export const options = ['All', 'Active', 'Completed'];