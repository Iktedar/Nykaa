// import { Box } from "@mui/system";

import React from "react";
import { makeStyles } from '@mui/styles';
import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgMediaCard from "../components/Card";
import { BANNER_TYPE } from "../constants";

const useStyles = makeStyles(() => ({
  SlideBox: {
    // '&:nth-child(1)': {
    //   padding: '0 40px 0 0',
    // },
    // '&:last-child': {
    //   padding: '0 0 0 40px',
    // }
    
    // '& img': {
    //   borderRadius: '10px',
    // }
  },
  FullSlide: {
    width: '100%',
    borderRadius: 16,
  }
}));

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

const responsiveFullWidth = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    partialVisibilityGutter: 40
  },
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
}

const defaultConfig = {
  centerMode: true,
  fullWidth: false,
}

const SlideItem = ({ type, item }) => {
  const classes = useStyles();

  switch(type) {
    case BANNER_TYPE.ONE_SLIDE_IN_VIEW:
      return <img src={item.slide} className={classes.FullSlide}/>
    return ;
    case BANNER_TYPE.MULTI_SLIDE_IN_VIEW:
      return <ImgMediaCard slideData={item}/>
    default: 
      return <Box className={classes.SlideBox}>
          <img src={item.slide} style={{width: '100%'}}/>
      </Box>
  }
}

const MultiBanner = ({ slides, config={} }) => {
  const Config = { ...defaultConfig, ...config };
  return <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={Config.centerMode}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
          responsive={Config.fullWidth ? responsiveFullWidth : { ...responsive, desktop: {...responsive.desktop, breakpoint: { ...responsive.desktop.breakpoint }, items: Config.items }}}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          // ssr
          // showDots
          // deviceType={'desktop'}
        >
          {
            slides.map( (slide, i) => {
              return <SlideItem key={slide.id} type={Config.type} item={slide} />
            })
          }
        </Carousel>
}

export default MultiBanner;