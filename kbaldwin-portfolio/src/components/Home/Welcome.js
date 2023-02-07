import logo from "../../assets/WelcomeShape.png";
import classes from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={classes.container}>
      <div className={classes.imgcontainer}>
        <h1>Welcome Page</h1>
      </div>
    </div>
  );
}
