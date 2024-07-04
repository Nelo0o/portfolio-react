import ProjectForm from './ProjectForm';

export default function EditProjectForm({ project, onSave }) {
    return <ProjectForm
        onSubmit={onSave}
        initialData={project}
        className="edit-project-form"
        inputFileId="edit-project-file-upload-button"
        htmlForFileId="edit-project-file-upload-button"
    />;
}
