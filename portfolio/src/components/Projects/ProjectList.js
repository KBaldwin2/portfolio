import { Grid } from "@mui/material";
import ProjectDisplay from "./ProjectDisplay";
import classes from "./ProjectList.module.css";
import { useEffect, useState } from "react";

export default function ProjectList(props) {
  const width = window.innerWidth;
  const breakpoint = 550;
  let spacing;

  if (width > breakpoint) {
    spacing = 6;
  } else {
    spacing = 12;
  }

  return (
    <Grid container spacing={1} justifyContent="center" direction={'row'}>
      {props.projects.map((project) => (
        <Grid item key={project.title} xs={spacing}>
          {" "}
          <ProjectDisplay
            image={project.image}
            title={project.title}
            onClick={props.onClick}
          />{" "}
        </Grid>
      ))}
    </Grid>
  );
}
