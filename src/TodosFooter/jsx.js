import React from "react";

const TodosFooterJsx = (_this) => (
    <ul className={"list-inline" + (_this.props.todosCount === 0 ? " d-none" : "")}>
        <li className="list-inline-item float-left">
                    <span className="btn">
                        {_this.props.itemsLeft} {_this.props.itemsLeft === 1 ? "item left" : "items left"}
                    </span>
        </li>
        <li className="list-inline-item">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <button type="button"
                            className={"btn btn-link" + (_this.props.activeFilter === "ALL" ? " active" : "")}
                            onClick={() => _this.props.onFilterChanged("ALL")}>
                        All
                    </button>
                </li>
                <li className="list-inline-item">
                    <button type="button"
                            className={"btn btn-link" + (_this.props.activeFilter === "ACTIVE" ? " active" : "")}
                            onClick={() => _this.props.onFilterChanged("ACTIVE")}>
                        Active
                    </button>
                </li>
                <li className="list-inline-item">
                    <button type="button"
                            className={"btn btn-link" + (_this.props.activeFilter === "COMPLETED" ? " active" : "")}
                            onClick={() => _this.props.onFilterChanged("COMPLETED")}>
                        Completed
                    </button>
                </li>
            </ul>
        </li>
        <li className="list-inline-item float-right">
            <button type="button"
                    className="btn btn-link"
                    onClick={() => _this.props.clearCompleted()}>
                Clear completed
            </button>
        </li>
    </ul>
);

export default TodosFooterJsx;
