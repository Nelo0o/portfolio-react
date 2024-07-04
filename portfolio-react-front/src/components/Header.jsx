import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Tu es certain de vouloir te déconnecter ?')) {
            setUser(null);
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    return <header>
        <div className="logo-container">
            <h1>Léon Gallet</h1>
        </div>
        <nav>
            <ul>
                {user ? (
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
                ) : (
                    <li>
                        <Link to="/login">Se connecter</Link>
                    </li>
                )}
            </ul>
        </nav>
    </header>
}