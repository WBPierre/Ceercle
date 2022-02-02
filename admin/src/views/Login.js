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
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import Logo from "../assets/images/logo/logo_2.png";
import {useEffect, useRef, useState} from "react";
import AuthService from "../services/admin/auth.service";
import ApiService from "../services/api.service";
import TokenService from "../services/token.service";
import useAuth from "../components/context/auth/AuthHelper";
import * as Admin_Routes from "../navigation/Routes";

function Login(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useAuth();

    useEffect(() => {
        if(context.isAuth){
            navigate(Admin_Routes.DASHBOARD)
        }
    }, []);

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
                console.log("Error to handle")
            }else{
                await setAuth(res.data);
                navigate(Admin_Routes.DASHBOARD)
            }
        });
    }

    const setAuth = async (data) => {
        TokenService.setLocalAccessToken(data.token);
        TokenService.setLocalRefreshToken(data.refreshToken);
        ApiService.setHeader(data.token);
        await AuthService.verify().then((res) => {
            if (res.status === 200) {
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
                        <img src={Logo}  style={{ width: 50, height: 50 }} alt="contact" />
                    </Grid>

                    <Grid item mb={3}>

                        <Typography
                            variant="h6"
                            component="div"
                            color="primary"
                            style={{fontWeight:500}}
                            fontSize={24}
                        >
                            Ceercle
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

                            <Typography component="h1" variant="h5" color="#2F5597">
                                Administration
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
                                <Button
                                type="button"
                                fullWidth
                                onClick={() => login()}
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                    { t('public:login:connect_my_self') }
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Login;