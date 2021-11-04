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

function Home(){
    const { t } = useTranslation();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);
    const theme = useTheme();

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    var test = "test"
    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <div style={{backgroundColor: theme.palette.background.paper}}>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={2} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={6} ref={textRef}>
                            <Grid container spacing={3} direction="column">
                                <Grid item>
                                    <Typography variant="h3" component="h3" align="left" fontWeight={600}>
                                        { t('home:main.title') } <TypingEffect/>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" align="left" fontSize={20}>
                                    { t('home:main.content') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained">{ t("generic:demo") }</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                            <img src={HomeImage} style={{maxHeight: height, width:'100%'}} alt="logo" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <DescriptionList/>
            <SCValueList/>
            <Demo/>
            <UserInterfaceList/>
            <Footer/>
        </Container>
    )
}

export default Home;