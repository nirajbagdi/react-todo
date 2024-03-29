import { useEffect, useState } from 'react';

import { TodosContext } from './todos-context';
import useLocalStorage from '../hooks/useLocalStorage';
import { Todo, TodoFilterTypes } from '../models';

type Props = {
    children: React.ReactNode;
};

export const TodosProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const [filterType, setFilterType] = useState(TodoFilterTypes.ALL);

    useEffect(() => {
        const htmlElement = document.documentElement;

        htmlElement.classList.add('transition');
        const themeTimer = setTimeout(() => htmlElement.classList.remove('transition'), 1000);

        htmlElement.setAttribute('data-theme', darkMode ? 'dark' : '');

        return () => clearTimeout(themeTimer);
    }, [darkMode]);

    const addTodo = (todoObj: Todo) => {
        setTodos(prevTodos => [todoObj, ...prevTodos]);
    };

    const deleteTodo = (todoId: string) => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== todoId));
    };

    const toggleTodoComplete = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                return todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo;
            });
        });
    };

    const clearCompletedTodos = () => {
        setTodos(prevTodos => prevTodos.filter(t => !t.isCompleted));
    };

    const changeFilterType = (filterType: TodoFilterTypes) => {
        setFilterType(filterType);
    };

    const filterTodos = (filterType: TodoFilterTypes) => {
        const todoIsCompleted =
            filterType === TodoFilterTypes.COMPLETED
                ? true
                : filterType === TodoFilterTypes.ACTIVE
                ? false
                : null;

        if (todoIsCompleted === null) return todos;
        return todos.filter(t => t.isCompleted === todoIsCompleted);
    };

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const updateTodos = (updatedTodos: Todo[]) => {
        setTodos(updatedTodos);
    };

    const filteredTodos = filterTodos(filterType);

    const contextValue = {
        todos,
        filteredTodos,
        filterType,
        darkMode,
        addTodo,
        deleteTodo,
        toggleTodoComplete,
        clearCompletedTodos,
        changeFilterType,
        toggleTheme,
        updateTodos
    };

    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};
