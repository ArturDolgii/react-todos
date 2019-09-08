import React from "react";

const TodosListJsx = (_this) => (
    <ul className="list-group pt-md-3">
        {_this.props.todosList.map(todo => (
            <li className={"list-group-item" + (todo.hidden ? " d-none" : "")}
                key={todo.id}>
                <div className="form-check text-left">
                    <div className="float-left">
                        <label className="form-check-label">
                            <input type="checkbox"
                                   className="form-check-input"
                                   defaultChecked={todo.completed}
                                   onClick={() => _this.toggleCompleted(todo)} />
                            <span className={todo.completed ? "completed" : ""}>
                                {todo.text}
                            </span>
                        </label>
                    </div>
                    <div className="float-right">
                        <button type="button"
                                className="btn btn-link"
                                onClick={() => _this.deleteTodo(todo.id)}>
                            X
                        </button>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

export default TodosListJsx;
