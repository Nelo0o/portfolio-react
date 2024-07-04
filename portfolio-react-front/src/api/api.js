const BASE_URL = 'http://127.0.0.1:3000/api';

export const getProjects = async () => {
    try {
        const response = await fetch(`${BASE_URL}/projects`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        throw error;
    }
};

export const deleteProject = async (id, token) => {
    if (!token) return;

    if (window.confirm('Tu veux vraiment faire ça ?')) {
        await fetch(`${BASE_URL}/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    }
};

export const saveProject = async (formData, token) => {
    if (!token) return;

    const id = formData.get('id');
    if (window.confirm('Tu veux vraiment faire la modification ?')) {
        const response = await fetch(`${BASE_URL}/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });
        return await response.json();
    }
};

export const addProject = async (formData, token) => {
    if (!token) return;

    const response = await fetch(`${BASE_URL}/projects`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });
    return await response.json();
};
