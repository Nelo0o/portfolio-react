import ProjectCard from './ProjectCard';
import EditProjectForm from './EditProjectForm';
import AddProjectForm from './AddProjectForm';
import { useProjects } from '../hooks/useProjects';

export default function AdminProjects() {
    const { projects, editingProject, setEditingProject, handleDelete, handleSave, handleAdd } = useProjects();

    return (
        <>
            <h1>Admin</h1>
            <AddProjectForm onAdd={handleAdd} />
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id}>
                        {editingProject === project.id ? (
                            <EditProjectForm project={project} onSave={handleSave} />
                        ) : (
                            <>
                                <ProjectCard project={project} />
                                <div className="project-actions">
                                    <button onClick={() => handleDelete(project.id)}>Supprimer</button>
                                    <button onClick={() => setEditingProject(project.id)}>Éditer</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
