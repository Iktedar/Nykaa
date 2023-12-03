import React from "react"; 
import {Button, Box, Container, AppBar, Toolbar, CssBaseline, Typography} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    navbarSecondary: {
        width: '100%',
    }
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const SecondaryHeader = (props) => {
    const classes = useStyles();
    const pages = ['Products', 'Pricing', 'Blog'];

    return  <Box className={classes.navbarSecondary}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar position="relative" variant="outline" color="secondary">
                        <Container maxWidth="lg">
                            <Toolbar>
                                {/* <Typography variant="h6" component="div">
                                    
                                </Typography> */}
                                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={()=>{}}
                                        sx={{ my: 2, display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                    ))}
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </HideOnScroll>
            </Box>
};

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SecondaryHeader;