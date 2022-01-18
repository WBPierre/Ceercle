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
import logo_indigo from "../../../../assets/images/generic/logo_indigo.png";
import { useLocation, useNavigate } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LangSwitcher from "../../../molecules/navbar/LangSwitcher";
import { Chip, Drawer, ListItemButton, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import PanToolIcon from '@mui/icons-material/PanTool';
import { ArrowRight, Home, Settings } from "@mui/icons-material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import LightModeIcon from '@mui/icons-material/LightMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RuleIcon from '@mui/icons-material/Rule';
import { red } from '@mui/material/colors';
import useAuth from "../../../context/auth/AuthHelper";

const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

export default function DrawerCustom(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const location = useLocation();

    const activeRoutes = location.pathname.split('/');

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            PaperProps={{
                sx: {
                    backgroundColor: "#3F07A8",
                    color: "white",
                }
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <Button style={{ textTransform: 'capitalize', backgroundColor: 'transparent' }} disableRipple={true} startIcon={<img src={logo_indigo} height={45} alt="logo" />} onClick={() => { navigate('/app') }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="white"
                        style={{ fontWeight: 500 }}
                        fontSize={28}
                    >
                        Ceercle
                    </Typography>
                </Button>
            </DrawerHeader>


            <List mb={10}>
                <ListItem component="div" disablePadding>
                </ListItem>
            </List>

            <List>
                <ListItem button onClick={() => navigate('/app')} style={{backgroundColor: activeRoutes[activeRoutes.length - 1] === "app" ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'}}>
                    <ListItemIcon>
                        <DashboardIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "app" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "app" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "app" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:dashboard')}
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/calendar')} style={{backgroundColor: activeRoutes[activeRoutes.length - 1] === "calendar" ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'}}>
                    <ListItemIcon>
                        <EventIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "calendar" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "calendar" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "calendar" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:calendar')}
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/glossary')} style={{backgroundColor: activeRoutes[activeRoutes.length - 1] === "glossary" ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'}}>
                    <ListItemIcon>
                        <PeopleIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "glossary" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "glossary" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "glossary" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:glossary')}
                    />
                </ListItem>
                <Divider style={{ marginTop: 20 }} />
                <ListItem>
                    <ListItemText
                        primaryTypographyProps={{
                            color: "#FFFFFF",
                            fontWeight: 200,
                            fontSize: 15,
                            variant: 'body2',
                            textAlign: 'center',
                            fontStyle: "italic"
                        }}
                        primary="Paramètres RH"
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/workpolicy')} style={{backgroundColor: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'}}>
                    <ListItemIcon>
                        <RuleIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary="Paramètres"
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/teams')} style={{backgroundColor: activeRoutes[activeRoutes.length - 1] === "teams" ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'}}>
                    <ListItemIcon>
                        <ConnectWithoutContactIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "teams" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "teams" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "teams" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary="Equipes"
                    />
                </ListItem>
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/app/myaccount')}>
                    <ListItemIcon>
                        <ManageAccountsIcon sx={{ fontSize: activeRoutes[activeRoutes.length - 1] === "myaccount" ? 25 : 22, color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "myaccount" ? '#FFFFFF' : "#FFFFFF",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "myaccount" ? 700 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:my_account')}
                    />
                </ListItem>
            </List>
        </Drawer>
    );
}
