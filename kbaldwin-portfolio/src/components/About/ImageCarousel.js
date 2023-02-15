import Carousel from "react-bootstrap/Carousel";
import classes from "./ImageCarousel.module.css";

function ImageCarousel(props) {
  const interval = 4000;
  return (
    <Carousel className={classes.carousel} prevLabel="" nextLabel="" fade indicators={false} controls={false}> 
      <Carousel.Item interval={props.intervalFirst} className={classes.item}>
        <img
          className={classes.container}
          src={props.imageOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={interval} className={classes.item}>
        <img
          className={classes.container}
          src={props.imageTwo}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
