import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import VisuelSAAS from "../../../../assets/images/home/productPresentation/visuel_SAAS.png";
import iconMeeting from "../../../../assets/images/icons/iconMeeting.png";
import iconPpl from "../../../../assets/images/icons/iconPpl.png";
import iconCalendar from "../../../../assets/images/icons/iconCalendar.png";
import iconOffice from "../../../../assets/images/icons/iconOffice.png";
import anaBranson from "../../../../assets/images/home/productPresentation/anaBranson.png";
import seat from "../../../../assets/images/home/productPresentation/seat.png";
import { Chip, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { Fade, Zoom } from 'react-awesome-reveal';

function ProductPresentation({ props }) {
    const { t } = useTranslation();
    const theme = useTheme();


    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <div style={{ backgroundColor: theme.palette.background.paper, height: '100vh' }}>
                    <Grid container direction={"column"}>
                        <Grid item md={12} style={{ backgroundColor: '#2F5597' }} px={10} pb={10} pt={5}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item md={2}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                        <Grid container flexDirection={"column"} style={{ height: '100%' }} justifyContent={"flex-start"} alignItems={"center"}>
                                            <Grid item>
                                                <img src={anaBranson} style={{ width: '80%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={8}>
                                    <Zoom triggerOnce={true}>
                                        <Grid container direction={"column"} spacing={5}>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" fontSize={20} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_1')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontWeight={600} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_2')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontWeight={600} align="center" style={{ color: '#B4C7E7' }}>
                                                    {t('public:home:product_presentation.simply')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Zoom>
                                </Grid>
                                <Grid item md={2}>
                                    <Grid container flexDirection={"column"} style={{ height: '100%' }} justifyContent={"flex-end"} alignItems={"center"}>
                                        <Grid item>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={seat} style={{ width: '100%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} style={{ backgroundColor: theme.palette.background.paper }} px={10} pt={6} pb={10}>
                            <Zoom triggerOnce={true}>
                                <Grid container direction={"row"} spacing={5}>
                                    <Grid item md={3}>
                                        <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"space-around"} alignItems={"center"}>
                                            <Grid item>
                                                <Grid container direction={"column"} spacing={3}>
                                                    <Grid item textAlign={"center"}>
                                                        <img src={iconCalendar} style={{ width: '25%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label={t('public:home:product_presentation.chip_1')} style={{ backgroundColor: '#F3C6C3', color: "#A45B58", fontWeight: 600 }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction={"column"} spacing={3}>
                                                    <Grid item textAlign={"center"}>
                                                        <img src={iconOffice} style={{ width: '30%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label={t('public:home:product_presentation.chip_2')} style={{ backgroundColor: '#D2EFFB', color: '#508CB1', fontWeight: 600 }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <img src={VisuelSAAS} style={{ width: '100%' }} alt="contact" />
                                    </Grid>
                                    <Grid item md={3}>
                                        <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"space-around"} alignItems={"center"}>
                                            <Grid item>
                                                <Grid container direction={"column"} spacing={2}>
                                                    <Grid item textAlign={"center"}>
                                                        <img src={iconMeeting} style={{ width: '30%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label={t('public:home:product_presentation.chip_3')} style={{ backgroundColor: '#FCE5B2', color: "#9A740D", fontWeight: 600 }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction={"column"} spacing={2}>
                                                    <Grid item textAlign={"center"}>
                                                        <img src={iconPpl} style={{ width: '30%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label={t('public:home:product_presentation.chip_4')} style={{ backgroundColor: '#C3E4B6', color: '#6D8066', fontWeight: 600 }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Zoom>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <div style={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh' }}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12} style={{ backgroundColor: '#2F5597' }} px={10} pb={10} pt={5}>
                            <Zoom triggerOnce={true}>
                                <Grid container direction={"row"} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container direction={"column"} spacing={5}>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" fontSize={20} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_1')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontWeight={600} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_2')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontWeight={600} align="center" style={{ color: '#B4C7E7' }}>
                                                    {t('public:home:product_presentation.simply')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Zoom>
                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: theme.palette.background.paper }} px={1} py={10}>
                            <Zoom triggerOnce={true}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <img src={VisuelSAAS} style={{ width: '100%' }} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Zoom>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>

    )

}

export default ProductPresentation;