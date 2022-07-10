import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import { ReactComponent as IconCross } from '../../assets/icon-cross.svg';
import { useTodos } from '../../store/todos-context';
import styles from './TodoList.module.css';

const TodoList = () => {
    const todosCtx = useTodos();

    if (!todosCtx.filteredTodos.length) return <p className="warning">No Todos Found.</p>;

    const todoListContent = todosCtx.filteredTodos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {provided => (
                <li
                    className={styles.todo}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    ));

    const handleOnDragEnd = (result: DropResult) => {
        const items = [...todosCtx.filteredTodos];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination!.index, 0, reorderedItem);

        todosCtx.updateTodos(items);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
                {provided => (
                    <ul
                        className={styles.todos}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {todoListContent}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
