import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import step_1 from "../../../../assets/images/home/value/step_1.png";
import step_2 from "../../../../assets/images/home/value/step_2.png";
import step_3 from "../../../../assets/images/home/value/step_3.png";
import step_4 from "../../../../assets/images/home/value/step_4.png";
import step_1_en from "../../../../assets/images/home/value/step_1_en.png";
import step_2_en from "../../../../assets/images/home/value/step_2_en.png";
import step_3_en from "../../../../assets/images/home/value/step_3_en.png";
import step_4_en from "../../../../assets/images/home/value/step_4_en.png";
import step_1_2 from "../../../../assets/images/home/value/step_1_2.png";
import step_2_2 from "../../../../assets/images/home/value/step_2_2.png";
import step_3_2 from "../../../../assets/images/home/value/step_3_2.png";
import step_3_3 from "../../../../assets/images/home/value/step_3_3.png";
import step_4_2 from "../../../../assets/images/home/value/step_4_2.png";
import Box from "@mui/material/Box";
import { Fade } from 'react-awesome-reveal';
import AddIcon from '@mui/icons-material/Add';
import Phone from "../../../../assets/images/home/productPresentation/phone.png";
import Tablet from "../../../../assets/images/home/productPresentation/tablet.png";
import LapTop from "../../../../assets/images/home/productPresentation/laptop.png";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import * as Public_Routes from "../../../../navigation/public/Routes";

function OfferDescription(props) {

    const { t, i18n } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();


    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: "#3F07A8" }} pt={10}>
                <Fade triggerOnce={true}>
                    <Grid container direction={"row"} pb={10}>
                        <Grid item md={12}>
                            <Grid container direction={"column"}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" fontWeight={600} fontSize={64} align="center" color="white">
                                        {t('public:home:offer_description.main.title')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
                <div style={{backgroundColor: '#FDF9F6', height:'5vh'}}/>
                <div style={{ backgroundColor: '#FDF9F6', height: '80vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%', backgroundColor: 'orange' }}>
                        <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography style={{color:'#3F07A8'}} fontSize={36} fontWeight={700}>{t('public:home:offer_description.step_1.chip_title')}</Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10} py={5} mb={5}>
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
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:more_information')}</Button>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: 'white', borderTopLeftRadius: '10%' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={i18n.language === "fr" ? step_1 : step_1_en} style={{ height: '50%', width: '50%' }} alt="contact" />
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
                        <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item pl={10} mb={5}>
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
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('public:navbar:ask_for_demo')}</Button>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: 'white' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={i18n.language === "fr" ? step_2 : step_2_en} style={{ height: '60%', width: '60%' }} alt="contact" />
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
                        <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Typography style={{color:'#3F07A8'}} fontSize={36} fontWeight={600}>{t('public:home:offer_description.step_3.chip_title')}</Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item pl={10} py={5}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Grid container direction={"row"}>
                                                    <Grid item md={3} textAlign={"center"}>
                                                        <img src={step_3_2} style={{ height: '100%', width: '80%' }} alt="contact" />
                                                    </Grid>
                                                    <Grid item md={1}>
                                                        <Grid container style={{height:'100%'}} justifyContent={"center"} alignItems={"center"} direction={"column"}>
                                                            <Grid item>
                                                                <AddIcon style={{fontSize: 50}} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item md={3} textAlign={"right"}>
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
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:contact_us')}</Button>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: 'white' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={i18n.language === "fr" ? step_3 : step_3_en} style={{ height: '60%', width: '60%' }} alt="contact" />
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
                        <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={6} style={{ height: '100%' }} px={10}>
                                    <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                        <Grid item pl={10}>
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
                                        <Grid item pl={10}>
                                            <Fade direction={"left"} triggerOnce={true}>
                                                <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:contact_us')}</Button>
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ height: '100%', backgroundColor: 'white' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }} alignItems={"center"}>
                                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                                            <Fade direction={"right"} triggerOnce={true}>
                                                <img src={i18n.language === "fr" ? step_4 : step_4_en} style={{ height: '70%', width: '70%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ backgroundColor: theme.palette.background.default, height: '30vh' }}>
                    <Grid container direction={"row"} style={{ height: '100%' }}>
                        <Grid item md={12} style={{ backgroundColor: 'white' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }} justifyContent={"center"} alignItems={"center"}>
                                <Grid item md={4} px={10} textAlign={"center"}>
                                    <Fade direction={"Left"} triggerOnce={true}>
                                        <Typography variant="body1" style={{color: '#3F07A8'}} fontWeight={600} fontSize={36}>{t('public:home:offer_description.available_on')}</Typography>
                                    </Fade>
                                </Grid>
                                <Grid item md={8} style={{ height: '100%', backgroundColor: 'white' }}>
                                    <Fade direction={"right"} triggerOnce={true}>
                                        <Grid container direction={"row"} mt={3} style={{ height: '100%' }} alignItems={"center"} >
                                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                                    <img src={LapTop} style={{ width: '80%' }} alt="contact" />
                                            </Grid>
                                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                                    <img src={Phone} style={{ width: '30%', height:'50%' }} alt="contact" />
                                            </Grid>
                                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                                    <img src={Tablet} style={{ width: '60%', height:'60%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, backgroundColor: "#3F07A8" }}>
                <Grid container direction={"row"}>
                    <Grid item my={5}>
                        <Grid container direction={"row"}>
                            <Grid item xs={12}>
                                <Fade triggerOnce={true}>
                                    <Grid container direction={"column"}>
                                        <Grid item xs={12}>
                                            <Typography variant="h3" fontWeight={600} fontSize={48} align="center" color="white">
                                                {t('public:home:offer_description.main.title')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: '5%' }} />
                    <Grid item>
                        <div style={{ backgroundColor: '#FDF9F6', paddingTop:'10%' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={2}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item mt={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography style={{color:'#3F07A8'}} fontSize={28} fontWeight={600}>{t('public:home:offer_description.step_1.chip_title')}</Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5} py={5} mb={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <img src={step_1_2} style={{ height: '25%', width: '25%' }} alt="contact" />
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_1')} <span style={{ color: '#4C82D3' }}>{t('public:home:offer_description.step_1.title_1_color')}</span> </Typography>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_2')} <span style={{ color: '#9872B2' }}>{t('public:home:offer_description.step_1.title_2_color')}</span></Typography>
                                                        <Typography variant="h4" fontWeight={600}>{t('public:home:offer_description.step_1.title_3')} <span style={{ color: '#60B56D' }}>{t('public:home:offer_description.step_1.title_3_color')}</span></Typography>

                                                    </Fade>
                                                </Grid>
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography variant="body1" style={{color: '#7F7F7F'}} fontSize={18}>{t('public:home:offer_description.step_1.text')}</Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:more_information')}</Button>
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
                        <div style={{ backgroundColor:'#FDF9F6', paddingTop:'10%' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item md={12} style={{ backgroundColor: '#FDF9F6' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={2}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item pl={5} mb={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <img src={step_2_2} style={{ height: '50%', width: '50%' }} alt="contact" />
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
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('public:navbar:ask_for_demo')}</Button>
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
                        <div style={{ backgroundColor:'#FDF9F6', paddingTop:'10%' }}>
                            <Grid container direction={"row"} style={{ height: '100%'}}>
                                <Grid item xs={12} style={{ backgroundColor: '#FDF9F6' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={2}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Typography style={{color:'#3F07A8'}} fontSize={28} fontWeight={600}>{t('public:home:offer_description.step_3.chip_title')}</Typography>
                                                    </Fade>
                                                </Grid>
                                                <Grid item pl={5} py={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Grid container direction={"row"}>
                                                            <Grid item xs={3} textAlign={"center"}>
                                                                <img src={step_3_2} style={{ height: '100%', width: '80%' }} alt="contact" />
                                                            </Grid>
                                                            <Grid item xs={1}>
                                                                <Grid container style={{height:'100%'}} justifyContent={"center"} alignItems={"center"} direction={"column"}>
                                                                    <Grid item>
                                                                        <AddIcon style={{fontSize: 50}} />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item xs={3} textAlign={"right"}>
                                                                <img src={step_3_3} style={{ height: '80%', width: '50%' }} alt="contact" />
                                                            </Grid>
                                                        </Grid>
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
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:contact_us')}</Button>
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
                        <div style={{ backgroundColor:'#FDF9F6', paddingTop:'10%' }}>
                            <Grid container direction={"row"} style={{ height: '100%' }}>
                                <Grid item xs={12} style={{ backgroundColor: '#FDF9F6' }}>
                                    <Grid container direction={"row"} style={{ height: '100%' }}>
                                        <Grid item xs={12} style={{ height: '100%' }} px={2}>
                                            <Grid container direction={"column"} style={{ height: '100%' }} justifyContent={"center"}>
                                                <Grid item pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <img src={step_4_2} style={{ height: '50%', width: '50%' }} alt="contact" />
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
                                                <Grid item py={5} pl={5}>
                                                    <Fade direction={"left"} triggerOnce={true}>
                                                        <Button variant={"text"} onClick={() => navigate(Public_Routes.DEMO)} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:contact_us')}</Button>
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