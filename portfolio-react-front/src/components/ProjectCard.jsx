import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <Link to={`${project.link}`} target="_blank">Voir le projet</Link>
        </div>
    );
}