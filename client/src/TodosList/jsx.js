import React from "react";
import {FixedSizeList as List} from "react-window";

const TodosListJsx = (_this) => (
    <ul className="list-group pt-md-3">
        <List
            height={250}
            itemData={_this.props.todosList}
            itemCount={_this.props.todosList.length}
            itemSize={64}
            width={540}>
            {({data, index, style}) => {
                const todo = data[index];
                return (
                    <li style={style} className={"list-group-item" + (todo.hidden ? " d-none" : "")}
                        key={todo.id}>
                        <div className="form-check text-left">
                            <div className="float-left">
                                <label className="form-check-label">
                                    <input type="checkbox"
                                           className="form-check-input"
                                           defaultChecked={todo.completed}
                                           onClick={() => _this.props.toggleCompleted(todo)} />
                                    <span className={todo.completed ? "completed" : ""}>
                                    {todo.text}
                                </span>
                                </label>
                            </div>
                            <div className="float-right">
                                <button type="button"
                                        className="btn btn-link"
                                        onClick={() => _this.props.deleteTodo(todo.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    </li>
                );
            }}
        </List>
    </ul>
);

export default TodosListJsx;
