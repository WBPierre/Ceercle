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

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
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
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <Button style={{ textTransform: 'capitalize', backgroundColor: 'transparent' }} disableRipple={true} startIcon={<img src={iconPlanet} height={40} alt="logo" />} onClick={() => { navigate('/app') }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="black"
                        style={{ fontWeight: 500 }}
                        fontSize={24}
                    >
                        SpaceCorner
                    </Typography>
                </Button>
            </DrawerHeader>

            <Divider />

            <List mb={5}>
                <ListItem component="div" disablePadding>
                    <IconButton
                        size="small"
                        onClick={props.handleDrawerClose}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/app')}>
                    <ListItemIcon>
                        <DashboardIcon color={activeRoutes[activeRoutes.length - 1] === "app" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "app" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "app" ? 500 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:dashboard')}
                    />
                </ListItem>
                <ListItem button button onClick={() => navigate('/app/calendar')}>
                    <ListItemIcon>
                        <EventIcon color={activeRoutes[activeRoutes.length - 1] === "calendar" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "calendar" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "calendar" ? 500 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:calendar')}
                    />
                </ListItem>
                <ListItem button disabled>
                    <ListItemIcon>
                        <ScreenSearchDesktopIcon color={activeRoutes[activeRoutes.length - 1] === "marketplace" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "marketplace" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "marketplace" ? 500 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary={t('app:navbar:marketplace')}
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/glossary')}>
                    <ListItemIcon>
                        <PeopleIcon color={activeRoutes[activeRoutes.length - 1] === "glossary" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "glossary" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "glossary" ? 500 : 200,
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
                            color: "#535454",
                            fontWeight: 200,
                            fontSize: 15,
                            variant: 'body2',
                            textAlign: 'center',
                            fontStyle: "italic"
                        }}
                        primary="Paramètres RH"
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/workpolicy')}>
                    <ListItemIcon>
                        <RuleIcon color={activeRoutes[activeRoutes.length - 1] === "workpolicy" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "workpolicy" ? 500 : 200,
                            fontSize: 18,
                            variant: 'body2',
                            textAlign: 'left'
                        }}
                        primary="Travail hybride"
                    />
                </ListItem>
                <ListItem button onClick={() => navigate('/app/teams')}>
                    <ListItemIcon>
                        <ConnectWithoutContactIcon color={activeRoutes[activeRoutes.length - 1] === "teams" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "teams" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "teams" ? 500 : 200,
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
                        <ManageAccountsIcon color={activeRoutes[activeRoutes.length - 1] === "myaccount" ? "primary" : "inherit"} sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            color: activeRoutes[activeRoutes.length - 1] === "myaccount" ? 'primary' : "#535454",
                            fontWeight: activeRoutes[activeRoutes.length - 1] === "myaccount" ? 500 : 200,
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
