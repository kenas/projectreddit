import logo from '../../assets/reddit-logo.svg';
import notifyBelt from '../../assets/notify-belt.svg';
import profilePicture from '../../assets/profile-picture.svg';

// import localStyles from './localStyles.module.css';
import localGrid from './grid.module.css';


const NavBar = () => {

    return (
        <nav>
            <div className={localGrid.nav}>
                <img src={logo} alt="Logo of Reddit"/>
            </div>
    
            <input 
                    type="text"
                    name='search'
                    placeholder="Search on Reddit"
                />
            <ul>
                <li>
                    <img src={notifyBelt} alt="Notification of alerts" />
                </li>
                <li>
                    <img src={profilePicture} alt="Profile pictures of current user" />
                    </li>
            </ul>

        </nav>
    );
}

export default NavBar;