import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED, ON_FILTER_CHANGED} from "./actionTypes";

const initialState = {
    todosList: [],
    activeFilter: "ALL"
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todosList: [
                    ...state.todosList,
                    {
                        ...action.payload,
                        hidden: state.activeFilter === "COMPLETED"
                    }
                ]
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todosList: state.todosList.slice().filter(todo => todo.id !== action.payload.id)
            };
        }
        case TOGGLE_COMPLETED: {
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
        case CLEAR_COMPLETED: {
            return {
                ...state,
                todosList: state.todosList.slice().filter(todo => !todo.completed)
            };
        }
        case ON_FILTER_CHANGED: {
            return {
                ...state,
                todosList: state.todosList.slice().map(todo => {
                    let hiddenMap = {
                        "ALL": false,
                        "ACTIVE": todo.completed,
                        "COMPLETED": !todo.completed
                    };

                    todo.hidden = hiddenMap[ action.payload.filter ];

                    return todo;
                }),
                activeFilter: action.payload.filter
            };
        }
        default:
            return state;
    }
};
