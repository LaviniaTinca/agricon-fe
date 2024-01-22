import "./navbar.scss";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navlink = ({ label, path }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {label}
      </NavLink>
    </>
  );
};

export default Navlink;
