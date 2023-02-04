
import classes from './ImageGrid.module.css';

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function ImageGrid(props) {
  return (
    <ImageList sx={{ height: 450 }} cols={4} rowHeight={250}>
      {props.items.map((item) => (
        <ImageListItem key={item.img} onClick={props.onClick}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

