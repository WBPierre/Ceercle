import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import NavBar from "./../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import {useEffect, useRef, useState} from "react";
import Divider from "@mui/material/Divider";
import Demo from "../components/molecules/home/Demo";
import Footer from "../components/containers/footer/Footer";
import {useTheme} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tab,
    Tabs
} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AccessAlarmSharp, LockOpenSharp, MoneyOffSharp } from '@mui/icons-material';
import { green } from '@mui/material/colors';

function Offers(){
    const { t } = useTranslation();
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);
    const theme = useTheme();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <div style={{backgroundColor: theme.palette.background.paper}}>
                <Container style={{minHeight:'60vh', display:'flex', paddingTop: 100}}>
                    <Grid container style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={11} md={11} ref={textRef}>
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
            <Divider spacing={10}/>
            <div>
                <Container>
                    <Grid container spacing={1.5} direction="column">
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
                                            subheader={ t('offers:offer_1.description') }
                                            titleTypographyProps={{ align: 'center' }}
                                            subheaderTypographyProps={{
                                                align: 'center',
                                            }}
                                            sx={{
                                                backgroundColor: (theme) =>
                                                  theme.palette.mode === 'light'
                                                    ? theme.palette.grey[300]
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
                                                { t('offers:offer_1.price') }
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary">
                                                { t('offers:main.unit_price') }
                                                </Typography>
                                            </Box>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_1')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_2')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_3')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_4')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_5')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.service_6')} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={t('offers:offer_1.services.max_users')} />
                                                </ListItem>
                                            </List> 
                                        </CardContent>
                                        <CardActions sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                                }}>
                                            <Button size="small">{ t("generic:demo") }</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12}>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                                >
                                <Item>
                                    <Grid container direction="raw">
                                        <Grid item spacing={4}>
                                            <AccessAlarmSharp sx={{ color: green[500] }}/>
                                        </Grid>
                                        <Grid item spacing={4}>
                                            <Typography variant="h5" component="h5" align="center" fontWeight={400}>
                                                        On-boarding rapide
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Item>
                                <Item>
                                    <Grid container direction="raw">
                                        <Grid item spacing={4}>
                                            <LockOpenSharp sx={{ color: green[500] }}/>
                                        </Grid>
                                        <Grid item spacing={4}>
                                            <Typography variant="h5" component="h5" align="center" fontWeight={400}>
                                                        Sans engagement
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Item>
                                <Item>
                                    <Grid container direction="raw">
                                        <Grid item spacing={4}>
                                            <MoneyOffSharp sx={{ color: green[500] }}/>
                                        </Grid>
                                        <Grid item spacing={4}>
                                            <Typography variant="h5" component="h5" align="center" fontWeight={400}>
                                                        Pas de frais de set-up
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Stack> 
                        </Grid>  
                    </Grid>
                    <Divider/>
                </Container>
            </div>
            <div style={{backgroundColor: theme.palette.background.paper}}>
                <Container style={{minHeight:'100vh', display:'flex', paddingTop: 100}}>
                    <Grid container spacing={1} style={{flex:1}} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12} ref={textRef}>
                            XXX
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