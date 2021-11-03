import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";

function SCValue(){

    return(
        <GridModule direction="column">
            <Grid item>
                <Typography variant="h5" fontWeight={600} align="center">
                    Une solution pensée pour chacun et qui profite à tous
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" align="center">
                    SpaceCorner permet à l'ensemble des directions d'entreprise d'optimiser leurs opérations quotidiennes. Et d'en faire profiter tout le monde.
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={3} justifyContent="center">
                    <Grid item xs={12} md={3} align="center">
                        <Grid container direction="column" >
                            <Grid item>
                                <FreeBreakfastIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    Title
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    Text
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} align="center">
                        <Grid container direction="column">
                            <Grid item>
                                <FreeBreakfastIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    Title
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    Text
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} align="center">
                        <Grid container direction="column">
                            <Grid item>
                                <FreeBreakfastIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    Title
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    Text
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} align="center">
                        <Grid container direction="column">
                            <Grid item>
                                <FreeBreakfastIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    Title
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    Text
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </GridModule>
    )
}

export default SCValue;