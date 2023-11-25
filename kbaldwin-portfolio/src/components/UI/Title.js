import { Text } from "rebass";
import classes from "./Title.module.css";

export default function Title(props) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.children}</h1>
      <div color="white" className={classes.line}></div>
      
    </div>
  );
}
