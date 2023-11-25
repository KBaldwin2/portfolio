import React from "react";
import Title from "../UI/Title";
import Video from "../UI/Video";
import ProjectCard from "../Projects/ProjectModal";
import { useState } from "react";
import classes from "./Projects.module.css";
import { Flex, Box, Text, Image } from "rebass";
import CardContainer from "../UI/CardContainer";
import ProjectList from "../Projects/ProjectList";

//PayTrail
import paytrailNews from "../../assets/PayTrail/paytrail.png";
import paytrail from "../../assets/PayTrail/paytrailAd.png";
import paytrailVideo from "../../assets/PayTrail/PayTrail.mp4";
import paytrailPhotos from "../../assets/PayTrail/paytrail_photo_collage.png";


//Hackathon
import hackathonThumbnail from "../../assets/Hackathon/hackathonVideoTrimmed.mp4";
import hackathon from "../../assets/Hackathon/hackathonThumbnail.png";
import hackathonProcess from "../../assets/Hackathon/hackathon.png";

//Movie Theatre
import movieTheatre from "../../assets/Movie/movieTheatre.png";
import movieThumbnail from "../../assets/Movie/movieThumbnail.png";

//AutoFi
import autofiThumbnail from "../../assets/AutoFi/autoFiThumbnail.png";
import autofiConnection from "../../assets/AutoFi/autofi_connection_diagram.png";
import autofiPhotos from "../../assets/AutoFi/autofi_feature_photos.png";
import autofiOverview from "../../assets/AutoFi/autofi_project_overview.png";

//TrailCollectiv
import trailCollectivThumbnail from "../../assets/TrailCollectiv/trailCollectivThumbnail.png";
import trailCollectivOverview from '../../assets/TrailCollectiv/trailCollectiv_projectTitle.png';
import trailCollectivePhotos from '../../assets/TrailCollectiv/trailCollectiv_project_2.png'

//Aerium
import aeriumThumbnail from '../../assets/Aerium/aeriumThumbnail.png';
import aeriumTitle from '../../assets/Aerium/aerium_title.png';

//Logos Import
import java from "../../assets/logos/java.png";
import sql from "../../assets/logos/sql.png";
import python from "../../assets/logos/python.png";
import react from "../../assets/logos/react.png";
import nodejs from "../../assets/logos/nodejs.png";
import paytraillogo from "../../assets/logos/paytrail.png";
import postgresql from "../../assets/logos/postgresql.png";
import html from "../../assets/logos/html.png";
import springboot from "../../assets/logos/springboot.png";
import nextJS from "../../assets/logos/nextJS.png";
import reactnative from '../../assets/logos/reactnative.png';
import aws from '../../assets/logos/aws.png';
import blazor from '../../assets/logos/blazor.png';
import clogo from '../../assets/logos/csharp.png';

export default function Projects() {
  const [modalOpen, setModal] = useState(false);
  const [modalData, setModalData] = useState();


  const projectSelect = (projectTitle) => {
    //Set what attributes should be opened in the project card
    console.log("Projected Selected: ", projectTitle);
    const currentProject = projectModalData.filter((project) => project.id === projectTitle);
    setModalData(currentProject[0].data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const projectModalData = [
    {
      id: "paytrail",
      data: (
        <ProjectCard
          title="PayTrail"
          link="https://mypaytrail.com/"
          stack1={<img src={react} alt="React" className={classes.image} />}
          stack2={<img src={nodejs} alt="NodeJS" className={classes.image} />}
          stack3={
            <img src={aws} alt="Amazon Web Services" className={classes.image} />
          }
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={paytrailNews}
            alt="News for PayTrail"
          />
          <Video src={paytrailVideo} className={classes.video} />
          <img
            className={classes.image}
            src={paytrailPhotos}
            alt="News for PayTrail"
          />
        </ProjectCard>
      ),
    },
    {
      id: "hackathon",
      data: (
        <ProjectCard
          title="Hackathon"
          link="https://github.com/KBaldwin2/nanoleaf"
          stack1={<img src={python} alt="React" className={classes.image} />}
          stack2={<img src={html} alt="NodeJS" className={classes.image} />}
          stack3={null}
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={hackathonProcess}
            alt="Hackathon Process"
          />
          <Video src={hackathonThumbnail} className={classes.video} />
        </ProjectCard>
      ),
    },
    {
      id: "autofi",
      data: (
        <ProjectCard
          title="Autofi"
          link="https://github.com/AutoFi-Feature-Flag-Management"
          stack1={<img src={nextJS} alt="NextJS" className={classes.image} />}
          stack2={<img src={nodejs} alt="NodeJS" className={classes.image} />}
          stack3={null}
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={autofiPhotos}
            alt="Web application photos"    
          />
          <img
            className={classes.image}
            src={autofiOverview}
            alt="Project Overview"
          />
        </ProjectCard>
      ),
    },
    {
      id: "movie",
      data: (
        <ProjectCard
          title="Movie Theatre"
          link="https://github.com/KBaldwin2/ENSF614Project"
          stack1={<img src={react} alt="React" className={classes.image} />}
          stack2={<img src={springboot} alt="Springboot" className={classes.image} />}
          stack3={<img src={java} alt="Java" className={classes.image} />}
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={movieTheatre}
            alt="Web application photos"    
          />
        </ProjectCard>
      ),
    },
    {
      id: "trailcollectiv",
      data: (
        <ProjectCard
          title="TrailCollectiv"
          link="https://www.trailcollectiv.com/"
          stack1={<img src={nodejs} alt="NodeJS" className={classes.image} />}
          stack2={<img src={reactnative} alt="React Native" className={classes.image} />}
          stack3={<img src={aws} alt="Amazon Web Services" className={classes.image} />}
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={trailCollectivOverview}
            alt="Mobile app photos"    
          />
          <img
            className={classes.image}
            src={trailCollectivePhotos}
            alt="Trail photos"
          />
        </ProjectCard>
      ),
    },
    {
      id: "aerium",
      data: (
        <ProjectCard
          title="Aerium"
          link="https://aeriumanalytics.com/"
          stack1={<img src={clogo} alt="C#" className={classes.image} />}
          stack2={<img src={blazor} alt="Blazor" className={classes.image} />}
          stack3={null}
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={aeriumTitle}
            alt="Aerium overview"    
          />
        </ProjectCard>
      ),
    },
  ];

  return (
    <CardContainer>
      {modalOpen && modalData}
      <Title>PROJECTS & EXPERIENCE.</Title>
      <ProjectList projects={projects} onClick={projectSelect} />
    </CardContainer>
  );
}

const projects = [
  {
    image: paytrail,
    title: "paytrail",
  },
  {
    image: autofiThumbnail,
    title: "autofi",
  },
  {
    image:trailCollectivThumbnail,
    title: "trailcollectiv"
  },

  {
    image: aeriumThumbnail,
    title: "aerium"
  },
  {
    image: hackathon,
    title: "hackathon",
  },
];
