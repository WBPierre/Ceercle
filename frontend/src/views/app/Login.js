import * as React from 'react';
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {
    TextField,
    useTheme
} from "@mui/material";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo/logo_2.png";
import GoogleIcon from "../../components/molecules/icons/GoogleIcon";
import MicrosoftIcon from "../../components/molecules/icons/MicrosoftIcon";
import SlackIcon from "../../components/molecules/icons/SlackIcon";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {useEffect, useState} from "react";
import AuthService from "../../services/app/auth.service";
import ApiService from "../../services/api.service";
import { useCookies } from 'react-cookie';
import useAuth from "../../components/context/auth/AuthHelper";
import TokenService from "../../services/token.service";

function Login(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['token']);
    const context = useAuth();

    useEffect(() => {
        if(context.isAuth){
            navigate('/app')
        }
    }, []); // eslint-disable-line

    const handleConnectTest = () => {
        setEmail('test@test.com');
        setPassword('test');
    }

    const handleChange = (event) => {
        if(event.target.name === "email"){
            setEmail(event.target.value);
        }else{
            setPassword(event.target.value);
        }
    }

    const login = async () => {
        const resources = {
            email: email,
            password: password
        }
        await AuthService.login(resources).then( async (res) => {
            if(res.status !== 200){
                console.log("Error to handle");
            }else{
                await setAuth(res.data);
                navigate('/app')
            }
        });
    }

    const setAuth = async (data) => {
        TokenService.setLocalAccessToken(data.token);
        TokenService.setLocalRefreshToken(data.refreshToken);
        ApiService.setHeader(data.token);
        await AuthService.verify().then((res) => {
            if(res.status === 200){
                context.updateAuth(true);
                context.updateUser(res.data);
            }
        });
    }

    return(

        <Container style={{minHeight:'100vh', display:'flex', minWidth:'100%', backgroundColor: theme.palette.background.paper}}>
            <Container maxWidth="sm">
                <Grid container direction="column"  alignItems="center" > 
                
                    <Grid item mt={7}>
                        <img src={logo} style={{width:50, height:50}} alt="contact" />
                    </Grid>

                    <Grid item mb={3}>

                        <Typography
                            variant="h6"
                            component="div"
                            color="#3F07A8"
                            style={{fontWeight:500}}
                            fontSize={24}
                        >
                            { t('public:login:welcome')}
                        </Typography>
                    </Grid>
                    
                    
                    <Grid item xs={false} sm={3} md={2}  maxWidth="xs" sx={{backgroundColor: '#FFFFFF', maxWidth:'30%'}}>
                        <Box
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mx:5
                            }}
                        >
                            <Grid container direction="row"  alignItems="center" justifyContent="center" spacing={1} mb={1}>
                                <Grid item md={1}>
                                    <Tooltip title={ t('public:login:connect_with_google') } placement="top">
                                        <IconButton disabled sx={{mr:2}} onClick={() => handleConnectTest()}>
                                            <GoogleIcon />
                                        </IconButton>    
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title={ t('public:login:connect_with_microsoft') } placement="top">
                                        <IconButton sx={{mr:2}} disabled>
                                            <MicrosoftIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title={ t('public:login:connect_with_slack') } placement="top">
                                        <IconButton sx={{mr:2}} disabled>
                                            <SlackIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>
                            </Grid>

                            <Typography component="h1" variant="h5" color="#3F07A8">
                                { t('public:login:my_account') }
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label={ t('generic:email') }
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleChange}
                                />
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label={ t('generic:password') }
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChange}
                                />
                                <FormControlLabel
                                control={<Checkbox value="remember" sx={{color:"#363535"}} />}
                                label={ t('public:login:stay_connected') }
                                />
                                <Button
                                type="button"
                                fullWidth
                                onClick={() => login()}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor:'#3F07A8' }}
                                >
                                    { t('public:login:connect_my_self') }
                                </Button>
                            </Box>
                            
                            <Link href="#" variant="body2">
                                { t('public:login:password_forgotten') }
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Login;