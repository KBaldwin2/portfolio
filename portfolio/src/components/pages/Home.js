import classes from "./Home.module.css";
import * as React from "react";

export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.typewriter} style={{ marginRight: "0" }}>
        <h1>Hi! I'm Kim.</h1>
      </div>
      <div className={classes.typewriter}>
        <h2>
          I am a software developer who likes to problem solve, design
          and code cool things.
        </h2>
      </div>
    </div>
  );
}