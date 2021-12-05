import * as React from 'react';
import {useTranslation} from "react-i18next";
import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Footer from "../../components/containers/public/footer/Footer";
import {useTheme} from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";




function Legal(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();

    return(
        <Container maxWidth={false} disableGutters={true} >
            <NavBar/>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop:'7%', backgroundColor: theme.palette.background.default}} mb={7}>
                <Container style={{display:'flex', minWidth:'100%'}}>

                    <Grid container direction="row">
                        <Grid item md={3}/>

                        <Grid item md={6}>
                            <Grid container direction="row" spacing={1} style={{display:'flex'}}>

                                <Grid item xs={12} mb={3}>
                                    <Typography variant="h4" component="h4" align="left" fontWeight={600} fontSize={40} color="#2F5597">
                                        { t('public:legal:title') }
                                    </Typography>
                                </Grid>  


                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:intro_1') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:intro_2') }
                                    </Typography>
                                </Grid>

                                
                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        { t('public:legal:article_1_title') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_1_content_1') }
                                    </Typography>
                                </Grid> 

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_1_content_2') }
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        { t('public:legal:article_2_title') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_2_content_1') }
                                    </Typography>
                                </Grid> 

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_2_content_2') }
                                    </Typography>
                                </Grid>   


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        { t('public:legal:article_3_title') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_3_content') }
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        { t('public:legal:article_4_title') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_4_content') }
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        { t('public:legal:article_5_title') }
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        { t('public:legal:article_5_content') }
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item md={3}/>

                    </Grid>
                </Container>
            </Box>

            <Footer/>
        </Container>
    )
}

export default Legal;