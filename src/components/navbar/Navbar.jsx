import './Navbar.css';
import image from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import notificationIcon from '../../assets/notification.svg';
import profileIcon from '../../assets/demo-avatar.svg';
import {useState} from "react";
function Navbar() {
    const [searchText, setSearchText] = useState('');
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={image} alt=""/>
                <span style={{fontWeight: 'bold', fontSize: 30, marginTop: -40}}>Codify_</span>
            </div>
            <div className="search-bar">
                <img
                    src={searchIcon}
                    alt="Search"
                    className={searchText ? '' : 'disabled'}
                />
                <input
                    type="text"
                    placeholder="Search for anything"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="notification">
                <img src={notificationIcon} alt="Notification"/>
            </div>
            <div className={"profile"}>
                <img src={profileIcon} alt="Profile"/>
            </div>
        </nav>
    );
}

export default Navbar;