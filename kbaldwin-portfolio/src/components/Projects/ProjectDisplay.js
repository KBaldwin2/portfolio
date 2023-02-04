import { CardActionArea, Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import classes from "./ProjectDisplay.module.css";

export default function ProjectDisplay(props) {
  
  const clickHandler = () => {
    props.onClick(props.title);
  }


  return (
    <div className={classes.display}>
      <Card onClick={clickHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.title}
            className={classes.image}
          />
          <div className={classes.overlay}></div>
          <div className={classes.button}>
            <a href="#"> VIEW PROJECT </a>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
