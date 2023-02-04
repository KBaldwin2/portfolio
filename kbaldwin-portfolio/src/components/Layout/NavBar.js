import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import kbLogo from "../../assets/KB-logo.png";


export default function NavBar() {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img src={kbLogo} className={classes.image} alt="KB"/>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
        <li>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}
