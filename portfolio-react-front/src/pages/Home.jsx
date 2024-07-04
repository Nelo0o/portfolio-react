import About from '../components/About'
import ProjectsList from '../components/ProjectsList'

export default function Home() {
    return <>
        <About
            name="Mon portfolio"
            description="Voici mon portfolio, un site web qui présente mes projets et mes compétences. Le vrai est disponible ici :"
            link="https://leon-gallet.fr/"
            linkText="leon-gallet.fr"
        />
        <ProjectsList />
    </>
}