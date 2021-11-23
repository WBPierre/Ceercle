import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GridModule from "../../containers/home/GridModule";
import {useTranslation} from "react-i18next";
import {useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";


function Demo(){
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <div style={{backgroundColor:'#FEF0EC'}}>
            <Container>
                <Grid container direction={"row"} spacing={5} pt={5} pb={10}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" style={{color:'#2F5597'}} fontWeight={600} align="left">
                            { t("demo:title") }
                        </Typography>
                        <Typography variant="body1" fontSize={24} style={{color:'#2F5597'}} align={"left"}>
                            { t("demo:subtitle") }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container style={{height:'100%'}} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item xs={12} textAlign={"center"}>
                                <Button variant="contained" style={{backgroundColor:'#2F5597'}}> { t("generic:demo") } </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Demo;