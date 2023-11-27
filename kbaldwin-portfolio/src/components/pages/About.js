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
            I am a full stack developer with a Masters of Software Engineering from the University of Calgary. I have a wide variety of development experience specializing in .NET and React frameworks while utilizing SCRUM and Agile methodologies. I have worked on projects as a sole contractor, a member of a team and a founder.  
            </p>

            <div>
              <p>Some of the technologies I have experience with include:</p>
              <ul>
                <li>React Native</li>
                <li>React</li>

                <li>Java</li>
                <li>Python</li>

                <li>Node.js</li>
                <li>C#</li>
              </ul>
            </div>
            <a
              href="https://1drv.ms/b/s!An3T_CbCQ4DUgbVQVfH33y2kmieffQ?e=reV9I1"
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
