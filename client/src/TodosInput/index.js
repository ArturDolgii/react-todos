import React from "react";
import { connect } from "react-redux";
import {ADD_TODO_REQUESTED} from "../redux/actionTypes";
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

export default connect(
    null,
    {
        addTodo: text => ({
            type: ADD_TODO_REQUESTED,
            payload: { text }
        })
    }
)(TodosInput);
