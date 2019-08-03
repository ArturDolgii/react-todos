import React from "react";

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
                                    className="btn btn-link">All
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button"
                                    className="btn btn-link">Active
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button"
                                    className="btn btn-link">Completed
                            </button>
                        </li>
                    </ul>
                </li>
                <li className="list-inline-item float-right">
                    <button type="button"
                            className="btn btn-link">Clear completed
                    </button>
                </li>
            </ul>
        );
    }
}

export default TodosFooter;
