import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ContactImage from "../../../assets/images/contact/right.jpg";
import OfficeImage from "../../../assets/images/home/intro/office.png";
import MeetingImage from "../../../assets/images/home/intro/meeting.png";
import ReserveImage from "../../../assets/images/home/intro/reserve.png";
import PlanningImage from "../../../assets/images/home/intro/planning.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import TypingEffect from "./TypingEffect";

function Intro(){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Container maxWidth={true} style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'10%'}} spacing={2} direction="row">
                        <Grid item md={4}  style={{height:'100%'}}>
                            <Grid container direction="column" spacing={5}>
                                <Grid item style={{textAlign:'center'}}>
                                    <img src={OfficeImage} style={{height:'60%', width:'60%'}} alt="contact" />
                                </Grid>
                                <Grid item style={{textAlign:'center'}}>
                                    <img src={PlanningImage} style={{height:'75%', width:'75%'}} alt="contact" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container direction="column" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                <Grid item>
                                    <Typography h4 variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                        {t('home:main.title')}
                                    </Typography>
                                    <Typography h4 variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                        <TypingEffect/>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography h5 variant="h5" style={{textAlign:'center'}}>
                                        {t('home:main.content')}
                                    </Typography>
                                </Grid>
                                <Grid item style={{textAlign:'center'}}>
                                    <Button variant="contained" >
                                        {t('generic:demo')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} style={{height:'100%'}}>
                            <Grid container direction="column" spacing={5}>
                                <Grid item style={{textAlign:'center'}}>
                                    <img src={MeetingImage} style={{height:'50%', width:'50%'}} alt="contact" />
                                </Grid>
                                <Grid item style={{textAlign:'center'}}>
                                    <img src={ReserveImage} style={{height:'75%', width:'75%'}} alt="contact" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Container maxWidth={true} style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container style={{marginTop:'20%'}} direction="row">
                        <Grid item xs={12}>
                            <Grid container direction="row" style={{height:'100%'}} justifyContent={"center"} spacing={5}>
                                <Grid item>
                                    <Typography h4 variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                        {t('home:main.title')}
                                    </Typography>
                                    <Typography h4 variant="h4" fontWeight={500} style={{textAlign:'center'}}>
                                        <TypingEffect/>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography h5 variant="h5" style={{textAlign:'center'}}>
                                        {t('home:main.content')}
                                    </Typography>
                                </Grid>
                                <Grid item style={{textAlign:'center'}}>
                                    <Button variant="contained" >
                                        {t('generic:demo')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Intro;