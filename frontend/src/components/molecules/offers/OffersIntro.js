import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import iconPlanet from "../../../assets/images/icons/iconPlanet.png";
import PublicIcon from '@mui/icons-material/Public';

function OffersIntro({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction={"column"}>
                    <Grid item md={12} style={{backgroundColor:theme.palette.background.default}} px={10}>
                        <Grid item md={12}>
                            <Grid container direction={"column"} spacing={5}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontWeight={600} align="center">
                                        <span style={{color:'#0572F5'}}>Du temps économisé. </span> 
                                        <span style={{color:'#0572F5'}}>Une productivité boostée. </span> 
                                        <span style={{color:'#0572F5'}}>Une hausse du bien-être pour l'ensemble de vos collaborateurs.</span> 
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="center" fontWeight={600} style={{color:'#5B5654'}}>
                                                { t('offers:main.sub_title_1') } { t('offers:main.sub_title_2') }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" align="center" style={{color:'#5B5654'}}>
                                                { t('offers:main.content') }
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid> 
                                
                                <Grid item xs={12} align="center">
                                        <PublicIcon sx={{ color:"#0572F5", fontSize:70}}></PublicIcon>
                                </Grid>    
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )

}

export default OffersIntro;