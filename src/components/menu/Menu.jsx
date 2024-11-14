import './Menu.css';
import home from "../../assets/home.png";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
            <div className="items">
                <Link to={"/"} className="listItems">
                    <img src={home} alt="" />
                    <span className="listItemTitle">Home</span>
                </Link>
                <span className="title">My Courses</span>
                <Link to={"/courses"}>Courses</Link>
            </div>
        </div>
    );
}

export default Menu;