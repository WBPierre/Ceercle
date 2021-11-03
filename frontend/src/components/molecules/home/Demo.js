import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GridModule from "../../containers/home/GridModule";


function Demo(){
    return (
        <GridModule direction="column">
            <Grid item>
                <Typography variant="h5" fontWeight={600} align="center">
                    Vous souhaitez en savoir plus sur notre solution ? Demandez-nous une démo gratuite d'une vingtaine de minutes, nous vous répondorons dans les plus brefs délais.
                </Typography>
            </Grid>
            <Grid item align="center">
                <Button variant="contained">Demander une démo</Button>
            </Grid>
        </GridModule>
    )

}

export default Demo;