import './Navbar.css';
import image from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={image} alt=""/>
                <span style={{fontWeight: 'bold', fontSize: 40}}>Codify_</span>
                <div className="search-container">
                    <img src={searchIcon} alt="Search" className="search-icon" onClick={() => {
                        document.querySelector('.search-bar').classList.toggle('active');
                    }}/>
                    <div className="search-bar">
                        <input type="text" placeholder="Search"/>
                        <button type="submit">
                            <img src={searchIcon} alt="Search"/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
);
}

export default Navbar;