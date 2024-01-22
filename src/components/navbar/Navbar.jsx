import "./navbar.scss";
import logo from "../../assets/logo-dark.png";
import Navlink from "./NavLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo image" />
        </Link>
        <div className="navlinks">
          <Navlink label="Home" path="/" />
          <Navlink label="About" path="/about" />
          <Navlink label="Pages" path="/pages" />
          <Navlink label="Projects" path="/projects" />
          <Navlink label="News" path="/news" />
        </div>
        <div className="register">
          <button>Register Now</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
