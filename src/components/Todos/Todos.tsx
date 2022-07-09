import TodosList from './TodoList';
import TodoActions from './TodoActions';
import { useTodos } from '../../store/todos-context';
import styles from './Todos.module.css';

const Todos = () => {
    const todosCtx = useTodos();
    if (!todosCtx.todos.length) return null;

    return (
        <div className={styles.todosContainer}>
            <TodosList />
            <TodoActions />
        </div>
    );
};

export default Todos;
