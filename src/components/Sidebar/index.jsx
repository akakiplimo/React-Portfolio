import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import MainLogo from '../../assets/images/logo-a.png'
import './index.scss'

const Sidebar = () => {
    console.log();
    return (
        <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={MainLogo} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <a target="_blank" rel="noreferrer" activeclassname="active" className="portfolio-link" href="https://akakiplimo.carrd.co">
                <FontAwesomeIcon icon={faFileCode} color="#4d4d4e" />
            </a>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adrian-a-kiplimo-55947a132/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/akakiplimo">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="#">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/abracodeabra">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;