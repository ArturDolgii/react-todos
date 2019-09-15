export const getTodosState = store => store;

export const getTodosList = store => {
    return getTodosState(store) ? getTodosState(store).todosList : [];
};

export const getItemsLeft = store => {
    return getTodosState(store) ? getTodosState(store).todosList.filter(todo => !todo.completed).length : 0;
};

export const getActiveFilter = store => {
    return getTodosState(store) ? getTodosState(store).activeFilter : "ALL";
};

export const getTodosCount = store => {
    return getTodosState(store) ? getTodosState(store).todosList.length : 0;
};
