import React from "react";
import "./App.css";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todosList: []
        };
    }

    addTodo(todo) {
        this.setState({
            todosList: this.state.todosList.slice().concat(Object.assign(todo, { id: this.getTodosNextId() }))
        });
    }

    getTodosNextId() {
        let id;

        if (!this.state.todosList.length) {
            id = -1;
        } else {
            id = this.state.todosList[ this.state.todosList.length - 1 ].id;
        }

        return ++id;
    }

    render() {
        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">TODOS</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <TodosInput addTodo={todo => this.addTodo(todo)} />
                                <TodosList todosList={this.state.todosList} />
                                <TodosFooter />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
