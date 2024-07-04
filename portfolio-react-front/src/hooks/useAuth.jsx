import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useAuth = () => {
    const { setUser } = useContext(UserContext);

    const login = async (email, password) => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setUser({ token: data.token });
                localStorage.setItem('token', data.token);
                return true;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur de connexion');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return false;
        }
    };

    return { login };
};