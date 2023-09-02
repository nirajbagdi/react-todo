import { useState } from 'react';

import { useTodos } from '../../store/todos-context';
import styles from './TodoActions.module.css';
import { TodoFilterTypes } from '../../models';

const TodoActions: React.FC = () => {
    const [todoFilters, setTodoFilters] = useState([
        { type: 'all', active: true },
        { type: 'active', active: false },
        { type: 'completed', active: false }
    ]);

    const todosCtx = useTodos();

    const itemsLeft = todosCtx.todos.reduce((total, todo) => {
        return !todo.isCompleted ? total + 1 : total;
    }, 0);

    const handleListClick = (event: React.MouseEvent) => {
        const currentFilter = event.currentTarget.textContent!.toLowerCase();
        todosCtx.changeFilterType(currentFilter as TodoFilterTypes);

        setTodoFilters(prevFilters =>
            prevFilters.map(f => ({ ...f, active: f.type === currentFilter }))
        );
    };

    const filterActionsContent = todoFilters.map(filter => (
        <li
            key={filter.type}
            className={`${styles.action} ${filter.active && styles.active}`}
            onClick={handleListClick}
        >
            {filter.type}
        </li>
    ));

    return (
        <div className={styles.todosActions}>
            <p>{itemsLeft} items left</p>
            <ul className={styles.actionsList}>{filterActionsContent}</ul>
            <p className={styles.actionClear} onClick={todosCtx.clearCompletedTodos}>
                Clear Completed
            </p>
        </div>
    );
};

export default TodoActions;
