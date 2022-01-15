import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import icon1 from "../../../../assets/images/home/intro/icon1.png";
import icon2 from "../../../../assets/images/home/intro/icon2.png";
import icon3 from "../../../../assets/images/home/intro/icon3.png";
import icon4 from "../../../../assets/images/home/intro/icon4.png";
import anaBranson from "../../../../assets/images/home/productPresentation/anaBranson.png";
import seat from "../../../../assets/images/home/productPresentation/seat.png";
import seat_en from "../../../../assets/images/home/productPresentation/seat_en.png";
import Box from "@mui/material/Box";
import { Fade, Zoom } from 'react-awesome-reveal';
import OfficeImage from "../../../../assets/images/home/intro/office.png";
import MeetingImage from "../../../../assets/images/home/intro/meeting.png";
import ReserveImage from "../../../../assets/images/home/intro/reserve.png";
import PlanningImage from "../../../../assets/images/home/intro/planning.png";
import OfficeImageEN from "../../../../assets/images/home/intro/office_en.png";
import MeetingImageEN from "../../../../assets/images/home/intro/meeting_en.png";
import ReserveImageEN from "../../../../assets/images/home/intro/reserve_en.png";
import PlanningImageEN from "../../../../assets/images/home/intro/planning_en.png";

function ProductPresentation({ props }) {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <div style={{ backgroundColor: '#FDF9F6' }}>
                    <Grid container direction={"row"} style={{minHeight:'100vh'}} spacing={0}>
                        <Grid item md={12} style={{maxHeight:'15vh', backgroundColor:'#3F07A8', width:'100%'}} pt={1}>
                            <Typography variant="body1" fontSize={36} fontWeight={300} style={{width:'100%'}} align="center" color={"white"}>
                                {t('public:home:product_presentation.catchphrase_1')}
                            </Typography>
                        </Grid>
                        <Grid item md={12} style={{backgroundColor: '#3F07A8' }} px={10} pb={10} pt={5}>
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
                                                <Typography variant="h4" fontSize={38} fontWeight={600} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_2')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontSize={48} fontWeight={600} align="center" style={{ color: '#B4C7E7' }}>
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
                                                <img src={i18n.language === "fr" ? seat : seat_en} style={{ width: '100%' }} alt="contact" />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} style={{height:'50vh', backgroundColor:'#FDF9F6'}}>
                            <Grid container direction={"row"}  justifyContent={"center"} alignItems={"center"} spacing={5} mt={2}>
                                <Grid item md={3} textAlign={"center"}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                        <img src={icon1} style={{ width: '60%' }} alt="contact" />
                                    </Fade>
                                </Grid>
                                <Grid item md={3}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                            <Grid item md={12}>
                                                <Typography fontSize={26} fontWeight={700} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_1')}</Typography>
                                            </Grid>
                                            <Grid item md={12}>
                                                <img src={i18n.language === "fr" ? PlanningImage : PlanningImageEN} style={{ width: '100%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3}>
                                    <Fade direction={"right"} triggerOnce={true}>

                                    <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                        <Grid item md={12}>
                                            <Typography fontSize={26} fontWeight={700} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_2')}</Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <img src={i18n.language === "fr" ? ReserveImage : ReserveImageEN} style={{ width: '100%' }} alt="contact" />
                                        </Grid>
                                    </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} textAlign={"center"}>
                                    <Fade direction={"right"} triggerOnce={true}>
                                    <img src={icon2} style={{ width: '60%' }} alt="contact" />
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} style={{height:'50vh', backgroundColor:'#FDF9F6'}}>
                            <Grid container direction={"row"}  justifyContent={"center"} alignItems={"center"} spacing={5} mt={2}>
                                <Grid item md={3} textAlign={"center"}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                    <img src={icon3} style={{ width: '80%' }} alt="contact" />
                                    </Fade>
                                </Grid>
                                <Grid item md={3}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                    <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                        <Grid item md={12}>
                                            <Typography fontSize={26} fontWeight={700} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_4')}</Typography>
                                        </Grid>
                                        <Grid item md={12} textAlign={"center"}>
                                            <img src={i18n.language === "fr" ? OfficeImage : OfficeImageEN} style={{ width: '60%' }} alt="contact" />
                                        </Grid>
                                    </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3}>
                                    <Fade direction={"right"} triggerOnce={true}>
                                    <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                        <Grid item md={12}>
                                            <Typography fontSize={26} fontWeight={700} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_3')}</Typography>
                                        </Grid>
                                        <Grid item md={12} textAlign={"center"}>
                                            <img src={i18n.language === "fr" ? MeetingImage : MeetingImageEN} style={{ width: '50%' }} alt="contact" />
                                        </Grid>
                                    </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} textAlign={"center"}>
                                    <Fade direction={"right"} triggerOnce={true}>
                                    <img src={icon4} style={{ width: '80%' }} alt="contact" />
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} mt={5}>
                            <Fade direction={"up"} triggerOnce={true}>
                                <Typography fontSize={42} fontWeight={600} style={{width:'100%', textAlign:'center', color:'#3F07A8'}}>{t('public:home:product_presentation.and_more')}</Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <div style={{ backgroundColor: '#FDF9F6', paddingTop: '5%' }}>
                    <Grid container direction={"row"} style={{minHeight:'100vh'}} spacing={0}>
                        <Grid item md={12} style={{backgroundColor:'#3F07A8'}} pt={1}>
                            <Typography variant="body1" fontSize={36} fontWeight={300} style={{width:'100%'}} align="center" color={"white"}>
                                {t('public:home:product_presentation.catchphrase_1')}
                            </Typography>
                        </Grid>
                        <Grid item md={12} style={{backgroundColor: '#3F07A8' }} pb={10} pt={5}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item md={8}>
                                    <Zoom triggerOnce={true}>
                                        <Grid container direction={"column"} spacing={5}>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontSize={38} fontWeight={600} align="center" color={"white"}>
                                                    {t('public:home:product_presentation.catchphrase_2')}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h4" fontSize={48} fontWeight={600} align="center" style={{ color: '#B4C7E7' }}>
                                                    {t('public:home:product_presentation.simply')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Zoom>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} style={{backgroundColor:'#FDF9F6'}}>
                            <Grid container direction={"row"}  justifyContent={"center"} alignItems={"center"} spacing={5} mt={2}>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                            <Grid item md={12} textAlign={"center"}>
                                                <Typography fontSize={26} fontWeight={600} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_1')}</Typography>
                                            </Grid>
                                            <Grid item md={12} textAlign={"center"}>
                                                <img src={i18n.language === "fr" ? PlanningImage : PlanningImageEN} style={{ width: '70%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Fade direction={"right"} triggerOnce={true}>

                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                            <Grid item md={12}>
                                                <Typography fontSize={26} fontWeight={600} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_2')}</Typography>
                                            </Grid>
                                            <Grid item md={12} textAlign={"center"}>
                                                <img src={i18n.language === "fr" ? ReserveImage : ReserveImageEN} style={{ width: '70%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} mt={5} style={{backgroundColor:'#FDF9F6'}}>
                            <Grid container direction={"row"}  justifyContent={"center"} alignItems={"center"} spacing={5} mt={2}>
                                <Grid item md={3}>
                                    <Fade direction={"left"} triggerOnce={true}>
                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                            <Grid item md={12}>
                                                <Typography fontSize={26} fontWeight={600} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_4')}</Typography>
                                            </Grid>
                                            <Grid item md={12} textAlign={"center"}>
                                                <img src={i18n.language === "fr" ? OfficeImage : OfficeImageEN} style={{ width: '60%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                                <Grid item md={3}>
                                    <Fade direction={"right"} triggerOnce={true}>
                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                                            <Grid item md={12}>
                                                <Typography fontSize={26} fontWeight={600} style={{color:'#3F07A8'}}>{t('public:home:product_presentation.chip_3')}</Typography>
                                            </Grid>
                                            <Grid item md={12} textAlign={"center"}>
                                                <img src={i18n.language === "fr" ? MeetingImage : MeetingImageEN} style={{ width: '50%' }} alt="contact" />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                            <Grid item md={12} mt={5}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Typography fontSize={42} fontWeight={600} style={{width:'100%', textAlign:'center', color:'#3F07A8'}}>{t('public:home:product_presentation.and_more')}</Typography>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>

    )

}

export default ProductPresentation;