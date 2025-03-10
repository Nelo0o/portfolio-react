import { Link } from 'react-router-dom';

import '../styles/404.css';

export default function NotFound() {
    return (
        <>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>

            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>
            <section className="error">
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">Page introuvable</h1>
                        <p className="message__text">Oups, la page que vous cherchez n'existe pas.</p>
                    </div>
                    <div className="error__nav e-nav">
                        <Link to="/" className="e-nav__link">Accueil</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
