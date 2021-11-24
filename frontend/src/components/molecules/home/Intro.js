import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OfficeImage from "../../../assets/images/home/intro/office.png";
import MeetingImage from "../../../assets/images/home/intro/meeting.png";
import ReserveImage from "../../../assets/images/home/intro/reserve.png";
import PlanningImage from "../../../assets/images/home/intro/planning.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import TypingEffect from "./TypingEffect";
import {Fade} from 'react-awesome-reveal';

function Intro(){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: theme.palette.background.paper }}>
                <Container style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'10%'}} spacing={2} direction="row">
                        <Grid item md={4}  style={{height:'100%'}}>
                            <Fade direction={"left"} triggerOnce={true}>
                                <Grid container direction="column" spacing={5}>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={OfficeImage} style={{height:'60%', width:'60%'}} alt="contact" />
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={PlanningImage} style={{height:'75%', width:'75%'}} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item md={4}>
                            <Fade direction={"up"} triggerOnce={true}>
                                <Grid container direction="column" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            {t('home:main.title')}
                                        </Typography>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" style={{textAlign:'center'}}>
                                            {t('home:main.content')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <Button variant="contained" >
                                            {t('generic:demo')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item md={4} style={{height:'100%'}}>
                            <Fade direction={"right"} triggerOnce={true}>
                                <Grid container direction="column" spacing={5}>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={MeetingImage} style={{height:'50%', width:'50%'}} alt="contact" />
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <img src={ReserveImage} style={{height:'75%', width:'75%'}} alt="contact" />
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Container style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'20%'}} direction="row">
                        <Grid item xs={12}>
                            <Fade top>
                                <Grid container direction="row" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            {t('home:main.title')}
                                        </Typography>
                                        <Typography variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" style={{textAlign:'center'}}>
                                            {t('home:main.content')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'center'}}>
                                        <Button variant="contained" >
                                            {t('generic:demo')}
                                        </Button>
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