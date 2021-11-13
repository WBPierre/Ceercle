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
import {Link} from 'react-router-dom';

const options = ['Français', 'English'];

export default function NavBar(props) {
    
    // Overall const
    const { t } = useTranslation();
    const theme = useTheme();


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
                <Button variant="text" color="inherit" size="medium" style={{fontWeight: 600}}>{ t('navbar:offers')}</Button>
            </MenuItem>
            <MenuItem>
                <Button variant="text" color="inherit" size="medium" style={{fontWeight: 600}}>{ t('navbar:add_coworking')}</Button>
            </MenuItem>
            <MenuItem>
                <Button variant="outlined" color="inherit" size="medium" style={{fontWeight: 600}}>{ t('generic:demo')}</Button>
            </MenuItem>
            <MenuItem>
                <Button variant="container"
                        startIcon={<AccountCircle />}
                        edge="end"
                        aria-label="account of current user"
                        //onClick={handleProfileMenuOpen}
                        style={{color: theme.palette.text.primary}}
                >
                    { t('navbar:my_account')}
                </Button>
            </MenuItem>
            <MenuItem>
                <LangSwitcher/>
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
            <AppBar position="fixed" style={{zIndex: theme.zIndex.appBar, backgroundColor: theme.palette.background.default}}>
                <Toolbar>

                    <DialogGeneric openState={dialog_open} onClose={createProfileClose} title={ t('navbar:create_profile_dialog.title') }>
                        <DialogLogin cancel={createProfileClose} confirm={createProfileClose} />
                    </DialogGeneric>

                    <Grid container alignItems="center">
                        <Grid item md={3}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                color={theme.palette.text.primary}
                            >
                                { t('navbar:company_name')}
                            </Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Box sx={{ display: { xs: 'none', sm:'none', md: 'flex' } }}>
                                <Grid container spacing={1} direction="row" justifyContent="flex-end" alignItems="center">
                                    <Grid item>
                                        <Link to="/offers">
                                            <Button variant="text" size="medium" style={{fontWeight: 600, color: theme.palette.text.primary}}>{ t('navbar:offers')}</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="text" color="inherit" size="medium" style={{fontWeight: 600, color: theme.palette.text.primary}}>{ t('navbar:add_coworking')}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="inherit" size="medium" style={{fontWeight: 600, color: theme.palette.text.primary}}>{ t('generic:demo')}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="container"
                                                startIcon={<AccountCircle />}
                                                edge="end"
                                                aria-label="account of current user"
                                                onClick={createProfileOpen}
                                                style={{color: theme.palette.text.primary}}
                                        >
                                            { t('navbar:my_account')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, justifyContent: 'flex-end'}}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    onClick={handleMobileMenuOpen}
                                    style={{color:'black'}}
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
