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
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, ListItemButton } from "@mui/material";
import LangSwitcher from "../../../molecules/navbar/LangSwitcher";
import WeatherService from "../../../../services/app/weather.service";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/min/locales";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../../../context/auth/AuthHelper";

const drawerWidth = 200;


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


/*
<IconButton aria-label="openNotif">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
 */

export default function AppBar(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [temp, setTemp] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');
    const context = useAuth();
    const day = moment().tz("Europe/London").locale('fr');

    useEffect(async () => {
        await WeatherService.getWeather("Paris").then((res) => {
            setTemp(res.data.current.temp_c);
            setWeatherIcon(res.data.current.condition.icon);
        });
    }, []);


    return (
        <AppBarStyle position="fixed" open={props.open} style={{ backgroundColor: theme.palette.background.paper }} elevation={0}>
            <Toolbar style={{ backgroundColor: "#FDF9F6", justifyContent: "center" }} >


                <Typography style={{
                    color: '#1F4E79',
                    fontSize: 23,
                    fontWeight: 600,
                    variant: 'body2',
                    textAlign: 'center'
                }}>
                    <span style={{fontWeight:400}}>{t('app:navbar:welcome')}</span>
                    {` ${context.user.firstName} !`}
                </Typography>

                <div style={{ flexGrow: 1 }} />

                <Typography
                    mr={3}
                    variant="h6"
                    noWrap
                    component="div"
                    color="#1F4E79"
                    style={{ fontWeight: 200, textTransform: 'capitalize' }}
                    fontSize={28}
                    align='center'
                >
                    <span style={{fontWeight:500}}>{day.format('dddd')} {day.format('DD')}</span> {day.format('MMMM')} {day.format('YYYY')}
                </Typography>

                <div style={{ flexGrow: 1 }} />

                <img src={weatherIcon} />

                <Typography
                    mr={3}
                    variant="h6"
                    noWrap
                    component="div"
                    color="#2A2828"
                    style={{ fontWeight: 100 }}
                    fontSize={23}
                    align='center'
                >
                    | {temp}°
                </Typography>



            </Toolbar>
        </AppBarStyle>
    );
}
