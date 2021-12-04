import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {
    TextField,
    useTheme
} from "@mui/material";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
                            Bienvenue sur SpaceCorner !
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
                                    <Tooltip title="Se connecter avec Google" placement="top">
                                        <IconButton sx={{mr:2}}>
                                            <GoogleIcon />
                                        </IconButton>    
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title="Se connecter avec Microsoft" placement="top">
                                        <IconButton sx={{mr:2}}>
                                            <MicrosoftIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>

                                <Grid item md={1}>
                                    <Tooltip title="Se connecter avec Slack" placement="top">
                                        <IconButton sx={{mr:2}}>
                                            <SlackIcon />
                                        </IconButton>                     
                                    </Tooltip>
                                </Grid>
                            </Grid>

                            <Typography component="h1" variant="h5" color="#2F5597">
                                Mon compte
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Adresse Email"
                                name="email"
                                autoComplete="email"
                                />
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                />
                                <FormControlLabel
                                control={<Checkbox value="remember" sx={{color:"#363535"}} />}
                                label="Rester connecté(e)"
                                />
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                    Me connecter
                                </Button>
                            </Box>
                            
                            <Link href="#" variant="body2">
                                Mot de passe oublié ?
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Login;