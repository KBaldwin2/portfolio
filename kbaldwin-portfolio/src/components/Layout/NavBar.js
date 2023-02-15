import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import kbLogo from "../../assets/KB-logo.png";
import kbLogoHover from "../../assets/KB-logo-hover.png";


export default function NavBar() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>
        <img src={kbLogo} className={classes.image} alt="KB"/>
        <img src={kbLogoHover} className={classes["image-hover"]} alt="KBHover"/>
        </div>
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
