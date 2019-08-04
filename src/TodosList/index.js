import React from "react";
import TodosListJsx from "./jsx";

import "./index.css";

class TodosList extends React.Component {
    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    toggleCompleted(id) {
        this.props.toggleCompleted(id);
    }

    render() {
        return TodosListJsx(this);
    }
}

export default TodosList;
