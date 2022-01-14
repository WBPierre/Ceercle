import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import {Chip, Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hey from "../../../../assets/images/home/demo/hey.png";
import MeetingImage from "../../../../assets/images/home/intro/meeting.png";
import MeetingImageEN from "../../../../assets/images/home/intro/meeting_en.png";
import Box from "@mui/material/Box";


function Demo() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    return (
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginBottom:'5%' }}>
                <Container style={{marginBottom: '1%', marginTop:'3%'}}>
                    <Paper style={{ backgroundColor: '#3F07A8', borderRadius: '25px' }} elevation={3}>
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item md={4} textAlign={"center"}>
                            <img src={Hey} style={{ width: '80%', height:'100%' }} alt="contact" />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Grid container direction={"column"} justifyContent={"center"} spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontSize={38} color="#FFFFFF" fontWeight={600} align="left">
                                        {t("public:demo:title")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} textAlign={"left"}>
                                    <Typography variant="body1" fontSize={18} color="#FFFFFF" align={"left"} mt={2}>
                                        {t("public:demo:subtitle")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} mt={5} textAlign={"center"}>
                                    <Button variant={"text"} onClick={() => navigate('/demo')} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:demo')}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Container style={{marginBottom: '1%', marginTop:'5%'}}>
                <Paper style={{ backgroundColor: '#3F07A8', borderRadius: '25px' }} elevation={3}>
                    <Grid container direction={"row"} spacing={5} px={2}>
                        <Grid item xs={12}>
                            <Grid container direction={"column"} spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" fontSize={30} color="#FFFFFF" fontWeight={600} align="left">
                                        {t("public:demo:title")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} textAlign={"left"}>
                                    <Typography variant="body1" fontSize={18} color="#FFFFFF" align={"left"} mt={2}>
                                        {t("public:demo:subtitle")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} mt={5} mb={5} textAlign={"center"}>
                                    <Button variant={"text"} onClick={() => navigate('/demo')} style={{fontSize:18, color:'#3F07A8', textTransform:'none', backgroundColor:'white', borderRadius:'25px', fontWeight:500}}>{t('generic:demo')}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>

        </div>
    )

}

export default Demo;