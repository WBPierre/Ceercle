import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import {Avatar, Icon, Paper, useTheme} from "@mui/material";
import Thumbs from "../../../../assets/images/home/operations/thumbs.png";
import managee from "../../../../assets/images/home/operations/employees.png";
import rh from "../../../../assets/images/home/operations/rh2.png";
import finance from "../../../../assets/images/home/operations/card.png";
import ecology from "../../../../assets/images/home/operations/earth.png";
import { Fade } from "react-awesome-reveal";
import MeetingImage from "../../../../assets/images/home/intro/meeting.png";
import MeetingImageEN from "../../../../assets/images/home/intro/meeting_en.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Operations({ props }) {
    const { t } = useTranslation();
    const theme = useTheme();


    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                <div style={{ paddingBottom: '5%' }}>
                    <Grid container direction={"column"} style={{ height: '100%' }} alignItems={"space-around"}>
                        <Grid item xs={12} px={10} py={5} style={{backgroundColor: '#3F07A8'}} textAlign={"center"}>
                            <img src={Thumbs} style={{ width: '15%' }} alt="contact" />
                        </Grid>
                        <Grid item xs={12} px={10} py={5} mb={3} style={{ backgroundColor: '#3F07A8' }}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item md={2} />
                                <Grid item md={8} xs={12}>
                                    <Grid container direction={"column"} spacing={5}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="center" fontSize={38} fontWeight={600} style={{ color: '#FFFFFF' }}>
                                                {t('public:home:operations.title')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} fontSize={48} style={{ color: '#B4C7E7' }} align="center">
                                                {t('public:home:operations.subtitle')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={2} />
                            </Grid>
                        </Grid>
                        <Grid item xs={8} pt={3} pb={5}>
                            <Container>
                                <Grid container direction={"row"} spacing={5} component={Grid}>
                                    <Grid item md={3} xs={12}>
                                        <Fade direction={"up"} triggerOnce={true}>
                                            <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={managee} style={{ width: '100%',maxHeight:'25vh', minHeight:'25vh' }} alt="contact" />
                                                </Grid>
                                                <Grid item mb={1}>
                                                    <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_1.title')}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_1.text')}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                    <Grid item md={3} xs={12}>
                                        <Fade direction={"up"} triggerOnce={true}>
                                            <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={rh} style={{ width: '100%',maxHeight:'25vh', minHeight:'25vh' }} alt="contact" />
                                                </Grid>
                                                <Grid item mb={1}>
                                                    <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_2.title')}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_2.text')}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                    <Grid item md={3} xs={12}>
                                        <Fade direction={"up"} triggerOnce={true}>
                                            <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                                <Grid item textAlign={"center"} mt={'5vh'}>
                                                    <img src={finance} style={{ width: '90%', maxHeight:'20vh', minHeight:'20vh' }} alt="contact" />
                                                </Grid>
                                                <Grid item mb={1}>
                                                    <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_3.title')}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_3.text')}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                    <Grid item md={3} xs={12}>
                                        <Fade direction={"up"} triggerOnce={true}>
                                            <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={ecology} style={{ width: '80%', maxHeight:'25vh', minHeight:'25vh', paddingTop:'5vh' }} alt="contact" />
                                                </Grid>
                                                <Grid item mb={1}>
                                                    <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_4.title')}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_4.text')}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <div style={{ paddingBottom: '5%' }}>
                    <Grid container direction={"column"} style={{ height: '100%' }} alignItems={"space-around"}>
                        <Grid item xs={12} py={5} mb={3} style={{ backgroundColor: '#3F07A8' }}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} spacing={5}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="center" fontSize={38} fontWeight={600} style={{ color: '#FFFFFF' }}>
                                                {t('public:home:operations.title')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} fontSize={48} style={{ color: '#B4C7E7' }} align="center">
                                                {t('public:home:operations.subtitle')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} pt={3} pb={5}>
                            <Grid container direction={"row"} spacing={5} component={Grid}>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"up"} triggerOnce={true}>
                                        <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                            <Grid item mb={1}>
                                                <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_1.title')}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_1.text')}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"up"} triggerOnce={true}>
                                        <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                            <Grid item mb={1}>
                                                <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_2.title')}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_2.text')}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"up"} triggerOnce={true}>
                                        <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                            <Grid item mb={1}>
                                                <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_3.title')}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_3.text')}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"up"} triggerOnce={true}>
                                        <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                            <Grid item mb={1}>
                                                <Typography textAlign={"center"} variant="h4" style={{ color: '#3F07A8' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_4.title')}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography textAlign={"center"} style={{ color: '#3B3838' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_4.text')}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>

    )

}

export default Operations;