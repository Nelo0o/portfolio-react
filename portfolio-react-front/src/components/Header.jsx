import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useContext, useMemo } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        if (window.confirm('Tu es certain de vouloir te déconnecter ?')) {
            setUser(null);
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    const navItems = useMemo(() => {
        if (user) {
            return (
                <>
                    <li>
                        <button className='logout-button' onClick={handleLogout}>Se déconnecter</button>
                    </li>
                    {location.pathname === '/admin' ? (
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    )}
                </>
            );
        } else {
            return (
                <li>
                    <Link to="/login">Se connecter</Link>
                </li>
            );
        }
    }, [user, location.pathname, handleLogout]);

    return <header>
        <div className="logo-container">
            <h1>Léon Gallet</h1>
        </div>
        <nav>
            <ul>
                {navItems}
                <li>
                    <button onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </li>
            </ul>
        </nav>
    </header>
}
