import { Flex, Box } from "rebass";
import React from "react";
import classes from "./About.module.css";
import ImageCarousel from "../About/ImageCarousel";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";

//Images
import mountains from "../../assets/mountaineeres.jpeg";
import mountains2 from "../../assets/mountain2.png";
import crossCountry from "../../assets/crossCountrySki.png";
import inToronto from "../../assets/inToronto.png";
import oilRig from "../../assets/oilRig.png";
import portugal from "../../assets/portugal.png";
import iceRescue from "../../assets/iceWaterRescue.png";
import skiing from "../../assets/skiing.png";
import newYork from "../../assets/newYork.png";
import hockey from "../../assets/hockey.png";
import mountainView from "../../assets/mountainView.png";
import montreal from "../../assets/montreal.png";
import mexico from "../../assets/mexico.png";

export default function About() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4400);
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
    <React.Fragment>
      {isLoading ? (
        <Loading className={classes.loader}/>
      ) : (
        <div className={classes.page}>
          <Flex className={classes.flex}>
            <Box width={altCols} ml={1}>
              <ImageCarousel
                imageOne={mountains}
                imageTwo={mountains2}
                intervalFirst={4500}
              />
              <ImageCarousel
                imageOne={crossCountry}
                imageTwo={inToronto}
                intervalFirst={6000}
              />
              <ImageCarousel
                imageOne={oilRig}
                imageTwo={iceRescue}
                intervalFirst={8500}
              />
            </Box>
            <Box width={spacing}>
              <ImageCarousel
                imageOne={portugal}
                imageTwo={skiing}
                intervalFirst={7100}
              />
              <div className={classes.textbox}>
                <h4>ABOUT ME.</h4>
                <p>
                  I am currently completing my Masters of Software Engineering
                  at the University of Calgary. I have three years of work
                  experience as an engineer in training. I have worked with
                  startups experience and am comfortable utilizing SCRUM and
                  Agile methodologies.
                </p>
              </div>
              <ImageCarousel
                imageOne={newYork}
                imageTwo={hockey}
                intervalFirst={9200}
              />
            </Box>
            <Box width={altCols}>
              <ImageCarousel
                imageOne={mountainView}
                imageTwo={inToronto}
                intervalFirst={5500}
              />
              <ImageCarousel
                imageOne={skiing}
                imageTwo={mountains}
                intervalFirst={4500}
              />
              <ImageCarousel
                imageOne={crossCountry}
                imageTwo={mountains2}
                intervalFirst={6500}
              />
            </Box>
            <Box width={spacing}>
              <ImageCarousel
                imageOne={newYork}
                imageTwo={oilRig}
                intervalFirst={7200}
              />
              <div className={classes.textbox}>
                <h4>TECH.</h4>
                <div>
                  <p>
                    Some of the technologies I have experience with include:
                  </p>
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
              <ImageCarousel
                imageOne={mexico}
                imageTwo={montreal}
                intervalFirst={9100}
              />
            </Box>
            <Box width={altCols} mr={1}>
              <ImageCarousel
                imageOne={montreal}
                imageTwo={skiing}
                intervalFirst={8200}
              />
              <ImageCarousel
                imageOne={hockey}
                imageTwo={newYork}
                intervalFirst={6000}
              />
              <ImageCarousel
                imageOne={mountains2}
                imageTwo={portugal}
                intervalFirst={5000}
              />
            </Box>
          </Flex>
        </div>
      )}
    </React.Fragment>
  );
}
