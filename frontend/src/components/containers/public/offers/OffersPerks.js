import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import iconPlanet from "../../../../assets/images/icons/iconPlanet.png";
import PublicIcon from '@mui/icons-material/Public';
import {Fade, Zoom} from 'react-awesome-reveal';
import RedeemIcon from '@mui/icons-material/Redeem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BoltIcon from '@mui/icons-material/Bolt';

function OffersPerks({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction={"column"} style={{backgroundColor:"#FEF0EC"}} pb={1} pt={1}>
                    <Grid container direction={"row"}>
                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}> 
                                <Grid item md={6}>
                                    <RedeemIcon style={{color:'#79463E', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Typography textAlign={"center"} variant="h5" style={{color:'#79463E'}} fontWeight={300}>1er mois offert</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <BoltIcon style={{color:'#79463E', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#79463E'}} fontWeight={300}>Déploiement en quelques minutes</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <AddShoppingCartIcon style={{color:'#79463E', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#79463E'}} fontWeight={300}>Sans frais de mise en place</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <HeadsetMicIcon style={{color:'#79463E', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#79463E'}} fontWeight={300}>Support intégré 7j/7</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Box>
    )

}

export default OffersPerks;