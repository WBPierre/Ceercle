import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
import Box from "@mui/material/Box";


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
                                        <span style={{color:'#F7E510'}}>Du temps économisé. </span> 
                                        <span style={{color:'#F7220D'}}>Une productivité boostée. </span> 
                                        <span style={{color:'#25A209'}}>Une hausse du bien-être pour l'ensemble de vos collaborateurs.</span> 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="center" fontWeight={600}>
                                                { t('offers:main.sub_title_1') } { t('offers:main.sub_title_2') }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" align="center" style={{color:'#000000'}}>
                                                { t('offers:main.content') }
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