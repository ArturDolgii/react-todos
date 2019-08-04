import React from "react";
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

        const todo = {
            id: -1,
            completed: false,
            text,
            hidden: null
        };

        this.props.addTodo(todo);

        this.setState({ text: "" });
    }

    render() {
        return TodosInputJsx(this);
    }
}

export default TodosInput;
