import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import {Chip} from "@mui/material";


function Demo(){
    const { t } = useTranslation();
    return (
        <div style={{backgroundColor:'#FEF0EC'}}>
            <Container>
                <Grid container direction={"row"} spacing={5} pt={5} pb={10}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" fontSize={22} color={"primary"} fontWeight={600} align="left">
                            { t("demo:title") }
                        </Typography>
                        <Typography variant="body1" fontSize={18} color={"primary"} align={"left"}>
                            { t("demo:subtitle") }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container style={{height:'100%'}} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item xs={12} textAlign={"center"}>
                                <Chip variant="outlined" style={{color:'white',backgroundColor:'#2F5597', fontSize: 18}} label={ t("generic:demo") } onClick={() => console.log("toto")}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Demo;