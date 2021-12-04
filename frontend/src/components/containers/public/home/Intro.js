import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OfficeImage from "../../../../assets/images/home/intro/office.png";
import MeetingImage from "../../../../assets/images/home/intro/meeting.png";
import ReserveImage from "../../../../assets/images/home/intro/reserve.png";
import PlanningImage from "../../../../assets/images/home/intro/planning.png";
import Typography from "@mui/material/Typography";
import {Chip, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import TypingEffect from "../../../molecules/home/TypingEffect";
import {Fade} from 'react-awesome-reveal';
import {useNavigate} from "react-router-dom";

function Intro(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();

    return(
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: theme.palette.background.paper }}>
                <Container style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'20vh'}} spacing={2} direction="row">
                        <Grid item md={4}  style={{height:'100%'}}>
                            <Fade direction={"left"} triggerOnce={true}>
                                <Grid container direction="column" spacing={5}>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={OfficeImage} style={{height:'70%', width:'70%'}} alt="contact" />
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={PlanningImage} style={{height:'100%', width:'100%'}} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item md={4}>
                            <Fade direction={"up"} triggerOnce={true}>
                                <Grid container direction="column" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontWeight={600} style={{textAlign:'center'}}>
                                            {t('public:home:intro.title')}
                                        </Typography>
                                        <Typography variant="h4" fontWeight={600} style={{textAlign:'center'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" fontSize={18} style={{textAlign:'center', color:'#7F7F7F'}}>
                                            {t('public:home:intro.content')}
                                        </Typography>
                                        <Typography variant="h5" fontSize={18} style={{textAlign:'center', color:'#7F7F7F'}}>
                                            {t('public:home:intro.content_2')}
                                        </Typography>
                                        <Typography variant="h5" fontSize={18} style={{textAlign:'center', color:'#7F7F7F'}}>
                                            {t('public:home:intro.content_3')}
                                        </Typography>
                                        <Typography variant="h5" fontSize={18} style={{textAlign:'center', color:'#7F7F7F'}}>
                                            {t('public:home:intro.content_4')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#2F5597', fontSize: 18}} label={ t("generic:demo") } onClick={() => navigate('/demo')}/>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item md={4} style={{height:'100%'}}>
                            <Fade direction={"right"} triggerOnce={true}>
                                <Grid container direction="column" spacing={5}>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={MeetingImage} style={{height:'60%', width:'60%'}} alt="contact" />
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={ReserveImage} style={{height:'100%', width:'100%'}} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Container style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'20vh'}} direction="row">
                        <Grid item xs={12}>
                            <Fade top>
                                <Grid container direction="row" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            {t('public:home:intro.title')}
                                        </Typography>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" style={{textAlign:'center'}}>
                                            {t('public:home:intro.content')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#2F5597', fontSize: 18}} label={ t("generic:demo") } onClick={() => navigate('/demo/company')}/>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Intro;