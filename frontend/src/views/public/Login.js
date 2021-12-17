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
import iconPlanet from "../../assets/images/generic/iconPlanet.png";
import GoogleIcon from "../../components/molecules/icons/GoogleIcon";
import MicrosoftIcon from "../../components/molecules/icons/MicrosoftIcon";
import SlackIcon from "../../components/molecules/icons/SlackIcon";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Login(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();

    const handleConnectTest = () => {
        console.log('tt')
    }

    return(

        <Container style={{minHeight:'100vh', display:'flex', minWidth:'100%', backgroundColor: theme.palette.background.paper}}>
            <Container maxWidth="sm">
                <Grid container direction="column"  alignItems="center" > 
                
                    <Grid item mt={7}>
                        <img src={iconPlanet} alt="contact" />
                    </Grid>

                    <Grid item mb={3}>

                        <Typography
                            variant="h6"
                            component="div"
                            color="#2F5597"
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
                                        <IconButton sx={{mr:2}} onClick={() => handleConnectTest()}>
                                            <GoogleIcon />
                                        </IconButton>    
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title={ t('public:login:connect_with_microsoft') } placement="top">
                                        <IconButton sx={{mr:2}}>
                                            <MicrosoftIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title={ t('public:login:connect_with_slack') } placement="top">
                                        <IconButton sx={{mr:2}}>
                                            <SlackIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>
                            </Grid>

                            <Typography component="h1" variant="h5" color="#2F5597">
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
                                />
                                <FormControlLabel
                                control={<Checkbox value="remember" sx={{color:"#363535"}} />}
                                label={ t('public:login:stay_connected') }
                                />
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
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