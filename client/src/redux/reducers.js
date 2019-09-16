import {
    TODOS_FETCH_SUCCEEDED,
    ADD_TODO_SUCCEEDED,
    DELETE_TODO_SUCCEEDED,
    TOGGLE_COMPLETED_SUCCEEDED,
    CLEAR_COMPLETED_SUCCEEDED
} from "./actionTypes";

const initialState = {
    todosList: [],
    activeFilter: "ALL"
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_SUCCEEDED: {
            const todo = action.payload;
            todo.hidden = state.activeFilter === "COMPLETED";
            return {
                ...state,
                todosList: [ ...state.todosList, todo ]
            };
        }
        case DELETE_TODO_SUCCEEDED: {
            return {
                ...state,
                todosList: state.todosList.slice().filter(todo => todo.id !== action.payload.id)
            };
        }
        case TOGGLE_COMPLETED_SUCCEEDED: {
            return {
                ...state,
                todoList: state.todosList.slice().map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }

                    return todo;
                })
            };
        }
        case CLEAR_COMPLETED_SUCCEEDED: {
            return {
                ...state,
                todosList: state.todosList.slice().filter(todo => !todo.completed)
            };
        }
        case TODOS_FETCH_SUCCEEDED: {
            const { todosList, activeFilter } = action.payload;
            return {
                ...state,
                todosList: todosList.map(todo => {
                    let hiddenMap = {
                        "ALL": false,
                        "ACTIVE": todo.completed,
                        "COMPLETED": !todo.completed
                    };

                    todo.hidden = hiddenMap[ activeFilter ];

                    return todo;
                }),
                activeFilter
            };
        }
        default:
            return state;
    }
};
