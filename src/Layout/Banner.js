import React, { useEffect,useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    Slider: {
        '& img': {
            borderRadius: '10px',
            // height: '400px'
        }
    }
}));

function Item({item}) {
    return (
        <>
        {/* <Paper style={{position: 'absolute'}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper> */}
        <img src={item.slide} style={{width: '100%'}}/>
        </>
    )
}

const Banner = ({ slides }) => {
    const classes = useStyles();

    return (
        <Carousel
            className={classes.Slider}
            height="400px"
            indicators={false}
            autoPlay={false}
            stopAutoPlayOnHover
            navButtonsAlwaysVisible
            animation="slide"
        >
            {
                slides.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
};

Banner.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
}

export {Banner};
