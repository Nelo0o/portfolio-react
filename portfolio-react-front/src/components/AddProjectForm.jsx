import ProjectForm from './ProjectForm';

export default function AddProjectForm({ onAdd }) {
    return <ProjectForm onSubmit={onAdd} />;
}
