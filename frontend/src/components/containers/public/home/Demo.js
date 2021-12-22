import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import {Chip, Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";


function Demo() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    return (
        <div>
            <Container style={{marginBottom: '1%'}} >
                <Paper style={{ backgroundColor: '#AC4944', borderRadius: '25px', paddingLeft: '25px' }} elevation={3}>
                <Grid container direction={"row"} spacing={5} pt={1} pb={4}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" fontSize={22} color="#FFFFFF" fontWeight={600} align="left">
                            {t("public:demo:title")}
                        </Typography>
                        <Typography variant="body1" fontSize={18} color="#FFFFFF" align={"left"} mt={2}>
                            {t("public:demo:subtitle")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container style={{ height: '100%' }} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item xs={12} textAlign={"center"}>
                                <Chip variant="outlined" style={{ color: "#2F5597", backgroundColor: '#FFFFFF', fontSize: 18 }} label={t("generic:demo")} onClick={() => navigate('/demo')} />
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