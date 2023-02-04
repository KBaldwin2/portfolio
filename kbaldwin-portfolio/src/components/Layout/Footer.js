import classes from './Footer.module.css';


export default function Footer(props) {
  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/kimberley-baldwin-17694894/" className={classes.active} target="_blank">LinkedIn</a>
          </li>
          <li>
          <a href="https://onedrive.live.com/?authkey=%21AHvSgISQDBgjmDk&cid=D48043C226FCD37D&id=D48043C226FCD37D%2115397&parId=root&o=OneUp" target="_blank" className={classes.active}>Resume</a>
          </li>
          <li>
          <a href="" onClick={props.onClick} className={classes.active}>Email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
