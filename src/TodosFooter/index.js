import React from "react";

import "./index.css";

class TodosFooter extends React.Component {
    render() {
        return (
            <ul className="list-inline">
                <li className="list-inline-item float-left">
                    <span className="btn">
                        {this.props.itemsLeft} {this.props.itemsLeft === 1 ? "item left" : "items left"}
                    </span>
                </li>
                <li className="list-inline-item">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <button type="button"
                                    className={"btn btn-link" + (this.props.activeFilter === "ALL" ? " active" : "")}
                                    onClick={() => this.props.onFilterChanged("ALL")}>
                                All
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button"
                                    className={"btn btn-link" + (this.props.activeFilter === "ACTIVE" ? " active" : "")}
                                    onClick={() => this.props.onFilterChanged("ACTIVE")}>
                                Active
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button"
                                    className={"btn btn-link" + (this.props.activeFilter === "COMPLETED" ? " active" : "")}
                                    onClick={() => this.props.onFilterChanged("COMPLETED")}>
                                    Completed
                            </button>
                        </li>
                    </ul>
                </li>
                <li className="list-inline-item float-right">
                    <button type="button"
                            className="btn btn-link"
                            onClick={() => this.props.clearCompleted()}>Clear completed
                    </button>
                </li>
            </ul>
        );
    }
}

export default TodosFooter;
