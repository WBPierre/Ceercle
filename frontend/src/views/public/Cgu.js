import * as React from 'react';
import { useTranslation } from "react-i18next";
import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Footer from "../../components/containers/public/footer/Footer";
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";




function Cgu() {
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();

    return (
        <Container maxWidth={false} disableGutters={true} >
            <NavBar />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop: '7%', backgroundColor: theme.palette.background.default }} mb={7}>
                <Container style={{ display: 'flex', minWidth: '100%' }}>

                    <Grid container direction="row">
                        <Grid item md={3} />

                        <Grid item md={6}>
                            <Grid container direction="row" spacing={1} style={{ display: 'flex' }}>

                                <Grid item xs={12} mb={3}>
                                    <Typography variant="h4" component="h4" align="left" fontWeight={600} fontSize={40} color="#2F5597">
                                        {t('public:cgu:title')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:intro_1')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_1_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_1_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_2_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_2_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_3_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_3_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_4_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_4_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_4_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_4_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_4_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_4_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_4_content_6')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_5_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_7')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_8')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_9')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_10')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_11')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_12')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_13')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_14')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_15')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_16')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_17')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_18')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_19')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_20')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_21')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_22')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_23')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_5_content_24')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_5_content_25')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_6_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_6_content')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_7_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_7_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_7_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_7_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_7_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_7_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_7_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_7_content_7')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_8_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_7')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_8')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_9')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_10')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_11')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_12')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_13')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_14')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_15')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_16')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_17')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_18')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_19')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_8_content_20')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_21')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_22')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_23')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_24')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_25')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_26')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_27')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_8_content_28')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_9_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_7')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_8')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_9')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_10')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_11')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_12')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_13')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_14')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_15')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_16')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_9_content_17')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_9_content_18')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_10_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_10_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_11_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_7')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_8')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_9')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_10')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_11')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_12')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_13')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_14')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_15')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_16')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_17')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_18')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_19')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} style={{ textDecorationLine: 'underline' }} color="#4D5776">
                                        {t('public:cgu:article_11_content_20')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_21')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_22')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_23')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_24')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_25')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_26')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_27')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_28')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_29')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_30')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_11_content_31')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_12_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_12_content_7')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_13_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_13_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_14_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_14_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_15_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_15_content')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_16_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_16_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_17_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_17_content')}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_18_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_1')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_2')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_3')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_4')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_5')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_6')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_7')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_8')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_9')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_18_content_10')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_19_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_19_content')}
                                    </Typography>
                                </Grid>



                                <Grid item xs={12} mt={3}>
                                    <Typography variant="body" component="body" align="left" fontWeight={700} fontSize={20} color="#4D5776">
                                        {t('public:cgu:article_20_title')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body" component="body" align="left" fontWeight={50} fontSize={16} color="#4D5776">
                                        {t('public:cgu:article_20_content')}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item md={3} />

                    </Grid>
                </Container>
            </Box>

            <Footer />
        </Container>
    )
}

export default Cgu;