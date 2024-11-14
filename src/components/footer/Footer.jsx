import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
                <span>&copy; 2024 Codify_. All rights reserved.</span>
                <span className="footer-policy">
                    <Link to="/terms-of-use">Terms of Use</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/licensing">Licensing</Link>
               </span>
        </div>
    );
}

export default Footer;