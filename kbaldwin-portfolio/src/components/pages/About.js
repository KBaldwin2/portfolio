import { Flex, Box } from "rebass";
import React from "react";
import classes from "./About.module.css";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import Title from "../UI/Title";
import CardContainer from "../UI/CardContainer";

export default function About() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, []);

  const width = window.innerWidth;
  const breakpoint = 1200;
  let spacing;
  let altCols;

  if (width > breakpoint) {
    spacing = 1 / 5;
    altCols = 1 / 5;
  } else {
    spacing = 1 / 2;
    altCols = 0;
  }

  return (
    <div className={classes.page}>
      {isLoading ? (
        <Loading className={classes.loader} />
      ) : (
        <CardContainer>
          <div className={classes.flex}>
            <Title>ABOUT ME.</Title>
            <p>
              I am currently completing my Masters of Software Engineering at
              the University of Calgary. I have three years of work experience
              as an engineer in training. I have worked with startups experience
              and am comfortable utilizing SCRUM and Agile methodologies.
            </p>

            <div>
              <p>Some of the technologies I have experience with include:</p>
              <ul>
                <li>Javascript</li>
                <li>React</li>

                <li>Java</li>
                <li>Python</li>

                <li>Node.js</li>
                <li>C++</li>
              </ul>
            </div>
            <a
              href="https://onedrive.live.com/?authkey=%21AHvSgISQDBgjmDk&cid=D48043C226FCD37D&id=D48043C226FCD37D%2115397&parId=root&o=OneUp"
              target="__blank"
            >
              <button className={classes.button}>Resume</button>
            </a>
          </div>
        </CardContainer>
      )}
    </div>
  );
}
