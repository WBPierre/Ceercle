import * as React from 'react';
import {useTranslation} from "react-i18next";
import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Footer from "../../components/containers/public/footer/Footer";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    useTheme
} from "@mui/material";
import {Check} from "@mui/icons-material";
import {Fade} from 'react-awesome-reveal';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";




function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();

    return(
        <Container maxWidth={false} disableGutters={true} >
            <NavBar/>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop:'4%', backgroundColor: theme.palette.background.paper}}>
            <Container style={{minHeight:'95vh', display:'flex', minWidth:'100%'}}>
                <Grid container direction="row" backgroundColor="#FFFFFF" justifyContent="center" alignItems="center" style={{minHeight:'95vh', display:'flex', minWidth:'100%'}}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#FFFFFF',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <Fade direction={"left"} triggerOnce={true}>
                            <Grid container spacing={5} direction="column">
                                <Grid item sx={{mx: 5}} mb={3}>
                                    <Typography variant="h4" component="h4" align="left" fontWeight={600} fontSize={40} color="#2F5597">
                                        { t('public:demo:title') }
                                    </Typography>
                                </Grid>
                                <Grid item sx={{mx: 5}}>
                                    <Typography variant="body1" align="left" style={{color:'#999595'}} fontSize={25}>
                                        { t('public:demo:subtitle') }
                                    </Typography>
                                </Grid>
                                <Grid item sx={{mx: 5}}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check sx={{color:"#2F5597"}}/>
                                            </ListItemIcon>
                                            <ListItemText style={{color:'#999595'}} primaryTypographyProps={{fontSize:25}} primary={ t('public:demo:check_1') } />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check sx={{color:"#2F5597"}}/>
                                            </ListItemIcon>
                                            <ListItemText style={{color:'#999595'}} primaryTypographyProps={{fontSize:25}} primary={ t('public:demo:check_2') } />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Fade>

                    </Grid>
                    <Grid item xs={12} md={5} backgroundColor="#F9FBFE" style={{height:'100%'}} pt={2}>
                        <Box
                            sx={{
                            my: 10,
                            mx: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                            }}
                        >
                            
                            <Typography variant="body1" align="left" style={{color:'#2F5597'}} fontSize={35} fontWeight={400} mb={6}>
                                { t('public:demo:title_left_panel') }
                            </Typography>
                            
                            
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        fullWidth
                                        id="firstName"
                                        label={ t('generic:firstname') }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        fullWidth
                                        id="lastName"
                                        label={ t('generic:name') }
                                        name="lastName"
                                        autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        fullWidth
                                        id="company"
                                        label={ t('public:demo:company_name') }
                                        name="company"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        name="position"
                                        fullWidth
                                        id="position"
                                        label={ t('public:demo:function') }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        fullWidth
                                        id="zipCode"
                                        label={ t('generic:zip_code') }
                                        name="zipCode"
                                        autoComplete="postal-code"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        fullWidth
                                        id="email"
                                        label={ t('generic:professional_email') }
                                        name="email"
                                        autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        fullWidth
                                        id="phoneNumber"
                                        label={ t('generic:phone') }
                                        name="phoneNumber"
                                        autoComplete="phone-number"
                                        />
                                    </Grid>
                                </Grid>

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 7, backgroundColor: "#2F5597"}}>
                                    { t('generic:send') }
                                </Button>

                                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                                {'Copyright © '}
                                <Link color="inherit" onClick={() => { navigate('/')}}>
                                    { t('generic:website_url') }
                                </Link>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>

            <Footer/>
        </Container>
    )
}

export default Demo;