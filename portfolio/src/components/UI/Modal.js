import CardContainer from "./CardContainer";
import Button from "./Button";
import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div>
      <div className={classes.modal}>{props.children}</div>
      <div className={classes.background} onClick={props.onClick}></div>
    </div>
  );
}
