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
import SCValue from "../components/molecules/home/SCValue";
import Demo from "../components/molecules/home/Demo";
import UserInterface from "../components/molecules/home/UserInterface";
import Footer from "../components/containers/footer/Footer";
import TypingEffect from "../components/molecules/home/TypingEffect";

function Home(){
    const { t } = useTranslation();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <Container maxWidth="xl" style={{minHeight:'100vh', display:'flex', paddingTop: 5}}>
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} ref={textRef}>
                        <Grid container spacing={3} direction="column">
                            <Grid item>
                                <Typography variant="h3" component="h3" align="left" fontWeight={600}>
                                    Optimisez la gestion du travail hybride de vos collaborateurs <TypingEffect/>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" align="left" fontSize={20}>
                                    Fluidifiez l'organisation de travail de vos équipes, pilotez l'usage de vos espaces et offrez à vos collaborateurs
                                    des soltuions pensées pour favoriser leurs bien-être et productivité. Le futur du travail, maintenant.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained">Demander une démo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                        <img src={HomeImage} style={{height: height}} alt="logo" />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <DescriptionList/>
                <Divider/>
                <SCValue/>
                <Divider/>
                <Demo/>
                <Divider/>
                <UserInterface/>
            </Container>
            <Footer/>
        </Container>
    )
}

export default Home;