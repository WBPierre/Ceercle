import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LangSwitcher from "../../../molecules/navbar/LangSwitcher";
import {Chip, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import HideOnScroll from "../../../molecules/navbar/HideOnScroll";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import iconPlanet from "../../../../assets/images/generic/iconPlanet.png";
import {useState} from "react";
import ModalLogin from "./ModalLogin";
import { Turn as Hamburger } from 'hamburger-react'


export default function NavBar(props) {
    
    // Overall const
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();


    // For mobile
    const [open, setOpen] = useState(false)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [openConnect, setOpenConnect] = useState(false);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
        setOpen(false)
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const redirectToDemo = () => {
        navigate('/demo/company');
    }

    const redirectToOffers = () => {
        navigate('/offers');
    }

    const connectHandler = () => {
        setMobileMoreAnchorEl(null);
        setOpen(false);
        setOpenConnect(true)
    }

    const connectHandlerClose = () => {
        setOpenConnect(false)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button onClick={redirectToOffers} variant="text" color="inherit" size="medium" style={{fontWeight: 600}}>{ t('navbar:offers')}</Button>
            </MenuItem>
            <MenuItem>
                <Button onClick={redirectToDemo} variant="outlined" color="error" size="medium" style={{fontWeight: 600}}>{ t('navbar:ask_for_demo')}</Button>
            </MenuItem>
            <MenuItem>
                <Button variant="text"
                        color="inherit"
                        size="medium"
                        aria-label="account of current user"
                        //onClick={handleProfileMenuOpen}
                        style={{fontWeight: 600}}
                        onClick={connectHandler}
                >
                    { t('navbar:connect')}
                </Button>
            </MenuItem>
            <MenuItem>
                <LangSwitcher/>
            </MenuItem>
            <MenuItem style={{display:'none'}}>
                <IconButton style={{color:'black'}} aria-label="add to shopping cart" sx={{mr:2}}>
                    <WbSunnyIcon />
                </IconButton>
            </MenuItem>
        </Menu>
    );



    // Return
    return (

        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <AppBar style={{backgroundColor:theme.palette.background.paper}} elevation={0}>
                    <Toolbar>
                        <img src={iconPlanet} alt="logo" onClick={() => { navigate('/')}} style={{cursor:'pointer'}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="black"
                            style={{fontWeight:800}}
                        >
                            SpaceCorner
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                size="medium"
                                aria-label="account of current user"
                                color="primary"
                                onClick={redirectToOffers}
                            >
                                { t('navbar:offers')}
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 10 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton style={{color:'black', display:'none'}} aria-label="add to shopping cart" sx={{mr:2}}>
                                <WbSunnyIcon />
                            </IconButton>
                            <LangSwitcher/>
                            <Chip variant="outlined"
                                    aria-label="account of current user"
                                    onClick={redirectToDemo}
                                    color="error"
                                    style={{fontSize: 18}}
                                    sx={{mr:2}}
                                    label={t('navbar:ask_for_demo')}
                            />
                            <Button variant="text"
                                    aria-label="account of current user"
                                    onClick={connectHandler}
                                    color="primary"
                            >
                                { t('navbar:connect')}
                            </Button>
                            <ModalLogin open={openConnect} handleClose={connectHandlerClose}/>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <Hamburger toggled={open} toggle={setOpen} color={"black"}/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMobileMenu}
        </Box>
    );
}
