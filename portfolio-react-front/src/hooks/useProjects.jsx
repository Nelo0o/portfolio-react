import { useEffect, useState, useContext } from 'react';
import { getProjects, deleteProject, saveProject, addProject } from '../api/api';
import { UserContext } from '../context/UserContext';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                setError('Erreur lors de la récupération des projets');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (!user || !user.token) return;

        setLoading(true);
        try {
            await deleteProject(id, user.token);
            setProjects(projects.filter(project => project.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression du projet');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (formData) => {
        if (!user || !user.token) return;

        setLoading(true);
        try {
            const updatedProject = await saveProject(formData, user.token);
            if (updatedProject) {
                setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
                setEditingProject(null);
            }
        } catch (err) {
            setError('Erreur lors de la sauvegarde du projet');
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (formData) => {
        if (!user || !user.token) return;

        setLoading(true);
        try {
            const addedProject = await addProject(formData, user.token);
            if (addedProject) {
                setProjects([...projects, addedProject]);
            }
        } catch (err) {
            setError('Erreur lors de l\'ajout du projet');
        } finally {
            setLoading(false);
        }
    };

    return {
        projects,
        editingProject,
        setEditingProject,
        handleDelete,
        handleSave,
        handleAdd,
        loading,
        error
    };
};