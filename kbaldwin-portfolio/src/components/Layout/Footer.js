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
            />
          </li>
          <li>
            <SocialIcon
              label="Resume"
              bgColor="white"
              url="https://onedrive.live.com/?authkey=%21AHvSgISQDBgjmDk&cid=D48043C226FCD37D&id=D48043C226FCD37D%2115397&parId=root&o=OneUp"
            />
          </li>
          <li>
          <SocialIcon
              label="Resume"
              bgColor="white"
              network="email"
              onClick={props.onClick}
            />
          </li>
          <li>
            <SocialIcon bgColor="white" url="https://github.com/KBaldwin2" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
