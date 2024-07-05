import Router from './routers/router';
import './styles/App.css';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <UserProvider>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </UserProvider>
    );
}

export default App;