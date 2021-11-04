import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";

function SCValue(){
    
    const { t } = useTranslation();

    return(
        <GridModule direction="column">
            <Grid item>
                <Typography variant="h5" fontWeight={600} align="center">
                    { t("home:SCValue.title")}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" align="center">
                    { t("home:SCValue.content")}
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
                                    { t("home:SCValue.sub_element_1_title")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    { t("home:SCValue.sub_element_1_content")}
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
                                    { t("home:SCValue.sub_element_2_title")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    { t("home:SCValue.sub_element_2_content")}
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
                                    { t("home:SCValue.sub_element_3_title")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    { t("home:SCValue.sub_element_3_content")}
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
                                    { t("home:SCValue.sub_element_4_title")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    { t("home:SCValue.sub_element_4_content")}
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