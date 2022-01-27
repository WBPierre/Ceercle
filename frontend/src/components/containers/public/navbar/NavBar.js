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
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HideOnScroll from "../../../molecules/navbar/HideOnScroll";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Logo from "../../../../assets/images/logo/logo_2.png";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
import * as Public_Routes from "../../../../navigation/public/Routes";
import * as App_Routes from "../../../../navigation/app/Routes";

export default function NavBar(props) {

    // Overall const
    const { t } = useTranslation();
    let navigate = useNavigate();

    // For mobile
    const [open, setOpen] = useState(false)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
        setOpen(false)
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const redirectToDemo = () => {
        navigate(Public_Routes.DEMO);
    }

    const redirectToOffers = () => {
        navigate(Public_Routes.OFFERS);
    }

    const connectHandler = () => {
        // setMobileMoreAnchorEl(null);
        // setOpen(false);
        // setOpenConnect(true)
        if(window.location.host.includes("ceercle")){
            window.open('https://app.ceercle.io/');
        }else{
            window.open(App_Routes.LOGIN);
        }
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
            <MenuItem onClick={redirectToOffers}>
                <Button variant="text" color="inherit" size="medium" style={{ fontWeight: 600 }}>{t('public:navbar:offers')}</Button>
            </MenuItem>
            <MenuItem onClick={redirectToDemo}>
                <Button variant="outlined" color="error" size="medium" style={{ fontWeight: 600 }}>{t('public:navbar:ask_for_demo')}</Button>
            </MenuItem>
            <MenuItem onClick={connectHandler}>
                <Button variant="text"
                    color="inherit"
                    size="medium"
                    aria-label="account of current user"
                    //onClick={handleProfileMenuOpen}
                    style={{ fontWeight: 600 }}
                >
                    {t('public:navbar:connect')}
                </Button>
            </MenuItem>
            <MenuItem>
                <LangSwitcher />
            </MenuItem>
            <MenuItem style={{ display: 'none' }}>
                <IconButton style={{ color: 'black' }} aria-label="add to shopping cart" sx={{ mr: 2 }}>
                    <WbSunnyIcon />
                </IconButton>
            </MenuItem>
        </Menu>
    );



    // Return
    return (

        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <AppBar style={{ backgroundColor: "#FDF9F6" }} elevation={0}>
                    <Toolbar>
                        <Button style={{ textTransform: 'capitalize', backgroundColor: 'transparent' }} disableRipple={true} startIcon={<img src={Logo} height={50} alt="logo" />} onClick={() => { navigate(Public_Routes.HOME) }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                color="#3F07A8"
                                style={{ fontWeight: 800 }}
                                fontSize={24}
                            >
                                Ceercle
                            </Typography>
                        </Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                size="medium"
                                aria-label="account of current user"
                                color="primary"
                                onClick={redirectToOffers}
                                style={{ fontWeight: 500, color:'#203864', textTransform: 'capitalize', fontSize: 18 }}
                            >
                                {t('public:navbar:offers')}
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 10 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton style={{ color: 'black', display: 'none' }} aria-label="add to shopping cart" sx={{ mr: 2 }}>
                                <WbSunnyIcon />
                            </IconButton>
                            <LangSwitcher dark={true}/>
                            <Button style={{ textTransform: 'none' }}>
                                <Chip variant="outlined"
                                    aria-label="account of current user"
                                    onClick={redirectToDemo}
                                    color="error"
                                    style={{ fontSize: 16, fontWeight: 600 }}
                                    sx={{ mr: 2 }}
                                    label={t('public:navbar:ask_for_demo')}
                                />
                            </Button>
                            <Button variant="text"
                                aria-label="account of current user"
                                onClick={connectHandler}
                                color="primary"
                                style={{ fontWeight: 500, textTransform: 'capitalize', fontSize: 18, color:'#203864' }}
                            >
                                {t('public:navbar:connect')}
                            </Button>
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
                                <Hamburger toggled={open} toggle={setOpen} color={"black"} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMobileMenu}
            <Toolbar />
        </Box>
    );
}
