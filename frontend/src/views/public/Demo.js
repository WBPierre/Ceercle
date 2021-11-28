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
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Tab, Tabs,
    TextField,
    useTheme
} from "@mui/material";
import {useParams} from "react-router-dom";
import {CheckCircle} from "@mui/icons-material";
import {Fade} from 'react-awesome-reveal';


function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    const textRef = useRef(null);
    let params = useParams();
    const [value, setValue] = useState(0);

    useEffect( () => {
        if(params.type === "space"){
            setValue(0);
        }else{
            setValue(1);
        }
    }, [params.type])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth={false} disableGutters={true} style={{backgroundColor: theme.palette.background.default}}>
            <NavBar/>
            <div>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={2} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4} ref={textRef}>
                            <Fade direction={"left"} triggerOnce={true}>
                                <Grid container spacing={3} direction="column">
                                    <Grid item>
                                        <Typography variant="h3" component="h3" align="left" fontWeight={600}>
                                            { t('demo:title') }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" align="left" style={{color:'#7F7F7F'}} fontSize={20}>
                                            { t('demo:subtitle') }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckCircle color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('demo:check_1')} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckCircle color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('demo:check_2')} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckCircle color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('demo:check_3')} />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item md={1}/>
                        <Grid item xs={12} md={7}>
                            <Fade direction={"right"} triggerOnce={true}>
                                <Card>
                                    <CardContent>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label={t('demo:coworking.title')} id="tab-coworking" aria-controls="tabpanel-0" style={{width:'50%'}} />
                                            <Tab label={t('demo:company.title')} id="tab-company" aria-controls="tabpanel-1" style={{width:'50%'}}/>
                                        </Tabs>
                                        <Divider/>
                                        <div
                                            role="tabpanel"
                                            hidden={value !== 0}
                                            id="tabpanel-0"
                                            aria-labelledby="tab-coworking">
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
                                                            <TextField id="outlined-basic" label={t('demo:coworking.name')} variant="standard" />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:email')} variant="standard" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="row" spacing={5} mx={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:phone')} variant="standard" />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:zip_code')} variant="standard" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{textAlign:'center'}}>
                                                    <Button style={{width:'50%'}} variant="contained">Valider</Button>
                                                </Grid>
                                            </Grid>
                                        </div>

                                        <div
                                            role="tabpanel"
                                            hidden={value !== 1}
                                            id="tabpanel-1"
                                            aria-labelledby="tab-company">
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
                                                            <TextField id="outlined-basic" label={t('demo:company.name')} variant="standard" />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('demo:company.function')} variant="standard" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="row" spacing={5} mx={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:professional_email')} variant="standard" />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:phone')} variant="standard" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="row" spacing={5} mx={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField id="outlined-basic" label={t('generic:zip_code')} variant="standard" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{textAlign:'center'}}>
                                                    <Button style={{width:'50%'}} variant="contained">Valider</Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </Container>
    )
}

export default Demo;