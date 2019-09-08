import React from "react";
import "./App.css";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todosList: [],
            activeFilter: "ALL"
        };
    }

    componentDidMount() {
        this.fetchTodos().then(todosList => {
            this.setState({ todosList });
        });
    }

    addTodo(todo) {
        const newTodo = Object.assign(todo, {
            id: this.getTodosNextId(),
            hidden: this.state.activeFilter === "COMPLETED"
        });

        fetch("/todos", {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTodo)
        }).then(() => {
            this.setState({
                todosList: this.state.todosList.slice().concat(newTodo)
            });
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
        fetch(`/todos/${id}`, { method: "DELETE" }).then(() => {
            this.setState({
                todosList: this.state.todosList.slice().filter(todo => todo.id !== id)
            });
        });
    }

    toggleCompleted(todo) {
        fetch(`/todos/${todo.id}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ completed: !todo.completed })
        }).then(() => {
            this.setState({
                todosList: this.state.todosList.slice().map(_todo => {
                    if (_todo.id === todo.id) {
                        _todo.completed = !_todo.completed;
                    }

                    return _todo;
                })
            });
        });
    }

    clearCompleted() {
        fetch(`/todos?filter=COMPLETED`, { method: "DELETE" }).then(() => {
            this.setState({
                todosList: this.state.todosList.slice().filter(todo => !todo.completed)
            });
        });
    }

    onFilterChanged(activeFilter) {
        this.fetchTodos(activeFilter).then(todosList => {
            this.setState({ todosList, activeFilter });
        });
    }

    async fetchTodos(filter = "ALL") {
        let response = await fetch(`/todos?filter=${filter}`);

        return response.json();
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
                                <TodosInput addTodo={todo => this.addTodo(todo)} />
                                <TodosList todosList={this.state.todosList}
                                           deleteTodo={id => this.deleteTodo(id)}
                                           toggleCompleted={id => this.toggleCompleted(id)} />
                                <TodosFooter itemsLeft={itemsLeft}
                                             clearCompleted={() => this.clearCompleted()}
                                             activeFilter={this.state.activeFilter}
                                             onFilterChanged={filter => this.onFilterChanged(filter)}
                                             todosCount={this.state.todosList.length} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
