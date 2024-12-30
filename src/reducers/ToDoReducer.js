export const INITIALSTATE = {
    tasks: [],
    loading: false,
    error: false
}

export const ToDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        case "DELETE":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id != action.payload)
            }
        case "TOGGLE":
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload ? {
                    ...task,
                    completed: !task.completed
                } :
                    task
                )
            }
        default:
            return state
    }
}