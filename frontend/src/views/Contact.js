import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import NavBar from "./../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import {useEffect, useRef, useState} from "react";
import Footer from "../components/containers/footer/Footer";
import TypingEffect from "../components/molecules/home/TypingEffect";
import {TextField, useTheme} from "@mui/material";
import ContactImage from "../assets/images/contact/right.jpg";

function Contact(){
    const { t } = useTranslation();
    const theme = useTheme();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    return(
        <Container maxWidth={false} disableGutters={true} style={{backgroundColor: theme.palette.background.default}}>
            <NavBar/>
            <div>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={2} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={6} ref={textRef}>
                            <Grid container spacing={3} direction="column">
                                <Grid item>
                                    <Typography variant="h3" component="h3" align="left" fontWeight={600}>
                                        { t('contact:title') } <TypingEffect/>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" align="left" fontSize={20}>
                                        { t('contact:subtitle') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                                        <Grid container spacing={3} direction="column" justifyContent="flex-start">
                                            <Grid item xs={12} md={6}>
                                                <TextField style={{width:'100%'}} id="standard-basic" label={t('generic:email')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'100%'}} id="standard-basic" label={t('generic:name')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'100%'}} id="standard-basic" label={t('contact:subject')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'100%'}} multiline={true} minRows={5} id="standard-basic" label={t('contact:your_message')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button style={{width:'100%'}} variant="contained">{t('generic:send')}</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Grid container spacing={3} direction="column" justifyContent="flex-start">
                                            <Grid item xs={12} md={6}>
                                                <TextField style={{width:'50%'}} id="standard-basic" label={t('generic:email')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'50%'}} id="standard-basic" label={t('generic:name')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'50%'}} id="standard-basic" label={t('contact:subject')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField style={{width:'50%'}} multiline={true} minRows={5} id="standard-basic" label={t('contact:your_message')} variant="standard" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button style={{width:'50%'}} variant="contained">{t('generic:send')}</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                            <img src={ContactImage} style={{maxHeight: height, width:'100%'}} alt="contact" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </Container>
    )
}

export default Contact;