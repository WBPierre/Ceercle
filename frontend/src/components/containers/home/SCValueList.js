import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";
import SCValueElement from "../../molecules/home/SCValueElement";
import {useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import brand from "../../../assets/images/home/value/brand.png";
import culture from "../../../assets/images/home/value/culture.png";
import eco from "../../../assets/images/home/value/eco.png";
import liberty from "../../../assets/images/home/value/liberty.png";


function SCValueList(props){
    
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div style={{backgroundColor: theme.palette.info.main}}>
            <Container maxWidth="xl">
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

export default SCValueList;