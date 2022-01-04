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
import iconPlanet from "../../../assets/images/generic/iconPlanet.png";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import {Drawer} from "@mui/material";
import * as Admin_Routes from "../../../navigation/Routes";

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
                <img src={iconPlanet} style={{height:'20%', width:'20%'}} alt="logo" onClick={() => { navigate('/admin/')}} style={{cursor:'pointer'}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="black"
                    style={{fontWeight:800, fontSize:30}}
                    onClick={() => { navigate('/admin/')}} style={{cursor:'pointer'}}
                >
                    SpaceCorner Admin
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />


            <Typography
                variant="body-1"
                noWrap
                component="div"
                color="black"
                style={{fontWeight:100, fontSize:20}}
                align="left"
                mt={2}
                ml={0.5}
            >
                Demandes externes
            </Typography>

            <List>
                {['Demande de démo', "Demande d'inscription"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <OndemandVideoIcon /> : <AppRegistrationIcon />}
                        </ListItemIcon>
                        <ListItemText style={{color: "#7F7F7F"}} primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider />
            <ListItem button onClick={() => navigate(Admin_Routes.COMPANY_LIST)}>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText style={{color: "#7F7F7F"}} primary={"Sociétés"} />
            </ListItem>
        </Drawer>
    )
}

export default DrawerCustom;