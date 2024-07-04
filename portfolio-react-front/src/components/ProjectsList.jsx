import { useEffect, useState } from 'react';
import { getProjects } from '../api/api';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return (
        <div className="projects-list">
            {projects.map((project) => (
                <div key={project.id}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    );
}
