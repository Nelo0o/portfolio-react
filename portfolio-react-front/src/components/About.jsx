import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

export default function About({ name, description, link, linkText }) {
    return <div className="about">
        <img src={logo} alt="logo" />
        <div className="about-container">
            <h1>{name}</h1>
            <p>{description}</p>
            
            {link && <Link to={link} target="_blank">{linkText}</Link>}
        </div>
    </div>
}