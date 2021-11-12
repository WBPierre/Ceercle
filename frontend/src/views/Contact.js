import logo from './../logo.svg';
import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import NavBar from "./../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import HomeImage from "../assets/images/home/homeIntro.png"
import Box from "@mui/material/Box";
import DescriptionList from "../components/containers/home/DescriptionList";
import {useEffect, useRef, useState} from "react";
import Divider from "@mui/material/Divider";
import SCValueList from "../components/containers/home/SCValueList";
import Demo from "../components/molecules/home/Demo";
import UserInterfaceList from "../components/containers/home/UserInterfaceList";
import Footer from "../components/containers/footer/Footer";
import TypingEffect from "../components/molecules/home/TypingEffect";
import {useTheme} from "@mui/material";

function Contact(){
    const { t } = useTranslation();
    const theme = useTheme();

    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <Demo/>
            <Footer/>
        </Container>
    )
}

export default Contact;