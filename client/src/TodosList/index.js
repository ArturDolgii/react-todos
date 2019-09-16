import React from "react";
import {connect} from "react-redux";
import {
    DELETE_TODO_REQUESTED,
    TODOS_FETCH_REQUESTED,
    TOGGLE_COMPLETED_REQUESTED
} from "../redux/actionTypes";
import {getActiveFilter, getTodosList} from "../redux/selectors";

import TodosListJsx from "./jsx";

import "./index.css";

class TodosList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos(this.props.activeFilter);
    }

    render() {
        return TodosListJsx(this);
    }
}

export default connect(state => ({
    todosList: getTodosList(state),
    activeFilter: getActiveFilter(state)
}), {
    toggleCompleted: todo => {
        const { id, completed } = todo;
        return {
            type: TOGGLE_COMPLETED_REQUESTED,
            payload: { id, completed }
        }
    },
    deleteTodo: id => ({
        type: DELETE_TODO_REQUESTED,
        payload: { id }
    }),
    fetchTodos: (filter) => ({
        type: TODOS_FETCH_REQUESTED,
        payload: { filter }
    }),
})(TodosList);
