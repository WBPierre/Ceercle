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
import UserInterfaceList from "../components/containers/home/UserInterfaceList";
import Footer from "../components/containers/footer/Footer";
import TypingEffect from "../components/molecules/home/TypingEffect";
import {
    Card,
    CardContent, CardHeader,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Tab, Tabs,
    TextField,
    useTheme
} from "@mui/material";
import {useParams} from "react-router-dom";
import InboxIcon from '@mui/icons-material/Inbox';
import {CheckCircle} from "@mui/icons-material";

function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);
    let params = useParams();
    const [value, setValue] = useState(0);

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

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
                            <Grid container spacing={3} direction="column">
                                <Grid item>
                                    <Typography variant="h3" component="h3" align="left" fontWeight={600}>
                                        { t('demo:title') } <TypingEffect/>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" align="left" fontSize={20}>
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
                        </Grid>
                        <Grid item md={1}/>
                        <Grid item xs={12} md={7}>
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
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:firstname')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:name')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('demo:coworking.name')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:email')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:phone')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:zip_code')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button style={{width:'100%'}} variant="contained">Valider</Button>
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
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:firstname')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:name')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('demo:company.name')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('demo:company.function')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:professional_email')} variant="outlined" />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:phone')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={5}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField id="outlined-basic" label={t('generic:zip_code')} variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button style={{width:'100%'}} variant="contained">Valider</Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </Container>
    )
}

export default Demo;