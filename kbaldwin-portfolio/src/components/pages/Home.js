import classes from "./Home.module.css";
import React from "react";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.text}>
          <p>Hi! My name is</p>
          <div className={classes.typewriter}>
            <h1>Kim Baldwin.</h1>
          </div>
        </div>
        <div className={classes.flexBox}>
          <p className={classes["p-1"]}> Software Developer. </p>
          <p className={classes["p-2"]}> Environmental Engineer. </p>
          <p className={classes["p-3"]}> Taco Tuesday Advocate. </p>
        </div>
      </div>
    </React.Fragment>
  );
}
