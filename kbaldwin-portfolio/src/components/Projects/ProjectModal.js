import Modal from "../UI/Modal";
import classes from "./ProjectModal.module.css";
import { Flex, Box, Text, Image } from "rebass";


import learnMore from '../../assets/learnMoreButton.png';

export default function ProjectCard(props) {
  return (
    <Modal onClick={props.onClick}>
      <Flex className={classes.content}>
        <Box width={7 / 8} className={classes["left-box"]}>
          <div className={classes.content}>{props.children}</div>
        </Box>
        <Box width={1 / 8} className={classes["right-box"]}>
          
            <a href={props.link} target="_blank" >
              <img src={learnMore} className={classes.image}/>
            </a>
          
        </Box>
      </Flex>
    </Modal>
  );
}
