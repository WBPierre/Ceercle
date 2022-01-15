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
import {useState} from "react";
import { Fade as Fader } from '@mui/material';
import LoadingIcons from 'react-loading-icons'
import axios from "axios";




function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();
    const [send, setSend] = useState(false);
    const [awaitingResponse, setAwaitingResponse] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [errorCompany, setErrorCompany] = useState(false);
    const [fonction, setFonction] = useState('');
    const [errorFonction, setErrorFonction] = useState(false);
    const [zipCode, setZipCode] = useState('');
    const [errorZipCode, setErrorZipCode] = useState(false);
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [phone, setPhone] = useState('');
    const [errorPhone, setErrorPhone] = useState(false);

    const sendInformation = () => {
        if(validate()){
            setSend(true);
            const resources = {
                "firstName": firstName,
                "lastName":lastName,
                "companyName":companyName,
                "fonction": fonction,
                "zipCode":zipCode,
                "email":email,
                "phoneNumber":phone
            };
            axios.post('/api/contact', resources).then((res) => {
                setAwaitingResponse(false);
            })
        }
    }

    const validate = () => {
        let valid = true;
        if(firstName.length === 0) {
            valid = false;
            setErrorFirstName(true)
        }
        if(lastName.length === 0) {
            valid = false;
            setErrorLastName(true)
        }
        if(companyName.length === 0) {
            valid = false;
            setErrorCompany(true)
        }
        if(fonction.length === 0) {
            valid = false;
            setErrorFonction(true)
        }
        if(zipCode.length === 0 || zipCode.length !== 5) {
            valid = false;
            setErrorZipCode(true)
        }
        if(email.length === 0 || !ValidateEmail(email)) {
            valid = false;
            setErrorEmail(true)
        }
        if(email.phone === 0 || phone.length < 10) {
            valid = false;
            setErrorPhone(true);
        }
        return valid
    }

    function ValidateEmail(mail)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        return (false)
    }

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'firstName':
                setFirstName(e.target.value);
                setErrorFirstName(false);
                break;
            case 'lastName':
                setLastName(e.target.value);
                setErrorLastName(false);
                break;
            case 'companyName':
                setCompanyName(e.target.value);
                setErrorCompany(false);
                break;
            case 'fonction':
                setFonction(e.target.value);
                setErrorFonction(false);
                break;
            case 'zipCode':
                setZipCode(e.target.value);
                setErrorZipCode(false);
                break;
            case 'email':
                setEmail(e.target.value);
                setErrorEmail(false);
                break;
            case 'phone':
                setPhone(e.target.value);
                setErrorPhone(false);
                break;
            default:
                return;
        }
    }

    return(
        <Container maxWidth={false} disableGutters={true} >
            <NavBar/>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <Grid container direction="row" backgroundColor="#FDF9F6" justifyContent="center" alignItems="center" style={{minWidth:'100%'}}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        paddingLeft={10}
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
                    <Grid item md={1} xs={false}/>
                    <Grid item xs={12} md={5} backgroundColor="#F9FBFE" style={{height:'100%'}} pt={2} paddingRight={10}>
                        <Box
                            sx={{
                            my: 10,
                            mx: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                            }}
                        >
                            <Typography variant="body1" textAlign="left" style={{color:'#2F5597'}} fontSize={35} fontWeight={400} mb={6}>
                                { t('public:demo:title_left_panel') }
                            </Typography>
                            <Fader in={!awaitingResponse} timeout={{ appear: 1000, enter: 1000, exit: 0 }}>
                                <Typography variant={"body1"} textAlign={"left"} style={{color: awaitingResponse ? 'transparent' : '#2F5597'}}>
                                    {!send ? 'emptyString' : 'Merci pour votre message. Nos équipes y répondront au plus vite !' }
                                </Typography>
                            </Fader>
                            <Fader in={awaitingResponse} timeout={{ appear: 0, enter: 0, exit: 1000 }} unmountOnExit={false}>
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                name="firstName"
                                                error={errorFirstName}
                                                fullWidth
                                                id="firstName"
                                                autoComplete="given-name"
                                                label={ t('generic:firstname') }
                                                disabled={send}
                                                value={firstName}
                                                helperText={errorFirstName && t('generic:invalid_field')}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                id="lastName"
                                                label={ t('generic:name') }
                                                name="lastName"
                                                autoComplete="family-name"
                                                disabled={send}
                                                value={lastName}
                                                error={errorLastName}
                                                helperText={errorLastName && t('generic:invalid_field')}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="company"
                                                label={ t('public:demo:company_name') }
                                                name="companyName"
                                                disabled={send}
                                                value={companyName}
                                                error={errorCompany}
                                                helperText={errorCompany && t('generic:invalid_field')}
                                                onChange={handleChange}                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                name="fonction"
                                                fullWidth
                                                id="position"
                                                label={ t('public:demo:function') }
                                                disabled={send}
                                                value={fonction}
                                                error={errorFonction}
                                                helperText={ errorFonction && t('generic:invalid_field')}
                                                onChange={handleChange}                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                id="zipCode"
                                                label={ t('generic:zip_code') }
                                                name="zipCode"
                                                autoComplete="postal-code"
                                                disabled={send}
                                                value={zipCode}
                                                error={errorZipCode}
                                                helperText={errorZipCode && t('generic:invalid_field')}
                                                onChange={handleChange}                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                label={ t('generic:professional_email') }
                                                name="email"
                                                autoComplete="email"
                                                disabled={send}
                                                value={email}
                                                error={errorEmail}
                                                helperText={errorEmail && t('generic:invalid_field')}
                                                onChange={handleChange}                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="phone"
                                                label={ t('generic:phone') }
                                                name="phone"
                                                autoComplete="phone-number"
                                                disabled={send}
                                                value={phone}
                                                error={errorPhone}
                                                helperText={errorPhone && t('generic:invalid_field')}
                                                onChange={handleChange}                                            />
                                        </Grid>
                                    </Grid>

                                    <Button disabled={send} onClick={() => sendInformation()} fullWidth variant="contained" sx={{ mt: 7, backgroundColor: "#2F5597"}}>
                                        {!send ?  t('generic:send') : <LoadingIcons.Puff height={25}/>}
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
                            </Fader>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, marginTop: '10vh'}}>
                <Grid container direction="row" backgroundColor="#FFFFFF" justifyContent="center" alignItems="center" style={{minWidth:'100%'}}>
                    <Grid
                        item
                        xs={12}
                        md={6}
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
                                my: 5,
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
            </Box>

            <Footer/>
        </Container>
    )
}

export default Demo;