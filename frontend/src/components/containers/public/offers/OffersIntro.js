import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import iconPlanet from "../../../../assets/images/icons/iconPlanet.png";
import PublicIcon from '@mui/icons-material/Public';
import {Fade, Zoom} from 'react-awesome-reveal';

function OffersIntro({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction={"column"}>
                    <Grid item md={12} style={{backgroundColor:"#2F5597"}} px={10}>
                        <Grid item md={12}>
                            <Grid container direction={"column"} spacing={5}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontWeight={600} align="center">
                                        <span style={{color:"#FFFFFF"}}>
                                            Du temps économisé. Un gain de clarté, de productivité et de bien-être.
                                        </span> 
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="center" fontWeight={600} style={{color:'#FFC4C0'}}>
                                                { t('offers:main.sub_title_1') }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} mb={3}>
                                            <Typography variant="h4" align="center" fontWeight={600} style={{color:'#FFC4C0'}}>
                                                { t('offers:main.sub_title_2') }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" fontWeight={100} align="center" style={{color:'#FFFFFF'}}>
                                                Choisissez la formule qui vous convient le mieux.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>    
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )

}

export default OffersIntro;