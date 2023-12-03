import React from "react";
import Header from "../Layout/Header";
import ProtectedRoute from "./ProtectedRoute";
import Home from '../components/Home';
import {Button, Box, Grid} from '@mui/material';
import {
    Navigate, Route, Routes,
} from 'react-router-dom';

const RouteContainer = () => {
    
    return <>
        {/* <Header/> */}
        {/* <Box> */}
            {/* <Grid container direction="row"></Grid> */}
            {/* <Routes> */}
                <Route path="/home" element={
                    // <ProtectedRoute>
                        <Home />
                    // </ProtectedRoute>
                    
                }/>
                <Route exact path="/" element={<Navigate to="/home" />} />
                
                {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
            {/* </Routes> */}
        {/* </Box> */}
    </>
}

export default RouteContainer;