import { Header, TodoForm, Todos } from './components';

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <TodoForm />
                <Todos />
            </div>
        </div>
    );
};

export default App;
