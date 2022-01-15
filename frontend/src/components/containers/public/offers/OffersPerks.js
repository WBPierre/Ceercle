import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import RedeemIcon from '@mui/icons-material/Redeem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BoltIcon from '@mui/icons-material/Bolt';

function OffersPerks({props}){
    const { t } = useTranslation();


    return(
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction={"column"} style={{backgroundColor: "#3F07A8"}}>
                    <Grid container direction={"row"}>
                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}> 
                                <Grid item md={6}>
                                    <RedeemIcon style={{color:'#FFFFFF', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Typography textAlign={"center"} variant="h5" style={{color:'#FFFFFF'}} fontWeight={300}>{ t('public:offers:perks.perk_1') }</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <BoltIcon style={{color:'#FFFFFF', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#FFFFFF'}} fontWeight={300}>{ t('public:offers:perks.perk_2') }</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <AddShoppingCartIcon style={{color:'#FFFFFF', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#FFFFFF'}} fontWeight={300}>{ t('public:offers:perks.perk_3') }</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Grid container py={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item md={6}>
                                    <HeadsetMicIcon style={{color:'#FFFFFF', fontSize:70}}/>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item md={1} xs={12}/>
                                        <Grid item md={10} xs={12}>
                                            <Typography textAlign={"center"} variant="h5" style={{color:'#FFFFFF'}} fontWeight={300}>{ t('public:offers:perks.perk_4') }</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <div style={{marginTop:'2%'}}/>
            </Box>
    )

}

export default OffersPerks;