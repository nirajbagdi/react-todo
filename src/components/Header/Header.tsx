import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg';
import { ReactComponent as IconSun } from '../../assets/icon-sun.svg';
import { useTodos } from '../../store/todos-context';
import styles from './Header.module.css';

const Header = () => {
    const todosCtx = useTodos();

    return (
        <header className={styles.header}>
            <h1>Todo</h1>

            <button onClick={todosCtx.toggleTheme}>
                {todosCtx.darkMode ? <IconSun /> : <IconMoon />}
            </button>
        </header>
    );
};

export default Header;
