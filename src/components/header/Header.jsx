import "./Header.css";
import logo from "./images/logo.jpg";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img id="logo" src={logo} alt="Cherry" />
            <h1>Finding A Home</h1>
            <Navigation />
        </header>
    );
};

export default Header;