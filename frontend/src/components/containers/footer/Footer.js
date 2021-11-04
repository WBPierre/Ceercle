import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Essec from "../../../assets/images/footer/essec.jpg";
import Pepites from "../../../assets/images/footer/pepites.png";
import Paper from "@mui/material/Paper";

function Footer(){
    const theme = useTheme();

    return(
        <Box style={{backgroundColor: theme.palette.charcoal.main}} pb={3}>
            <Container maxWidth="xl">
                <Grid container direction="column" spacing={2} mt={5} >
                    <Grid item>
                        <Typography variant="body1" color="white" align="center">
                            Ils nous soutiennent :
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={5} justifyContent='center' alignItems="center">
                            <Grid item xs={6} md={2}>
                                <Paper elevation={0} style={{backgroundColor: 'transparent', backgroundImage: `url(${Essec}`, backgroundPosition:'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '20vmin'}} />
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <Paper elevation={0} style={{backgroundColor: 'transparent',backgroundImage: `url(${Pepites}`, backgroundPosition:'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '20vmin'}} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justifyContent="center">
                            <Grid item xs={2}>
                                <Typography variant={"body1"} color="white">Accueil</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"} color="white">Pricing</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"} color="white">Contact</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"} color="white">Mentions légales</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"} color="white">Conditions générales</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item align="center">
                        <Typography variant="subtitle1" color="white">
                            &copy; SpaceCorner 2021
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )

}

export default Footer;