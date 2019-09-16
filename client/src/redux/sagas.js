import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
    ADD_TODO_REQUESTED,
    ADD_TODO_SUCCEEDED,
    ADD_TODO_FAILED,
    DELETE_TODO_SUCCEEDED,
    DELETE_TODO_FAILED,
    DELETE_TODO_REQUESTED,
    TOGGLE_COMPLETED_SUCCEEDED,
    TOGGLE_COMPLETED_FAILED,
    TOGGLE_COMPLETED_REQUESTED,
    CLEAR_COMPLETED_SUCCEEDED,
    CLEAR_COMPLETED_FAILED,
    CLEAR_COMPLETED_REQUESTED,
    TODOS_FETCH_REQUESTED,
    TODOS_FETCH_SUCCEEDED,
    TODOS_FETCH_FAILED
} from "../redux/actionTypes";

function* addTodo(action) {
    try {
        const response = yield call(fetch, "/todos", {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(action.payload)
        });
        const data =  yield call([response, 'json']);
        yield put({ type: ADD_TODO_SUCCEEDED, payload: data });
    } catch (e) {
        yield put({type: ADD_TODO_FAILED, message: e.message});
    }
}

function* deleteTodo(action) {
    try {
        yield call(fetch, `/todos/${action.payload.id}`, { method: "DELETE" });
        yield put({ type: DELETE_TODO_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({type: DELETE_TODO_FAILED, message: e.message});
    }
}

function* toggleCompleted(action) {
    try {
        yield call(fetch, `/todos/${action.payload.id}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ completed: !action.payload.completed })
        });
        yield put({ type: TOGGLE_COMPLETED_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({type: TOGGLE_COMPLETED_FAILED, message: e.message});
    }
}

function* clearCompleted(action) {
    try {
        yield call(fetch, `/todos?filter=COMPLETED`, { method: "DELETE" });
        yield put({ type: CLEAR_COMPLETED_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({type: CLEAR_COMPLETED_FAILED, message: e.message});
    }
}

function* onFilterChanged(action) {
    try {
        const response = yield call(fetch, `/todos?filter=${action.payload.filter}`);
        const data =  yield call([response, 'json']);
        yield put({ type: TODOS_FETCH_SUCCEEDED, payload: { todosList: data, activeFilter: action.payload.filter } });
    } catch (e) {
        yield put({type: TODOS_FETCH_FAILED, message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(ADD_TODO_REQUESTED, addTodo);
    yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo);
    yield takeEvery(TOGGLE_COMPLETED_REQUESTED, toggleCompleted);
    yield takeLatest(CLEAR_COMPLETED_REQUESTED, clearCompleted);
    yield takeLatest(TODOS_FETCH_REQUESTED, onFilterChanged);
}

export default mySaga;
