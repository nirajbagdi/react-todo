import { useRef } from 'react';

import { useTodos } from '../../store/todos-context';
import { Todo } from '../../models';
import styles from './TodoForm.module.css';

const TodoForm = () => {
    const todoTextRef = useRef<HTMLInputElement>(null);
    const todosCtx = useTodos();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!todoTextRef.current!.value) return;

        const todo = new Todo(todoTextRef.current!.value);
        todosCtx.addTodo(todo);
        todoTextRef.current!.value = '';
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.circle} />
            <input type="text" placeholder="Create a new todo..." ref={todoTextRef} />
        </form>
    );
};

export default TodoForm;
