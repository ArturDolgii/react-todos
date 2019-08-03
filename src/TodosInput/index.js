import React from "react";

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
            hidden: false
        };

        this.props.addTodo(todo);

        this.setState({ text: "" });
    }

    render() {
        return (
            <input type="text"
                   className="form-control"
                   value={this.state.text}
                   onChange={e => this.setState({ text: e.target.value})}
                   onKeyUp={e => this.handleKeyUp(e)}
                   placeholder="What needs to be done?" />
        );
    }
}

export default TodosInput;
