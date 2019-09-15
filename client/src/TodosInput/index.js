import React from "react";
import { connect } from "react-redux";
import {ADD_TODO} from "../redux/actionTypes";
import TodosInputJsx from "./jsx";

class TodosInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    handleKeyUp(e) {
        if (e.key === "Enter") {
            this.addTodo(e.target.value);
        }
    }

    addTodo(text) {
        if (!text) {
            return;
        }

        this.props.addTodo(text);

        this.setState({ text: "" });
    }

    render() {
        return TodosInputJsx(this);
    }
}

let nextTodoId = 0;

export default connect(
    null,
    {
        addTodo: text => ({
            type: ADD_TODO,
            payload: {
                id: ++nextTodoId,
                completed: false,
                text,
                hidden: null
            }
        })
    }
)(TodosInput);
