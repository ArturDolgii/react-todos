import React from "react";

class TodosList extends React.Component {
    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    render() {
        return (
            <ul className="list-group pt-md-3">
                {this.props.todosList.map(todo => (
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
                                        className="btn btn-link"
                                        onClick={() => this.deleteTodo(todo.id)}>
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
