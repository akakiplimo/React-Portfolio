import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import './index.scss'

const Sidebar = () => {
    // console.log('Niko sidebar');
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"/>
                <img src={LogoSubtitle} alt="logo-subtitle"/>
            </Link>
        </div>
    )
}

export default Sidebar;