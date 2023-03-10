import Modal from "../UI/Modal";
import classes from "./ProjectModal.module.css";
import { Flex, Box, Text, Image } from "rebass";
import TechStack from "./TechStack";
import arrow from "../../assets/icons/arrow.png";

export default function ProjectCard(props) {
  return (
    <Modal onClick={props.onClick}>
      <Flex className={classes.content}>
        <Box width={6.5 / 8}>
          <div className={classes.content}>{props.children}</div>
        </Box>
        <Box width={1.5 / 8} className={classes["right-box"]}>
          <TechStack
            stack1={props.stack1}
            stack2={props.stack2}
            stack3={props.stack3}
          />
          <div>
            <a href={props.link} target="_blank" className={classes.link}>
              Learn More
            </a>
          </div>
        </Box>
      </Flex>
    </Modal>
  );
}
