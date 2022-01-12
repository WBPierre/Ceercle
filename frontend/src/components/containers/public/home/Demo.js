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


function Demo() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    return (
        <div>
            <Container style={{marginBottom: '1%'}} maxWidth={true}>
                <Paper style={{ backgroundColor: '#3F07A8', borderRadius: '25px' }} elevation={3}>
                <Grid container direction={"row"} spacing={5}>
                    <Grid item md={3} textAlign={"center"}>
                        <img src={Hey} style={{ width: '80%', height:'100%' }} alt="contact" />
                    </Grid>
                    <Grid item xs={9} md={8}>
                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h4" fontSize={56} color="#FFFFFF" fontWeight={600} align="left">
                                    {t("public:demo:title")}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" fontSize={24} color="#FFFFFF" align={"left"} mt={2}>
                                    {t("public:demo:subtitle")}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={2}>
                                <Chip variant="contained" style={{ color: "#3F07A8", backgroundColor: '#FFFFFF', fontSize: 28, padding:10}} label={t("generic:demo")} onClick={() => navigate('/demo')} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </div>
    )

}

export default Demo;