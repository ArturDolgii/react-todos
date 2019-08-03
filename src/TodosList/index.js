import React from "react";

class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todosList: [
                {
                    id: 1,
                    completed: false,
                    text: "a1"
                },
                {
                    id: 2,
                    completed: false,
                    text: "a2"
                },
                {
                    id: 3,
                    completed: true,
                    text: "a3"
                }
            ]
        };
    }

    render() {
        return (
            <ul className="list-group pt-md-3">
                {this.state.todosList.map(todo => (
                    <li className="list-group-item" key={todo.id}>
                        <div className="form-check text-left">
                            <div className="float-left">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    <span>
                                        {todo.text}
                                    </span>
                                </label>
                            </div>
                            <div className="float-right">
                                <button type="button"
                                        className="btn btn-link">
                                    X
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodosList;
