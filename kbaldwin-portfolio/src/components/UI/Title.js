import React, { useRef, useEffect } from "react";
import classes from "./Title.module.css";

export default function Title(props) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Calculate the width of the title and set the line width accordingly
    const containerWidth = containerRef.current.offsetWidth;
    const titleWidth = titleRef.current.offsetWidth;
    const lineWidth = 100 - (titleWidth / containerWidth) * 100; // Adjust as needed
    const lineElement = document.querySelector(`.${classes.line}`);
    lineElement.style.width = `${lineWidth}%`;
  }, [props.children]);

  return (
    <div className={classes.container} ref={containerRef}>
      <h1 className={classes.title} ref={titleRef}>
        {props.children}
      </h1>
      <div className={classes.line}></div>
    </div>
  );
}
