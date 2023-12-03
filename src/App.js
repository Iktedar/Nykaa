import './css/font.css';
import React, { lazy, Suspense } from 'react';
import { createTheme, withStyles, ThemeProvider } from '@mui/material/styles';
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"
import {
    Navigate, Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';
import RouteContainer from './containers/RouteContainer';
import ProtectedRoute from './containers/ProtectedRoute';
import Header from './Layout/Header';
import Home from './components/Home';

const breakpoints = createBreakpoints({});
// Theme
const muiTheme = createTheme({
    palette: {
        background: {
            default: '#fff',
        },
        primary: {
            main: '#F56EB3',
        },

        secondary: {
            main: '#FCEEF5'
            //   main: '#FFA1C9', light pink
        },
        tonalOffset: 0.1,
    },
    typography: {
        h1: {
            fontSize: 40,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '24px',
            },
        },
        h2: {
            fontSize: 36,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '22px',
            },
        },
        h3: {
            fontSize: 32,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '20px',
            },
        },
        h4: {
            fontSize: 24,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '18px',
            },
        },
        h5: {
            fontSize: 24,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '16px',
            },
        },

        h6: {
            fontSize: 20,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '14px',
            },
        },
        subtitle1: {
            fontSize: 16,
            fontFamily: 'Gilroy-Semibold',
            fontWeight: 600,
            [breakpoints.between('1000', '1400')]: {
                fontSize: '14px',
            },
        },
        subtitle2: {
            fontSize: 18,
            fontFamily: 'Gilroy-Medium',
            [breakpoints.between('1000', '1400')]: {
                fontSize: '14px',
            },
        },
        body1: {
            fontSize: 18,
            fontFamily: 'Gilroy-Medium',
            [breakpoints.between('1000', '1400')]: {
                fontSize: '16px',
            },
        },
        body2: {
            fontSize: 16,
            fontFamily: 'Gilroy-Medium',
            [breakpoints.between('1000', '1400')]: {
                fontSize: '14px !important',
            },
        },
        button: {
            fontFamily: 'Gilroy-Medium',
            textTransform: 'capitalize',
            borderRadius: '2px',
            [breakpoints.between('1000', '1400')]: {
                fontSize: '15px !important',
            },
        },
        spacing: 8,
  },
});

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        color: theme.palette.primary.contrastText,
    },
    link: {
        color: theme.palette.text.secondary,
    },
});

export function lazyPreload(component) {
    const Component = lazy(component);
    Component.preload = component;
    return <Component />;
}

const App = () => (
    <ThemeProvider theme={muiTheme}>
        {/* <Header /> */}
        <Router>
            <Suspense 
                // fallback={(<Loader />)}
                >
                <Routes>
                    <Route path="/login" element={lazyPreload(()=>import('./containers/LoginContainer'))} />
                    <Route path="/forgotpassword" element={lazyPreload(()=>import('./components/ForgotPassword'))} />
                    <Route path="/resetPassword" element={lazyPreload(()=>import('./components/ResetPassword'))} />
                    <Route path="/" element={ <ProtectedRoute />}>
                        <Route path="/home" element={<Home />}/>
                        <Route exact path="/" element={<Navigate to="/home" />} />
                    </Route>
                    <Route exact path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Suspense>
        </Router>
    </ThemeProvider>
);
  
export default App;