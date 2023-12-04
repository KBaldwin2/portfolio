import classes from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer(props) {
  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <SocialIcon
              bgColor="white"
              url="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
              target="__blank"
            />
          </li>
          <li>
            <SocialIcon
              label="Resume"
              bgColor="white"
              url="https://1drv.ms/b/s!An3T_CbCQ4DUgbVRjOriFLk9rVzmBw?e=BZWTjV"
              target="__blank"
            />
          </li>
          <li>
          <SocialIcon
              label="Email"
              bgColor="white"
              network="email"
              onClick={props.onClick}
            />
          </li>
          <li>
            <SocialIcon bgColor="white" url="https://github.com/KBaldwin2" target="__blank"/>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
