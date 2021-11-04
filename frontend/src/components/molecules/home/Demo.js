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
        <div>
            <Container maxWidth="xl">
                <GridModule direction="column">
                    <Grid item>
                        <Typography variant="h5" fontWeight={600} align="center">
                            { t("home:demo") }
                        </Typography>
                    </Grid>
                    <Grid item align="center">
                        <Button variant="contained"> { t("generic:demo") } </Button>
                    </Grid>
                </GridModule>
                <Divider/>
            </Container>
        </div>
    )

}

export default Demo;