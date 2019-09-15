import React from "react";
import "./App.css";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

class App extends React.Component {
    render() {
        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">TODOS</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <TodosInput />
                                <TodosList />
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
