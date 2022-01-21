import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import All from "../../../../assets/images/footer/all.png";
import * as React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box style={{ backgroundColor: theme.palette.background.default }} py={3}>
            <Container maxWidth="xl">
                <Grid container direction={"column"} spacing={4}>
                    <Grid item>
                        <Grid container direction="row" spacing={3} justifyContent={"space-around"}>
                            <Grid item md={2} xs={6}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    style={{ fontWeight: 800, color:'#3F07A8' }}
                                >
                                    Ceercle
                                </Typography>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"} spacing={1}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{color:'#3F07A8'}} fontSize={20} fontWeight={500}>{t('public:footer:contact')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <a href={'mailto:contact@ceercle.io'} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>contact@ceercle.io</Typography>
                                        </a>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:contact_us')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <a href={'https://www.linkedin.com/company/70945415'} style={{ textDecoration: 'none' }}>
                                            <LinkedInIcon style={{ color: '#7F7F7F' }} />
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"} spacing={1}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{ color: '#3F07A8' }} fontSize={20} fontWeight={500}>{t('public:footer:the_website')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:home')}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/offers"} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:our_offers')}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/demo"} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:ask_for_demo')}</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Grid container direction={"column"} spacing={1}>
                                    <Grid item>
                                        <Typography variant={"h5"} style={{ color: '#3F07A8' }} fontSize={20} fontWeight={500}>{t('public:footer:legal')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/legal"} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:special_mentions')}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/cgu"} style={{ textDecoration: 'none' }}>
                                            <Typography variant={"body1"} style={{ color: '#3F07A8' }}>{t('public:footer:general_conditions')}</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <img src={All} style={{ width:'100%' }} alt="contact" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item align="center">
                            <Typography variant="subtitle1" style={{color:'#3F07A8'}}>
                                &copy; Ceercle 2022 - All Rights Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )

}

export default Footer;