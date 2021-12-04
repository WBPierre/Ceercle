import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {useEffect, useRef, useState} from "react";
import Divider from "@mui/material/Divider";
import Footer from "../../components/containers/public/footer/Footer";
import {
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Tab, Tabs,
    TextField,
    useTheme
} from "@mui/material";
import {useParams} from "react-router-dom";
import {Check, CheckCircle} from "@mui/icons-material";
import {Fade} from 'react-awesome-reveal';


function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    const textRef = useRef(null);

    return(
        <Container maxWidth={false} disableGutters={true} style={{backgroundColor: theme.palette.background.default}}>
            
            <NavBar/>
            
            <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={5} ref={textRef}>
                        <Fade direction={"left"} triggerOnce={true}>
                            <Grid container spacing={3} direction="column">
                                <Grid item>
                                    <Typography variant="h4" component="h4" align="left" fontWeight={600} fontSize={45} color="primary">
                                        { t('public:demo:title') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" align="left" style={{color:'#7F7F7F'}} fontSize={20}>
                                        { t('public:demo:subtitle') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check color="primary"/>
                                            </ListItemIcon>
                                            <ListItemText style={{color:'#7F7F7F'}} primary={t('public:demo:check_1')} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check color="primary"/>
                                            </ListItemIcon>
                                            <ListItemText style={{color:'#7F7F7F'}} primary={t('public:demo:check_3')} />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Grid>

                    <Grid item xs={1} md={1} />
                    
                    <Grid item xs={12} md={6}>
                        <Fade direction={"right"} triggerOnce={true}>
                            <Card>
                                <CardHeader disableTypography={false}
                                    title={<Typography align="center" style={{color: "#2F5597", fontWeight:400, fontSize: 25}}>
                                    Renseigner mes informations
                                    </Typography>}
                                    >
                                </CardHeader>
                                
                                <Divider/>

                                <CardContent>
                                    <Grid container direction="column" spacing={5} mt={1}>
                                        <Grid item>
                                            <Grid container direction="row" spacing={5} mx={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('generic:firstname')} variant="standard" />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('generic:name')} variant="standard" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row" spacing={5} mx={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('public:demo:company.name')} variant="standard" />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('public:demo:company.function')} variant="standard" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row" spacing={5} mx={2}>
                                                <Grid item xs={12} md={10}>
                                                    <TextField id="outlined-basic" label={t('generic:professional_email')} variant="standard" fullWidth/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row" spacing={5} mx={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('generic:zip_code')} variant="standard" />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField id="outlined-basic" label={t('generic:phone')} variant="standard" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{textAlign:'center'}}>
                                            <Button style={{width:'50%'}} variant="contained">Valider</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Container>
    )
}

export default Demo;