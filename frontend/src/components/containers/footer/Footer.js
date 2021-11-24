import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Box, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Essec from "../../../assets/images/footer/essec.jpg";
import Pepites from "../../../assets/images/footer/pepites.png";
import * as React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    const theme = useTheme();

    return(
        <Box style={{backgroundColor: theme.palette.background.default}} py={3}>
            <Container maxWidth="xl">
                <Grid container direction={"column"}>
                    <Grid item>
                        <Grid container direction="row" spacing={2}>
                            <Grid item md={2} xs={6}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color="black"
                                    style={{fontWeight:800}}
                                >
                                    Spacecorner
                                </Typography>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{color:'#2F5597'}} fontWeight={500}>Contact</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>hello@spacecorner.io</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Contactez-nous !</Typography>
                                    </Grid>
                                    <Grid item>
                                        <LinkedInIcon style={{color:'#7F7F7F'}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{color:'#2F5597'}} fontWeight={500}>Le site</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Accueil</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Nos offres</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Demander une démo</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Connexion</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{color:'#2F5597'}} fontWeight={500}>Légal</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Mentions légales</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{color:'#7F7F7F'}}>Conditions générales</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item textAlign={"center"}>
                                        <img src={Pepites} style={{maxWidth:'40%'}} alt="contact" />
                                    </Grid>
                                    <Grid item textAlign={"center"}>
                                        <img src={Essec} style={{maxWidth:'40%'}} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item align="center">
                            <Typography variant="subtitle1" style={{color:'#2F5597'}}>
                                &copy; SpaceCorner 2021 - All Rights Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )

}

export default Footer;