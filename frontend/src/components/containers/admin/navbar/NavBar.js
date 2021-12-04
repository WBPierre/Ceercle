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
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import iconPlanet from "../../../../assets/images/generic/iconPlanet.png";
import {useNavigate} from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LangSwitcher from "../../../molecules/navbar/LangSwitcher";
import {Chip, Drawer} from "@mui/material";
import Button from "@mui/material/Button";
import ModalLogin from "../../public/navbar/ModalLogin";
import {useTranslation} from "react-i18next";
import {DataGrid} from '@mui/x-data-grid';


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
    justifyContent: 'flex-end',
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'Nom de famille',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Prénom',
      width: 150,
      editable: true,
    },
    {
    field: 'company',
    headerName: 'Entreprise',
    width: 150,
    editable: true,
    },
    {
      field: 'phone',
      headerName: 'Téléphone',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      editable: true,
    },
    {
    field: 'date',
    headerName: 'Date',
    width: 120,
    editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'comment',
      headerName: 'Commentaire',
      width: 200,
      editable: true,
    }
  ];

  const rows = [
    { id: 1, firstName: 'Louis', lastName: 'Lacaille', company: "McKinsey", phone: 330612345678, email:"louis.lacaille@mckinsey.com", date:"2021-11-30", status:"En attente", comment:"" },
    { id: 2, firstName: 'Pierre', lastName: 'Dupont', company: "BCG", phone: 3300612345678, email:"pierre.dupont@bcg.com", date:"2021-11-30", status:"En attente", comment:"" },
    { id: 3, firstName: 'Paul', lastName: 'Martin', company: "AT Kearney", phone: 3300612345678, email:"paul.martin@kearney.com", date:"2021-11-28", status:"Planifié", comment:"" },
    { id: 4, firstName: 'Jacques', lastName: 'Prudel', company: "Bain", phone: 3300612345678, email:"jacques.prudel@bain.com", date:"2021-11-28", status:"Planifié", comment:"" },
    { id: 5, firstName: 'Marie', lastName: 'Juana', company: "Roland Berger", phone: 3300612345678, email:"marie.juana@rolandberger.com", date:"2021-11-27", status:"Planifié", comment:"" },
    { id: 6, firstName: 'Jeanne', lastName: 'Darc', company: "Joko", phone: 3300612345678, email:"jeanne.darc@joko.com", date:"2021-11-23", status:"Refusé", comment:"N'est pas intéressé par la solution" },
    { id: 7, firstName: 'Bernadette', lastName: 'Chirac', company: "Avencore", phone: 3300612345678, email:"bernadette.chirac@avencore.com", date:"2021-11-21", status:"Confirmé", comment:"Veut commencer asap" },
  ];

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
                <Toolbar>
                    <IconButton
                        style={{color:'blue'}}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="black"
                        style={{fontWeight:800}}
                        onClick={() => { navigate('/admin/')}} style={{cursor:'pointer'}}
                    >
                        Demande de démo
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
                
            </Drawer>


            <Main open={open}>
                <DrawerHeader />
                
                <div style={{ height: 800, width: 1400 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
                
            </Main>
        </Box>
    );
}
