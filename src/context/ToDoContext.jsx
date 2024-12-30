import { createContext, useReducer } from "react";
import { INITIALSTATE, ToDoReducer } from "../reducers/ToDoReducer";

export const todoContext = createContext(INITIALSTATE);

export const ToDoProvider = ({ children }) => {
    const [toDo, dispatch] = useReducer(ToDoReducer, INITIALSTATE);

    const deleteToDo = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const addToDo = (data) => {
        dispatch({ type: "ADD", payload: data });
    };

    const toggleToDo = (id) => {
        dispatch({ type: "TOGGLE", payload: id });
    };

    return (
        <todoContext.Provider
            value={{
                toDo,
                deleteToDo,
                addToDo,
                toggleToDo
            }}
        >
            {children}
        </todoContext.Provider>
    );
};
