import React from "react";
import {connect} from "react-redux";
import {CLEAR_COMPLETED, ON_FILTER_CHANGED} from "../redux/actionTypes";
import {getActiveFilter, getItemsLeft, getTodosCount} from "../redux/selectors";

import TodosFooterJsx from "./jsx";

import "./index.css";

class TodosFooter extends React.Component {
    render() {
        return TodosFooterJsx(this);
    }
}

export default connect(state => ({
    itemsLeft: getItemsLeft(state),
    activeFilter: getActiveFilter(state),
    todosCount: getTodosCount(state)
}), {
    clearCompleted: () => ({
        type: CLEAR_COMPLETED
    }),
    onFilterChanged: (filter) => ({
        type: ON_FILTER_CHANGED,
        payload: { filter }
    })
})(TodosFooter);
