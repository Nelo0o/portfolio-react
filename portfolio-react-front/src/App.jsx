import Router from './routers/router';
import './styles/App.css';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    );
}

export default App;