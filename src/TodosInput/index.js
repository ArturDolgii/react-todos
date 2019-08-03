import React from "react";

class TodosInput extends React.Component {
    render() {
        return (
            <input type="text"
                   className="form-control"
                   placeholder="What needs to be done?" />
        );
    }
}

export default TodosInput;
