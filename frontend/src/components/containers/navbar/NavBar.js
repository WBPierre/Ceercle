import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from "@mui/material/Grid";
import LangSwitcher from "../../molecules/navbar/LangSwitcher";
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import DialogGeneric from '../generic/DialogGeneric';
import DialogLogin from '../../molecules/navbar/DialogLogin';
import {Link, useNavigate} from "react-router-dom";
import HideOnScroll from "../../molecules/navbar/HideOnScroll";

const options = ['Français', 'English'];

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
                <Button variant="outlined"
                        color="inherit"
                        size="medium"
                        aria-label="account of current user"
                        //onClick={handleProfileMenuOpen}
                        style={{fontWeight: 600}}
                >
                    { t('navbar:my_account')}
                </Button>
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
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Spacecorner
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                size="medium"
                                aria-label="account of current user"
                                color="inherit"
                            >
                                { t('navbar:offers')}
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 10 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="outlined"
                                    startIcon={<AccountCircle />}
                                    aria-label="account of current user"
                                    onClick={createProfileOpen}
                                    color="inherit"
                            >
                                { t('navbar:my_account')}
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
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
