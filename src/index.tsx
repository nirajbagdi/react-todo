import ReactDOM from 'react-dom/client';

import { TodosProvider } from './store/TodosProvider';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <TodosProvider>
        <App />
    </TodosProvider>
);
