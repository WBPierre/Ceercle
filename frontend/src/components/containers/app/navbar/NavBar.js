import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import iconPlanet from "../../../../assets/images/generic/iconPlanet.png";
import {useNavigate} from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LangSwitcher from "../../../molecules/navbar/LangSwitcher";
import {Chip, Drawer, ListItemButton, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import ModalLogin from "../../public/navbar/ModalLogin";
import {useTranslation} from "react-i18next";
import PanToolIcon from '@mui/icons-material/PanTool';
import {ArrowRight, Home, Settings} from "@mui/icons-material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import LightModeIcon from '@mui/icons-material/LightMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { red } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

export default function NavBar() {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(window.innerWidth > 900 ? true : false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open} style={{backgroundColor:theme.palette.background.paper}}>
                <Toolbar style={{backgroundColor:"#F1B2AD", justifyContent:"center"}} >
                    <IconButton
                        style={{color:'black'}}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography 
                        mr={3}
                        variant="h6"
                        noWrap
                        component="div"
                        color="white"
                        style={{fontWeight:200}}
                        fontSize={25}
                        align='center'
                    >
                        Lundi 06 décembre 2021
                    </Typography>

                    <LightModeIcon sx={{ fontSize: 28 }}/>

                    <Typography 
                        mr={3}
                        variant="h6"
                        noWrap
                        component="div"
                        color="white"
                        style={{fontWeight:100}}
                        fontSize={25}
                        align='center'
                    >
                        | 12°
                    </Typography>

                </Toolbar>
            </AppBar>
            
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Button style={{textTransform: 'capitalize', backgroundColor:'transparent'}} disableRipple={true} startIcon={<img src={iconPlanet} height={40} alt="logo"/>} onClick={() => { navigate('/app/')}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="black"
                            style={{fontWeight:500}}
                            fontSize={24}
                        >
                            SpaceCorner
                        </Typography>
                    </Button>
                </DrawerHeader>
                
                <Divider />
                
                <List mb={5}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <ListItemText
                                primary={t('app:navbar:welcome')}
                                primaryTypographyProps={{
                                    color: '#7A82FC',
                                    fontWeight: 600,
                                    fontSize: 21,
                                    variant: 'body2',
                                    textAlign: 'right'
                                }}
                            />
                            <ListItemText
                                primary="Léa !"
                                primaryTypographyProps={{
                                    fontWeight: 200,
                                    fontSize: 21,
                                    variant: 'body2',
                                    textAlign:'center'
                                }}
                            />
                        </ListItemButton>
                        <IconButton
                            size="small"
                            onClick={handleDrawerClose}
                        >
                            <ArrowBackIosIcon/>
                        </IconButton>
                    </ListItem>
                </List>
                <List alignItems="flex-start">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon color="primary" sx={{ fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText 
                            primaryTypographyProps={{
                                color: 'primary',
                                fontWeight: 500,
                                fontSize: 22,
                                variant: 'body2',
                                textAlign: 'left'
                            }}
                            primary={t('app:navbar:dashboard')}
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EventIcon sx={{ fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText 
                            primaryTypographyProps={{
                                color:"#535454",
                                fontWeight: 200,
                                fontSize: 22,
                                variant: 'body2',
                                textAlign: 'left'
                            }}
                            primary={t('app:navbar:calendar')}
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ScreenSearchDesktopIcon sx={{ fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText 
                            primaryTypographyProps={{
                                color:"#535454",
                                fontWeight: 200,
                                fontSize: 22,
                                variant: 'body2',
                                textAlign: 'left'
                            }}
                            primary={t('app:navbar:marketplace')}
                            />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon sx={{ fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText 
                            primaryTypographyProps={{
                                color:"#535454",
                                fontWeight: 200,
                                fontSize: 22,
                                variant: 'body2',
                                textAlign: 'left'
                            }}
                            primary={t('app:navbar:glossary')}
                        />
                    </ListItem>
                </List>
                <Box sx={{ flexGrow: 1 }} />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ManageAccountsIcon sx={{ color: red[700], fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText 
                            primaryTypographyProps={{
                                color:"#d32f2f",
                                fontWeight: 200,
                                fontSize: 22,
                                variant: 'body2',
                                textAlign: 'left'
                            }}
                            primary={t('app:navbar:my_account')}
                        />
                    </ListItem>
                </List>
            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    A remplir
                </Typography>
            </Main>
        </Box>
    );
}
