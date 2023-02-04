import classes from "./TechStack.module.css";

export default function TechStack(props) {
  return (
    <div>
      
      <div className={classes.tech}>
        <div className={classes.container}>
          {props.stack1}
        </div>
        <div className={classes.container}>
        {props.stack2}
        </div>
        <div className={classes.container}>
        {props.stack3}
        </div>
      </div>
    </div>
  );
}
