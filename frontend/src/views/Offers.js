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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';


function Offers(){
    const { t } = useTranslation();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);
    const theme = useTheme();

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <div style={{backgroundColor: theme.palette.background.paper}}>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={1} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12} ref={textRef}>
                            <Grid container spacing={1.5} direction="column">
                                <Grid item>
                                    <Typography variant="h4" component="h4" align="center" fontWeight={600}>
                                        { t('offers:main.title') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" component="h5" align="center" fontWeight={400}>
                                    { t('offers:main.sub_title_1') } { t('offers:main.sub_title_2') }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" component="h5" align="center" fontWeight={500}>
                                    { t('offers:main.content') }
                                    </Typography>
                                </Grid>   
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider/>
            <div>
                <Container>
                    <Grid container direction="column">
                        <Grid item xs={12} md={12}>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                >
                                { t('offers:main.our_offers') }
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Grid container direction="raw">
                                <Grid item>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            title={ t('offers:offer_1.title') }
                                            subheader='sous-titre'
                                            titleTypographyProps={{ align: 'center' }}
                                            subheaderTypographyProps={{
                                                align: 'center',
                                            }}
                                            sx={{
                                                backgroundColor: (theme) =>
                                                  theme.palette.mode === 'light'
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                              }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                                }}
                                            >
                                                <Typography component="h2" variant="h3" color="text.primary">
                                                3€
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary">
                                                { t('offers:main.unit_price') }
                                                </Typography>
                                            </Box>
                                                
                                            <ul>
                                                <Typography component="li" variant="subtitle1" align="center">
                                                    Déclaration de planning de présence
                                                </Typography>
                                                <Typography component="li" variant="subtitle1" align="center">
                                                    Réseration de postes de travail internes
                                                </Typography>
                                                <Typography component="li" variant="subtitle1" align="center">
                                                    Calendrier collaboratif de présence
                                                </Typography>
                                                <Typography component="li" variant="subtitle1" align="center">
                                                    Intégration SIRH et outils (Slack, Teams)
                                                </Typography>
                                                <Typography component="li" variant="subtitle1" align="center">
                                                    Dashboard de suivi de présence et analytics
                                                </Typography>
                                                <Typography component="li" variant="subtitle2" align="center">
                                                    Jusqu'à 300 utilisateurs
                                                </Typography>
                                            </ul>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Demander une démo</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Container>
            </div>
            <div style={{backgroundColor: theme.palette.background.paper}}>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={1} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12} ref={textRef}>
                            <Grid container spacing={1.5} direction="column">
                                <Grid item>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Demo/>
            <Footer/>
        </Container>
    )
}

export default Offers;