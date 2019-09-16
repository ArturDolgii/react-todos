import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "./redux/reducers";
import mySaga from './redux/sagas'

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
