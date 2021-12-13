import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, useTheme } from "@mui/material";
import step_1 from "../../../../assets/images/home/value/step_1.png";
import step_2 from "../../../../assets/images/home/value/step_2.png";
import step_3 from "../../../../assets/images/home/value/step_3.png";
import step_4 from "../../../../assets/images/home/value/step_4.png";
import step_1_2 from "../../../../assets/images/home/value/step_1_2.png";
import step_2_2 from "../../../../assets/images/home/value/step_2_2.png";
import step_3_2 from "../../../../assets/images/home/value/step_3_2.png";
import step_3_3 from "../../../../assets/images/home/value/step_3_3.png";
import step_4_2 from "../../../../assets/images/home/value/step_4_2.png";
import Box from "@mui/material/Box";
import { Fade } from 'react-awesome-reveal';

function OfferDescription(props) {

    const { t } = useTranslation();
    const theme = useTheme();


    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: "#2F5597" }} pt={10}>
                <Fade triggerOnce={true}>
                    <Grid container direction={"row"}>
                        <Grid item md={12}>
                            <Grid container direction={"column"} spacing={5}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" fontWeight={600} fontSize={52} align="center" color="white">
                                        {t('public:home:offer_description.main.title')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontSize={28} fontWeight={400} align="center" style={{ color: '#B4C7E7' }}>
                                        {t('public:home:offer_description.main.subtitle')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
                <div style={{ marginTop: '5%' }} />
                <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%', backgroundColor: 'orange' }}>
                        <Grid item md={12} style={{ backgroundColor: theme.palette.background.default }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Chip label={t('public:home:offer_description.step_1.chip_title')} style={{ color: '#2F5597', backgroundColor: '#DAE3F3', fontSize: 26, padding: 5 }} />
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10} py={5} mb={3}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <img src={step_1_2} style={{ height: '25%', width: '25%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_1')} <span style={{ color: '#4C82D3' }}>{t('public:home:offer_description.step_1.title_1_color')}</span> </Typography>
                                                <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_2')} <span style={{ color: '#9872B2' }}>{t('public:home:offer_description.step_1.title_2_color')}</span></Typography>
                                                <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_3')} <span style={{ color: '#60B56D' }}>{t('public:home:offer_description.step_1.title_3_color')}</span></Typography>

                                            </Fade>
                                        </Grid>
                                        <Grid item py={5} pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_1.text')}</Typography>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: theme.palette.background.paper, borderTopLeftRadius: '10%' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={step_1} style={{ height: '50%', width: '50%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%', backgroundColor: 'orange' }}>
                        <Grid item md={12} style={{ backgroundColor: theme.palette.background.default }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item pl={10} py={5}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <img src={step_2_2} style={{ height: '30%', width: '30%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_2.title_1')} <span style={{ color: '#C00000' }}>{t('public:home:offer_description.step_2.title_1_color')}</span>  {t('public:home:offer_description.step_2.title_2')} <span style={{ color: '#0087E9' }}>{t('public:home:offer_description.step_2.title_2_color')}</span></Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item py={5} pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_2.text')}</Typography>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: theme.palette.background.paper }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={step_2} style={{ height: '60%', width: '60%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%', backgroundColor: 'orange' }}>
                        <Grid item md={12} style={{ backgroundColor: theme.palette.background.default }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Chip label={t('public:home:offer_description.step_3.chip_title')} style={{ color: '#BA605A', backgroundColor: '#FAF1F1', fontSize: 26, padding: 5 }} />
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10} py={5}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Grid container direction={"row"}>
                                                    <Grid item md={3}>
                                                        <img src={step_3_2} style={{ height: '100%', width: '80%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item md={3}>
                                                        <img src={step_3_3} style={{ height: '100%', width: '80%' }} alt="contact" />
                                                    </Grid>
                                                </Grid>
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="h4" fontWeight={600}><span style={{ color: '#FFC000' }}>{t('public:home:offer_description.step_3.title_1_color')}</span>{t('public:home:offer_description.step_3.title_1')}</Typography>
                                                <Typography variant="h4" fontWeight={600}><span style={{ color: '#5046E5' }}>{t('public:home:offer_description.step_3.title_2_color')}</span>{t('public:home:offer_description.step_3.title_2')}</Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item py={5} pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_3.text')}</Typography>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: theme.palette.background.paper }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={step_3} style={{ height: '60%', width: '60%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%' }}>
                        <Grid item md={12} style={{ backgroundColor: theme.palette.background.default }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item pl={10} py={5}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <img src={step_4_2} style={{ height: '30%', width: '30%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_4.title_1')}<span style={{ color: '#60B56D' }}>{t('public:home:offer_description.step_4.title_1_color')}</span></Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item py={5} pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_4.text')}</Typography>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: theme.palette.background.paper, borderBottomLeftRadius: '10%' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={step_4} style={{ height: '70%', width: '70%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid container direction={"row"}>
                    <Grid item>
                        <div style={{ backgroundColor: theme.palette.background.default }}>
                            <Grid container direction={"row"}>
                                <Grid item xs={12}>
                                    <Fade triggerOnce={true}>
                                        <Grid container direction={"column"} spacing={5}>
                                            <Grid item xs={12}>
                                                <Typography variant="h3" fontWeight={600} fontSize={52} align="center" color="error">
                                                    {t('public:home:offer_description.main.title')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontWeight={400} fontSize={28} align="center">
                                                    {t('public:home:offer_description.main.subtitle')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <div style={{ marginTop: '5%' }} />
                    <Grid item>
                        <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                            <Grid container direction={"row"} style={{ height: '100%', backgroundColor: 'orange' }}>
                                <Grid item xs={12} style={{ backgroundColor: theme.palette.background.default }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={1}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Chip label={t('public:home:offer_description.step_1.chip_title')} style={{ color: '#2F5597', backgroundColor: '#DAE3F3', fontSize: 26, padding: 5 }} />
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5} py={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Avatar style={{ fontSize: 18, color: '#DAE3F3', backgroundColor: '#2F5597' }}>1</Avatar>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_1')} <span style={{ color: '#4C82D3' }}>{t('public:home:offer_description.step_1.title_1_color')}</span> </Typography>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_2')} <span style={{ color: '#9872B2' }}>{t('public:home:offer_description.step_1.title_2_color')}</span> {t('public:home:offer_description.step_1.title_3')} <span style={{ color: '#60B56D' }}>{t('public:home:offer_description.step_1.title_3_color')}</span> </Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_1.text')}</Typography>
                                                    </Fade>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item xs={12} style={{ backgroundColor: theme.palette.background.default }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={1}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item pl={5} py={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Avatar style={{ fontSize: 18, color: '#DAE3F3', backgroundColor: '#2F5597' }}>2</Avatar>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_2.title_1')} <span style={{ color: '#C00000' }}>{t('public:home:offer_description.step_2.title_1_color')}</span>  {t('public:home:offer_description.step_2.title_2')} <span style={{ color: '#0087E9' }}>{t('public:home:offer_description.step_2.title_2_color')}</span></Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_2.text')}</Typography>
                                                    </Fade>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item xs={12} style={{ backgroundColor: theme.palette.background.default }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={1}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Chip label={t('public:home:offer_description.step_3.chip_title')} style={{ color: '#BA605A', backgroundColor: '#FAF1F1', fontSize: 26, padding: 5 }} />
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5} py={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Avatar style={{ fontSize: 18, color: '#FAF1F1', backgroundColor: '#BA605A' }}>1</Avatar>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="h4" fontWeight={600}><span style={{ color: '#FFC000' }}>{t('public:home:offer_description.step_3.title_1_color')}</span>{t('public:home:offer_description.step_3.title_1')}</Typography>
                                                        <Typography variant="h4" fontWeight={600}><span style={{ color: '#5046E5' }}>{t('public:home:offer_description.step_3.title_2_color')}</span>{t('public:home:offer_description.step_3.title_2')}</Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_3.text')}</Typography>
                                                    </Fade>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ backgroundColor: theme.palette.background.default, height: '80vh' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item xs={12} style={{ backgroundColor: theme.palette.background.default }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={1}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item pl={5} py={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Avatar style={{ fontSize: 18, color: '#FAF1F1', backgroundColor: '#BA605A' }}>2</Avatar>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_4.title_1')}<span style={{ color: '#60B56D' }}>{t('public:home:offer_description.step_4.title_1_color')}</span></Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_4.text')}</Typography>
                                                    </Fade>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default OfferDescription;