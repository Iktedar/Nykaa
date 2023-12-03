import React, { useState } from "react";
import {Button, Box, Container, Grid, Paper } from '@mui/material';
import Slide1 from '../assets/images/slide1.png';
import Slide2 from '../assets/images/slide2.png';
import Slide3 from '../assets/images/slide3.png';
import Slide1SM from '../assets/images/slide1-sm.png';
import Slide2SM from '../assets/images/slide2-sm.png';
import Slide3SM from '../assets/images/slide3-sm.png';
import Slide4SM from '../assets/images/slide4-sm.png';
import Slide5SM from '../assets/images/slide5-sm.png';
import Slide6SM from '../assets/images/slide6-sm.png';

import { styled } from '@mui/material/styles';

// import { Banner } from "../Layout/Banner";
import BannerContainer from "../containers/BannerContainer";
import MultiBanner from "../Layout/MultiBanner";
import { BANNER_TYPE } from "../constants";
import LargeCard from "./LargeCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {
    const Slides = [
        {
            id: 'Slide1',
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            slide: Slide1
        },
        {
            id: 'Slide2',
            name: "Random Name #2",
            description: "Hello World!",
            slide: Slide2
        },
        {
            id: 'Slide3',
            name: "This is third slide #3",
            description: "Hello World!",
            slide: Slide3
        }
    ];

    const SlidesSM = [
        {
            id: 'Slide1',
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            slide: Slide1SM
        },
        {
            id: 'Slide2',
            name: "Random Name #2",
            description: "Hello World!",
            slide: Slide2SM
        },
        {
            id: 'Slide3',
            name: "This is third slide #3",
            description: "Hello World!",
            slide: Slide3SM
        },
        {
            id: 'Slide4',
            name: "This is third slide #4",
            description: "Hello World!",
            slide: Slide4SM
        },
        {
            id: 'Slide5',
            name: "This is third slide #5",
            description: "Hello World!",
            slide: Slide5SM
        },
        {
            id: 'Slide6',
            name: "This is third slide #6",
            description: "Hello World!",
            slide: Slide6SM
        }
    ];


    return <Container maxWidth="xl" disableGutters>
        <Box><h2>Best in Products</h2></Box>
        <MultiBanner slides={Slides} config={{ type: BANNER_TYPE.ONE_SLIDE_IN_VIEW, centerMode: false, fullWidth: true }} />
        {/* <BannerContainer slides={Slides} /> */}
        <Box><h2>Trending</h2></Box>
        <MultiBanner slides={SlidesSM} config={{ type: BANNER_TYPE.MULTI_SLIDE_IN_VIEW, items: 3 }} />
        <Box><h2>New Arivals</h2></Box>
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    SlidesSM.map((slide) => {
                        return <Grid key={slide.id} item xs={6}>
                                    <LargeCard media={slide}/>
                                </Grid>
                    })
                }
            </Grid>
        </Box>
        <Box><h2>New Arivals</h2></Box>
        {/* <MultiBanner slides={SlidesSM} config={{ type: '', items: 2, centerMode: false }} /> */}
      </Container>
}

export default Home;