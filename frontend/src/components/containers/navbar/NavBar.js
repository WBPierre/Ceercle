import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import LangSwitcher from "../../molecules/navbar/LangSwitcher";
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import HideOnScroll from "../../molecules/navbar/HideOnScroll";
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function NavBar(props) {
    
    // Overall const
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();


    // For mobile
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
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
                <Button onClick={() => navigate('/offers')} variant="text" color="inherit" size="medium" style={{fontWeight: 600}}>{ t('navbar:offers')}</Button>
            </MenuItem>
            <MenuItem>
                <Button onClick={() => navigate('/offers')} variant="outlined" color="error" size="medium" style={{fontWeight: 600}}>{ t('navbar:ask_for_demo')}</Button>
            </MenuItem>
            <MenuItem>
                <Button variant="text"
                        color="inherit"
                        size="medium"
                        aria-label="account of current user"
                        //onClick={handleProfileMenuOpen}
                        style={{fontWeight: 600}}
                >
                    { t('navbar:connect')}
                </Button>
            </MenuItem>
            <MenuItem>
                <LangSwitcher/>
            </MenuItem>
            <MenuItem>
                <IconButton style={{color:'black'}} aria-label="add to shopping cart" sx={{mr:2}}>
                    <WbSunnyIcon />
                </IconButton>
            </MenuItem>
        </Menu>
    );

    //  Dialog logic
    const [dialog_open, setDialogOpen] = React.useState(false);
    const createProfileOpen = (event) => {
        setDialogOpen(true);
    };
    const createProfileClose = (event) => {
        setDialogOpen(false);
    };


    // Return
    return (

        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <AppBar style={{backgroundColor:theme.palette.background.default}}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="black"
                            style={{fontWeight:800}}
                        >
                            Spacecorner
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                size="medium"
                                aria-label="account of current user"
                                color="primary"
                            >
                                { t('navbar:offers')}
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 10 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton style={{color:'black'}} aria-label="add to shopping cart" sx={{mr:2}}>
                                <WbSunnyIcon />
                            </IconButton>
                            <LangSwitcher/>
                            <Button variant="outlined"
                                    aria-label="account of current user"
                                    onClick={createProfileOpen}
                                    color="error"
                                    sx={{mr:2}}
                            >
                                { t('navbar:ask_for_demo')}
                            </Button>
                            <Button variant="text"
                                    aria-label="account of current user"
                                    onClick={createProfileOpen}
                                    color="primary"
                            >
                                { t('navbar:connect')}
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                style={{color:'black'}}
                                onClick={handleMobileMenuOpen}
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMobileMenu}
        </Box>
    );
}
