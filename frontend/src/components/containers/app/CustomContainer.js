import * as React from "react";
import AppBar from "./navbar/AppBar";
import DrawerCustom from "./navbar/DrawerCustom";
import Box from "@mui/material/Box";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Container from "@mui/material/Container";
import {useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

const drawerWidth = 200;

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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

function CustomContainer(props){

    const location = useLocation();

    const [open, setOpen] = useState(window.innerWidth > 900 ? true : false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        console.log("call");
    };


    if(location.pathname === "/app/" || location.pathname === "/" || location.pathname.includes("invitation") || location.pathname.includes("verify/oAuth")){
        return (
            props.children
        )
    }else{
        return(
            <Box sx={{ display: 'flex', minHeight:'100vh'}}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flex:1}}>
                    <AppBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
                    <DrawerCustom open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
                    <Main open={open} style={{backgroundColor:'#FDF9F6'}}>
                        <DrawerHeader />
                        <Container>
                            {props.children}
                        </Container>
                    </Main>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flex:1}}>
                    <Grid container direction={"row"} style={{flex:1}} alignItems={"center"} justifyContent={"center"}>
                        <Grid item>
                            <Typography>Version mobile en cours de construction</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )
    }
}

export default CustomContainer;