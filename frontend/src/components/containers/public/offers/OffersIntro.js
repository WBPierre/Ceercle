import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";

function OffersIntro({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
            <Box sx={{ backgroundColor:"#2F5597", display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction={"column"}>
                    <Grid item md={12} px={10} mt={8} mb={8}>
                        <Grid item md={12}>
                            <Grid container direction={"column"} spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontWeight={400} fontSize={36} align="center">
                                        <span style={{color:"#FFFFFF"}}>
                                            { t('public:offers:main.title') }
                                        </span> 
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} mb={3}>
                                    <Typography variant="h4" fontWeight={400} fontSize={36} align="center">
                                        <span style={{color:"#FFFFFF"}}>
                                            { t('public:offers:main.sub_title_1') }
                                        </span> 
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} mb={3}>
                                    <Typography variant="h4" fontWeight={600} fontSize={36} align="center">
                                        <span style={{color:"#FFC4C0"}}>
                                            { t('public:offers:main.sub_title_2') }
                                        </span> 
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h5" fontWeight={100} align="center" fontSize={30} style={{color:'#FFFFFF'}}>
                                        { t('public:offers:main.content') }
                                    </Typography>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )

}

export default OffersIntro;