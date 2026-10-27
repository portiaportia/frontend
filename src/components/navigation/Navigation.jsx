import "./Navigation.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <a id="toggle-nav" onClick={toggleNav} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
            </a>
            <ul className={menuOpen?"":"hide-small"}>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                <li><HashLink to="/#contact">Contact Us</HashLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;