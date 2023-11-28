import React from "react";
import Title from "../UI/Title";
import Video from "../UI/Video";
import ProjectCard from "../Projects/ProjectModal";
import { useState } from "react";
import classes from "./Projects.module.css";
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
import hackathontwo from '../../assets/Hackathon/hackathon_2.png';

//Movie Theatre
import movieTheatre from "../../assets/Movie/movieTheatre.png";
import movieThumbnail from "../../assets/Movie/movieThumbnail.png";

//AutoFi
import autofiThumbnail from "../../assets/AutoFi/autoFiThumbnail.png";
import autofiPhotos from "../../assets/AutoFi/autofi_feature_photos.png";
import autofiOverview from "../../assets/AutoFi/autofi_project_overview.png";

//TrailCollectiv
import trailCollectivThumbnail from "../../assets/TrailCollectiv/trailCollectivThumbnail.png";
import trailCollectivOverview from '../../assets/TrailCollectiv/trailCollectiv_projectTitle.png';
import trailCollectivePhotos from '../../assets/TrailCollectiv/trailCollectiv_project_2.png'

//Aerium
import aeriumThumbnail from '../../assets/Aerium/aeriumThumbnail.png';
import aeriumTitle from '../../assets/Aerium/aerium_title.png';
import aeriumtwo from '../../assets/Aerium/aerium_2.png';

//SGI
import sgiThumbnail from '../../assets/sgi/sgiThumbnail.png';
import sgiTitle from '../../assets/sgi/sgiTitle.png';

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
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={paytrailNews}
            alt="News for PayTrail"
          />

          <img
            className={classes.image}
            src={paytrailPhotos}
            alt="News for PayTrail"
          />
          <div className={classes.video}>
            <Video src={paytrailVideo} className={classes.video} />
          </div>

        </ProjectCard>
      ),
    },
    {
      id: "hackathon",
      data: (
        <ProjectCard
          title="Hackathon"
          link="https://github.com/KBaldwin2/nanoleaf"
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={hackathonProcess}
            alt="Hackathon Process"
          />
          <img
            className={classes.image}
            src={hackathontwo}
            alt="Hackathon Process"
          />
          <div className={classes.video}>
            <Video src={hackathonThumbnail} className={classes.video} />
          </div>

        </ProjectCard>
      ),
    },
    {
      id: "autofi",
      data: (
        <ProjectCard
          title="Autofi"
          link="https://github.com/AutoFi-Feature-Flag-Management"
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
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={aeriumTitle}
            alt="Aerium overview"
          />
          <img
            className={classes.image}
            src={aeriumtwo}
            alt="Aerium Overview"
          />
        </ProjectCard>
      ),
    },
    {
      id: "sgi",
      data: (
        <ProjectCard
          title="SGI"
          link="https://sgi.sk.ca/"
          onClick={closeModal}
        >
          <img
            className={classes.image}
            src={sgiTitle}
            alt="SGI overview"
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
    image: trailCollectivThumbnail,
    title: "trailcollectiv"
  },
  {
    image: paytrail,
    title: "paytrail",
  },

  {
    image: aeriumThumbnail,
    title: "aerium"
  },
  {
    image: autofiThumbnail,
    title: "autofi",
  },


  {
    image: sgiThumbnail,
    title: "sgi"
  },

  {
    image: hackathon,
    title: "hackathon",
  }
];
