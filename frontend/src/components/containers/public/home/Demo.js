import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import {Chip} from "@mui/material";
import {useNavigate} from "react-router-dom";


function Demo(){
    const { t } = useTranslation();
    let navigate = useNavigate();
    return (
        <div style={{backgroundColor:'#FEF0EC'}}>
            <Container>
                <Grid container direction={"row"} spacing={5} pt={5} pb={10}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" fontSize={22} color={"primary"} fontWeight={600} align="left">
                            { t("public:demo:title") }
                        </Typography>
                        <Typography variant="body1" fontSize={18} color={"primary"} align={"left"} mt={2}>
                            { t("public:demo:subtitle") }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container style={{height:'100%'}} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item xs={12} textAlign={"center"}>
                                <Chip variant="outlined" style={{color:'white',backgroundColor:'#2F5597', fontSize: 18}} label={ t("generic:demo") } onClick={() => navigate('/demo')}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Demo;