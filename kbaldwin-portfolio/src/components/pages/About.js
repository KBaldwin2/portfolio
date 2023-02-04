import ImageGrid from "../About/ImageGrid";
import CardContainer from "../UI/CardContainer";
import { Flex, Box, Text, Image } from "rebass";
import React from "react";
import me from "../../assets/me.png";
import classes from "./About.module.css";
import Title from "../UI/Title";

//Images
import mountains from "../../assets/mountain2.png";
import biking from "../../assets/biking.png";
import crossCountry from "../../assets/crossCountrySki.png";
import iceRescue from "../../assets/iceWaterRescue.png";
import inToronto from "../../assets/inToronto.png";
import oilRig from "../../assets/oilRig.png";
import portugal from "../../assets/portugal.png";
import skiing from "../../assets/skiing.png";
import hiking from "../../assets/hiking.jpeg";

export default function About() {
  return (
    <React.Fragment>
      <CardContainer>
        <Title>ABOUT ME</Title>
        <Flex className={classes.flex}>
          <Box width={1 / 2} py={1} className={classes.container}>
            <div>
              <p>
                I am currently completing my Masters of Software Engineering at
                the University of Calgary. I have three years of work experience
                as an engineer in training and I have worked on multiple
                projects and with startups that utilize SCRUM and Agile
                methodologies.
              </p>
              <p>
                In my free time I love the outdoors, meeting new people &
                playing sports!
              </p>
            </div>
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
            <div className={classes.block}>
              <div className={classes.line}></div>
              <div className={classes.email}>
              <p>kimberleythuyne@gmail.com <br></br>Github: KBaldwin2</p>
              </div>
            </div>
          </Box>
          <Box width={1/2}>
            <img src={me} className={classes.img} alt="me"/>
          </Box>
        </Flex>
      </CardContainer>
      <Flex align="center">
        <Box width={1 / 1}>
          <ImageGrid items={itemData} />
        </Box>
      </Flex>
    </React.Fragment>
  );
}

const itemData = [
  {
    img: mountains,
    title: "Mountains",
  },
  {
    img: hiking,
    title: "Hiking",
  },
  {
    img: skiing,
    title: "Skiing",
  },
  {
    img: iceRescue,
    title: "Ice Water Rescue",
  },

  {
    img: oilRig,
    title: "Oil Rig",
  },
  {
    img: inToronto,
    title: "Toronto",
  },
  {
    img: crossCountry,
    title: "Cross Country SKiing",
  },

  {
    img: portugal,
    title: "Portugal",
  },
];
