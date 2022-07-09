import { v4 as uuid } from 'uuid';

export class Todo {
    id: string;
    text: string;
    isCompleted: boolean;

    constructor(text: string) {
        this.id = uuid();
        this.text = text;
        this.isCompleted = false;
    }
}

export type ContextState = {
    todos: Todo[];
    filteredTodos: Todo[];
    filterType: string;
    darkMode: boolean;
    addTodo: (todoObj: Todo) => void;
    deleteTodo: (todoId: string) => void;
    toggleTodoComplete: (todoId: string) => void;
    changeFilterType: (filterType: string) => void;
    clearCompletedTodos: () => void;
    toggleTheme: () => void;
};
