import React from "react";
import {connect} from "react-redux";
import {DELETE_TODO, TOGGLE_COMPLETED} from "../redux/actionTypes";
import {getActiveFilter, getTodosList} from "../redux/selectors";

import TodosListJsx from "./jsx";

import "./index.css";

class TodosList extends React.Component {
    render() {
        return TodosListJsx(this);
    }
}

export default connect(state => ({
    todosList: getTodosList(state),
    activeFilter: getActiveFilter(state)
}), {
    toggleCompleted: id => ({
        type: TOGGLE_COMPLETED,
        payload: { id }
    }),
    deleteTodo: id => ({
        type: DELETE_TODO,
        payload: { id }
    })
})(TodosList);
