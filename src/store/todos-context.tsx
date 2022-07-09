import { createContext, useContext } from 'react';
import { ContextState } from '../models';

const initialState: ContextState = {
    todos: [],
    filteredTodos: [],
    filterType: 'all',
    darkMode: false,
    addTodo: todo => {},
    deleteTodo: todoId => {},
    toggleTodoComplete: todoId => {},
    changeFilterType: filterType => {},
    clearCompletedTodos: () => {},
    toggleTheme: () => {}
};

export const TodosContext = createContext(initialState);

export const useTodos = () => useContext(TodosContext);
