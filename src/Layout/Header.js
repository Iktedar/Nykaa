import React, { useState } from "react";
import {Button, Box, Container, Link, OutlinedInput, InputAdornment} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingBagOutlined'

const useStyles = makeStyles(() => ({
    navbar: {
        // backgroundColor: '#0D1B28',
        background: 'white',
        borderBottom: '1px solid lightpink',
    },
    mainSection: {
        display: 'flex !important',
        alignItems: 'center',
        padding: '0px 60px',
        justifyContent: 'space-between'
    },
    SearchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoStyle: {
        width: '8%',
        marginRight: '16px'
        // padding: '8px 0px 4px 0px',
    },
    logoStyleMain: {
        width: '70%',
    },
    mainRightMenu: {
        marginLeft: 'auto',
    },
    rightMenu: {
        color: '#fff',
        opacity: '.6',
        listStyle: 'none',
        padding: '0px',
        ' & li': {
            display: 'inline-block',
            fontSize: '18px',
            padding: '0px 28px',
            fontFamily: 'Gilroy-Semibold',
            ' & img': {
                width: 'auto',
                padding: '0px 5px 0px 5px',
                verticalAlign: 'middle',
            },
        },
    },
    dropDown: {
        cursor: 'pointer',
    },
    arrowDown: {
        transform: 'rotate(45deg)',
        border: 'solid #FFFFFF',
        display: 'inline-block',
        padding: '4px',
        borderWidth: '0 2px 2px 0',
        marginLeft: '5px',
        marginTop: '2px',
        verticalAlign: 'text-top',
    },
    marginTop: {
        marginTop: '40px',
        marginLeft: '20px',
    },
    notificationBox: {
        zIndex: '999999 !important',
    },
    menuItemmI: {
        fontSize: '17px',
        marginRight: '15px',
    },
    menuItemm: {
        fontSize: '17px',
        padding: '5px 15px',
    },
    rightSection: {
        width: '96%',
    },
    inRightSection: {
        padding: '25px 70px 20px 32px',
        '& Table': {
            border: '1px solid rgba(224, 224, 224, 1)',
            marginLeft: '-24px',
            width: 'calc(100% + 50px)',
        },
    },
    addNewGroup: {
        fontSize: '18px',
        color: '#fff',
        border: '1px solid #428BCA',
        borderRadius: '2px',
        backgroundColor: '#428BCA',
        height: '48px',
        width: '205px',
        '&:hover': {
            backgroundColor: '#428BCA',
        },
    },
    adminButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tabStyle: {
        border: '1px solid #428BCA55',
        borderRadius: '2px',
        backgroundColor: '#0D1B2807',
        width: '450px',
    },
    tabStyleIn: {
        minWidth: '150px',
        zIndex: '99',
        fontSize: '18px',
        fontFamily: 'Gilroy-Semibold',
    },
    backColor: {
        backgroundColor: '#fff',
        boxShadow: '0px 0px 6px #00000029',
    },
    tabsCont: {
        padding: '0px',
    },
    borSect: {
        border: 'none',
    },
    icon: {
        verticalAlign: 'middle',
    },
    badge: {
        position: 'absolute',
        top: -'10px',
        right: '-10px',
        padding: '5px',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: 'white',
    },

    // 
    SignUpBox: {
        margin: '10px',
    },
    searchBox: {
        marginRight: '2rem'
    },
    searchInput: {
        // '&:hover': {
        //     width: '380px',
        //     zIndex: '9999999999'
        // }
    }
}));

console.log('BRAND', process.env.BRAND_NAME)

const Header = () => {
    const classes = useStyles();
    const [hoverSearch, setHoverSearch] = useState(false);
    
    return <Box className={classes.navbar} id="primary-header">
        <Container 
            direction="row"
            className={classes.mainSection}
            maxWidth="xl"
        >
            <Box className={classes.logoStyle}>
                <Link href="/">
                    <img src={Logo} className={classes.logoStyleMain} alt="logo" />
                </Link>
            </Box>
            <Box className={classes.SearchContainer}>
                <Box className={classes.searchBox}>
                    <OutlinedInput
                        placeholder={`Search on ${process.env.BRAND_NAME}`}
                        className={classes.searchInput}
                        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        size="small"
                        onMouseEnter={()=>{
                            setHoverSearch(true);
                        }}
                        onMouseLeave={()=>{
                            setHoverSearch(false);
                        }}
                    />
                </Box>
                
                <Box className={classes.SignUpBox}>
                    <Button variant="contained">Sign in</Button> 
                </Box>
                
                <Box>
                    <CartIcon />
                </Box>
            </Box>
        </Container>
    </Box>

}

export default Header;