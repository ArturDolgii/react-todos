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

    deleteTodo(id) {
        this.setState({
            todosList: this.state.todosList.slice().filter(todo => todo.id !== id)
        });
    }

    toggleCompleted(id) {
        this.setState({
            todosList: this.state.todosList.slice().map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            })
        });
    }

    clearCompleted() {
        this.setState({
            todosList: this.state.todosList.slice().filter(todo => !todo.completed)
        });
    }

    render() {
        const itemsLeft = this.state.todosList.filter(todo => !todo.completed).length;

        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">TODOS</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <TodosInput addTodo={todo => this.addTodo(todo)}/>
                                <TodosList todosList={this.state.todosList}
                                           deleteTodo={id => this.deleteTodo(id)}
                                           toggleCompleted={id => this.toggleCompleted(id)} />
                                <TodosFooter itemsLeft={itemsLeft}
                                             clearCompleted={() => this.clearCompleted()} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
