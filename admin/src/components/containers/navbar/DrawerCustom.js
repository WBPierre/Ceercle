import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import Logo from "../../../assets/images/logo/logo_2.png";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import {Drawer} from "@mui/material";
import * as Admin_Routes from "../../../navigation/Routes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from "@mui/icons-material/Build";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const drawerWidth = 240;


function DrawerCustom(props){
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(window.innerWidth > 900 ? true : false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        console.log("call");
    };

    return(
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
            open={true}
        >
            <DrawerHeader>
                <img src={Logo}  style={{ width: 50, height: 50,cursor:'pointer' }} alt="logo" onClick={() => { navigate(Admin_Routes.DASHBOARD)}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="#3F07A8"
                    style={{fontWeight:800, fontSize:30}}
                    onClick={() => { navigate(Admin_Routes.DASHBOARD)}} style={{cursor:'pointer'}}
                >
                    Ceercle Admin
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />
            <ListItem button onClick={() => navigate(Admin_Routes.DASHBOARD)}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText style={{color: "#7F7F7F"}} primary={"Dashboard"} />
            </ListItem>
            <ListItem button onClick={() => navigate(Admin_Routes.COMPANY_LIST)}>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText style={{color: "#7F7F7F"}} primary={"Companies"} />
            </ListItem>
            <Divider style={{ marginTop: 20 }} />
            <ListItem button disabled>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText style={{color: "#7F7F7F"}} primary={"Users"} />
            </ListItem>
            <ListItem button onClick={() => navigate(Admin_Routes.TEST)}>
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <ListItemText style={{color: "#7F7F7F"}} primary={"Tester"} />
            </ListItem>
        </Drawer>
    )
}

export default DrawerCustom;