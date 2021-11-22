import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";
import SCValueElement from "../../molecules/home/SCValueElement";
import {Chip, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import brand from "../../../assets/images/home/value/brand.png";
import culture from "../../../assets/images/home/value/culture.png";
import eco from "../../../assets/images/home/value/eco.png";
import liberty from "../../../assets/images/home/value/liberty.png";
import anaBranson from "../../../assets/images/home/anaBranson.png";
import iconCalendar from "../../../assets/images/icons/iconCalendar.png";
import iconOffice from "../../../assets/images/icons/iconOffice.png";
import VisuelSAAS from "../../../assets/images/home/visuel_SAAS.png";
import iconMeeting from "../../../assets/images/icons/iconMeeting.png";
import iconPpl from "../../../assets/images/icons/iconPpl.png";


function DescriptionList(props){
    
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <div style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                <Grid container direction={"column"}>
                    <Grid item md={12} style={{backgroundColor:theme.palette.background.default}} px={10} pb={10}>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item md={12}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="h3" h3 fontWeight={600} align="center" color="error">
                                            { t('home:SCValue.main')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight={400} align="center">
                                            { t('home:SCValue.subtitle')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} style={{backgroundColor:theme.palette.background.default}} px={10}>
                        <Chip label={t('home:SCValue.step_1.chip_title')} style={{color:'#2F5597', backgroundColor:'#DAE3F3', fontSize:18}}/>
                    </Grid>
                </Grid>
            </div>
            <div>

            </div>
            <Container>
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
                            <SCValueElement title={ t("home:SCValue.sub_element_1_title") } image={brand} text={ t("home:SCValue.sub_element_1_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_2_title") } image={culture} text={ t("home:SCValue.sub_element_2_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_3_title") } image={eco} text={ t("home:SCValue.sub_element_3_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_4_title") } image={liberty} text={ t("home:SCValue.sub_element_4_content") }/>
                        </Grid>
                    </Grid>
                </GridModule>
            </Container>
        </div>
    )
}

export default DescriptionList;