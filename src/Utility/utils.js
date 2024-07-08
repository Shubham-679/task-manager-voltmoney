
import { initialTodos } from "./constants"; 


export const getItemFromLS = (key = "todosList") => {
   return localStorage.getItem(key);

};

export const setItemInLS = (key = "todosList", value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getTodos = () => {
    let todos = getItemFromLS("todosList");;
    if(!todos) {
        return initialTodos;
    } else {
        try {
           return JSON.parse(getItemFromLS());
        } catch (error) {
            console.log("error in json parsing", error);
        }
    }
    return todos;
};

export const getFilter = () => {
    let filterBy = getItemFromLS("filterBy");
    if(!filterBy) {
        return  "All";
    } else {
        try {
           return JSON.parse(getItemFromLS("filterBy"));
        } catch (error) {
            console.log("error in json parsing", error);
        }
    }
    return filterBy;
}