import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import { Avatar, Icon, useTheme } from "@mui/material";
import managee from "../../../../assets/images/home/operations/managee.png";
import rh from "../../../../assets/images/home/operations/rh.png";
import finance from "../../../../assets/images/home/operations/finance.png";
import ecology from "../../../../assets/images/home/operations/ecology.png";
import { Fade } from "react-awesome-reveal";

function Operations({ props }) {
    const { t } = useTranslation();
    const theme = useTheme();


    return (
        <div>
            <div style={{ paddingBottom: '5%' }}>
                <Grid container direction={"column"} style={{ height: '100%' }} alignItems={"space-around"}>
                    <Grid item xs={12} px={10} py={5} mb={3} style={{ backgroundColor: '#2F5597' }}>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item md={2} />
                            <Grid item md={8} xs={12}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center" fontWeight={600} style={{ color: '#FFFFFF' }}>
                                            {t('public:home:operations.title')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight={600} style={{ color: '#B4C7E7' }} align="center">
                                            {t('public:home:operations.subtitle')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} />
                        </Grid>
                    </Grid>
                    <Grid item xs={8} pt={3} pb={5}>
                        <Grid container direction={"row"} spacing={5}>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                        <Grid item ml={5}>
                                            <img src={managee} style={{ width: '70%' }} alt="contact" />
                                        </Grid>
                                        <Grid item mb={1}>
                                            <Typography textAlign={"center"} variant="h4" style={{ color: '#AC4944' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_1.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{ color: '#7F7F7F' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_1.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                        <Grid item ml={5}>
                                            <img src={rh} style={{ width: '70%' }} alt="contact" />
                                        </Grid>
                                        <Grid item mb={1}>
                                            <Typography textAlign={"center"} variant="h4" style={{ color: '#AC4944' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_2.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{ color: '#7F7F7F' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_2.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                        <Grid item ml={5}>
                                            <img src={finance} style={{ width: '70%' }} alt="contact" />
                                        </Grid>
                                        <Grid item mb={1}>
                                            <Typography textAlign={"center"} variant="h4" style={{ color: '#AC4944' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_3.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{ color: '#7F7F7F' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_3.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={2} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                        <Grid item ml={5}>
                                            <img src={ecology} style={{ width: '70%' }} alt="contact" />
                                        </Grid>
                                        <Grid item mb={1}>
                                            <Typography textAlign={"center"} variant="h4" style={{ color: '#AC4944' }} fontSize={28} fontWeight={600}>{t('public:home:operations.card_4.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{ color: '#7F7F7F' }} fontSize={16} fontWeight={400}>{t('public:home:operations.card_4.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    )

}

export default Operations;