import { createContext, useContext } from 'react';
import { ContextState, TodoFilterTypes } from '../models';

const initialState: ContextState = {
    todos: [],
    filteredTodos: [],
    filterType: TodoFilterTypes.ALL,
    darkMode: false,
    addTodo: todo => {},
    deleteTodo: todoId => {},
    toggleTodoComplete: todoId => {},
    changeFilterType: filterType => {},
    clearCompletedTodos: () => {},
    toggleTheme: () => {},
    updateTodos: todos => {}
};

export const TodosContext = createContext(initialState);

export const useTodos = () => useContext(TodosContext);
