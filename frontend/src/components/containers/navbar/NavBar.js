import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Grid from "@mui/material/Grid";
import LangSwitcher from "../../molecules/navbar/LangSwitcher";
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const options = ['Français', 'English'];

export default function NavBar(props) {
    
    const { t } = useTranslation();
    
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        //setDialogOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
        setDialogOpen(false);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        alert("clicked");
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const createProfileOpen = (event) => {
        setDialogOpen(true);
    };

    const [dialog_open, setDialogOpen] = React.useState(false);

    
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={createProfileOpen}> { t('navbar:create_profile')} </MenuItem>
            <MenuItem onClick={handleMenuClose}>{ t('navbar:connect_to_account')}</MenuItem>
        </Menu>
    );

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
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button variant="container"
                        startIcon={<AccountCircle />}
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
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


    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{zIndex: theme.zIndex.appBar, backgroundColor: theme.palette.background.default}}>
                <Toolbar>

                <Dialog open={dialog_open} onClose={handleClose}>
                    <DialogTitle>{ t('navbar:create_profile_dialog.title') }</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        { t('navbar:create_profile_dialog.content') }
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={ t('navbar:create_profile_dialog.first_name') }
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={ t('navbar:create_profile_dialog.last_name') }
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={ t('navbar:create_profile_dialog.email_adress') }
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={ t('navbar:create_profile_dialog.password') }
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" onClick={handleClose}> { t('navbar:create_profile_dialog.cancel_creation') } </Button>
                        <Button variant="text" onClick={handleClose}> { t('navbar:create_profile_dialog.confirm_creation') } </Button>
                    </DialogActions>
                </Dialog>

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
                                        <Button variant="text" size="medium" style={{fontWeight: 600, color: theme.palette.text.primary}}>{ t('navbar:offers')}</Button>
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
                                                aria-controls={menuId}
                                                aria-haspopup="true"
                                                onClick={handleProfileMenuOpen}
                                                style={{color: theme.palette.text.primary}}
                                        >
                                            { t('navbar:my_account')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
