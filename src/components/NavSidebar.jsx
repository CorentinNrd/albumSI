import '../styles/NavSidebar.css'

export default function NavSidebar({selected, selectedFn}) {
    return (
        <div className="navSidebar">
            <ul>
                <li onClick={() => selectedFn('home')}>
                    <p className={selected === "home" ? 'active' : null}>
                        {
                            selected === "home" ? <span></span> : <span>Accueil</span>
                        }
                    </p>
                </li>
                <li onClick={() => selectedFn('projects')}>
                    <p className={selected === "projects" ? 'active' : null}>
                        {
                            selected === "projects" ? <span></span> : <span>Projets</span>
                        }
                    </p>
                </li>
                <li onClick={() => selectedFn('about')}>
                    <p className={selected === "about" ? 'active' : null}>
                        {
                            selected === "about" ? <span></span> : <span>À propos</span>
                        }
                    </p>
                </li>
            </ul>
        </div>
    );
}