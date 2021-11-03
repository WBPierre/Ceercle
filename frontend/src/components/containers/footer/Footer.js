import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import Container from "@mui/material/Container";
import Essec from "../../../assets/images/footer/essec.jpg";
import Pepites from "../../../assets/images/footer/pepites.png";

function Footer(){
    return(
        <Box style={{backgroundColor:'#9b9b9b'}} pb={3}>
            <Container maxWidth="xl">
                <Grid container direction="column" spacing={5} mt={5} >
                    <Grid item>
                        <Grid container direction="row">
                            <Grid item xs={6} md={6}>
                                <Typography variant="h3">
                                    SpaceCorner
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="body1">
                                            Ils nous soutiennent :
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row">
                                            <Grid item xs={6} md={6}>
                                                <img src={Essec} style={{maxWidth: '20vmin'}} alt="Essec ventures"/>
                                            </Grid>
                                            <Grid item xs={6} md={6}>
                                                <img src={Pepites} style={{maxWidth: '20vmin'}} alt="Pepites tech"/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justifyContent="center">
                            <Grid item xs={2}>
                                <Typography variant={"body1"}>Accueil</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"}>Pricing</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"}>Contact</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"}>Mentions légales</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant={"body1"}>Conditions générales</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item align="center">
                        <Typography variant="subtitle1">
                            &copy; SpaceCorner 2021
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )

}

export default Footer;