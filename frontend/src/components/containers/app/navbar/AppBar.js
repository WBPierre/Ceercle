import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LightModeIcon from '@mui/icons-material/LightMode';

const drawerWidth = 240;

const AppBarStyle = styled(MuiAppBar, {
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

export default function AppBar() {
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
        <AppBarStyle position="fixed" open={open} style={{ backgroundColor: theme.palette.background.paper }}>
            <Toolbar style={{ backgroundColor: "#F1B2AD", justifyContent: "center" }} >
                <IconButton
                    style={{ color: 'black' }}
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
                    style={{ fontWeight: 200 }}
                    fontSize={25}
                    align='center'
                >
                    Lundi 06 décembre 2021
                </Typography>

                <LightModeIcon sx={{ fontSize: 28 }} />

                <Typography
                    mr={3}
                    variant="h6"
                    noWrap
                    component="div"
                    color="white"
                    style={{ fontWeight: 100 }}
                    fontSize={25}
                    align='center'
                >
                    | 12°
                </Typography>

            </Toolbar>
        </AppBarStyle>
    );
}
