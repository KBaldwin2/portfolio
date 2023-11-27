import Modal from "../UI/Modal";
import classes from "./ProjectModal.module.css";
import { Flex, Box, Text, Image } from "rebass";

export default function ProjectCard(props) {
  return (
    <Modal onClick={props.onClick}>
      <Flex className={classes.content}>
        <Box width={7 / 8} className={classes["left-box"]}>
          <div className={classes.content}>{props.children}</div>
        </Box>
        <Box width={1 / 8} className={classes["right-box"]}>
          <div className={classes.linkDiv}>
            <a href={props.link} target="_blank" className={classes.link}>
              Learn More
            </a>
          </div>
        </Box>
      </Flex>
    </Modal>
  );
}
