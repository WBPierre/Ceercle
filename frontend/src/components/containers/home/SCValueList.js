import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";
import SCValueElement from "../../molecules/home/SCValueElement";
import {useTheme} from "@mui/material";
import Container from "@mui/material/Container";

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
                            <SCValueElement title={ t("home:SCValue.sub_element_1_title") } text={ t("home:SCValue.sub_element_1_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_2_title") } text={ t("home:SCValue.sub_element_2_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_3_title") } text={ t("home:SCValue.sub_element_3_content") }/>
                            <SCValueElement title={ t("home:SCValue.sub_element_4_title") } text={ t("home:SCValue.sub_element_4_content") }/>

                        </Grid>
                    </Grid>
                </GridModule>
            </Container>
        </div>
    )
}

export default SCValueList;