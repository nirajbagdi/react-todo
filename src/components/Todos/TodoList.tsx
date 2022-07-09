import { ReactComponent as IconCross } from '../../assets/icon-cross.svg';
import { useTodos } from '../../store/todos-context';
import styles from './TodoList.module.css';

const TodoList = () => {
    const todosCtx = useTodos();

    if (!todosCtx.filteredTodos.length) return <p className="warning">No Todos Found.</p>;

    const todoListContent = todosCtx.filteredTodos.map(todo => (
        <li className={styles.todo} key={todo.id}>
            <input
                id={todo.id}
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onChange={() => todosCtx.toggleTodoComplete(todo.id)}
            />

            <label htmlFor={todo.id} data-content={todo.text}>
                {todo.text}
            </label>

            <IconCross onClick={() => todosCtx.deleteTodo(todo.id)} />
        </li>
    ));

    return <ul className={styles.todos}>{todoListContent}</ul>;
};

export default TodoList;
