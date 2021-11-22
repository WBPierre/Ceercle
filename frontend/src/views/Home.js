import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import NavBar from "./../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import HomeImage from "../assets/images/home/homeIntro.png"
import ProductPresentation from "../components/containers/home/ProductPresentation";
import {useEffect, useRef, useState} from "react";
import DescriptionList from "../components/containers/home/DescriptionList";
import Demo from "../components/molecules/home/Demo";
import UserInterfaceList from "../components/containers/home/UserInterfaceList";
import Footer from "../components/containers/footer/Footer";
import TypingEffect from "../components/molecules/home/TypingEffect";
import {Fade, useTheme} from "@mui/material";
import ContactImage from "../assets/images/contact/right.jpg";
import Box from "@mui/material/Box";
import Intro from "../components/molecules/home/Intro";

function Home(){
    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <Intro/>
            <div style={{marginTop:'5%'}}/>
            <ProductPresentation/>
            <div style={{marginTop:'5%'}}/>
            <DescriptionList/>
            <div style={{marginTop:'5%'}}/>
            <Demo/>
            <div style={{marginTop:'5%'}}/>
            <UserInterfaceList/>
            <Footer/>
        </Container>
    )
}

export default Home;