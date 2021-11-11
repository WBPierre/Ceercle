import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import DescriptionElement from "../../molecules/home/DescriptionElement"
import Desc1 from "../../../assets/images/home/desc1.PNG";
import Desc2 from "../../../assets/images/home/desc2.PNG";
import Desc3 from "../../../assets/images/home/desc3.PNG";
import Desc4 from "../../../assets/images/home/desc4.PNG";
import GridModule from "./GridModule";
import Container from "@mui/material/Container";


function DescriptionList({props}){
    const { t } = useTranslation();

    return(
        <Container>
            <GridModule direction="column">
                <Grid item>
                    <Grid container spacing={5} direction="column">
                        <Grid item>
                            <Typography variant="body1" align="center">
                                { t('home:description_list.catchphrase_1')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" fontWeight={600} align="center">
                            { t('home:description_list.catchphrase_2')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <DescriptionElement align="left" title={ t('home:description_list.title_element_1')} image={Desc1} buttonText={ t("generic:more") } text={ t('home:description_list.content_element_1')} />
                    <DescriptionElement align="right" title={ t('home:description_list.title_element_2')} image={Desc2} buttonText={ t("generic:more") } text={ t('home:description_list.content_element_2')} />
                    <DescriptionElement align="left" title={ t('home:description_list.title_element_3')} image={Desc3} buttonText={ t("generic:more") } text={ t('home:description_list.content_element_3')} />
                    <DescriptionElement align="right" title={ t('home:description_list.title_element_4')} image={Desc4} buttonText={ t("generic:more") } text={ t('home:description_list.content_element_4')} />
                </Grid>
            </GridModule>
        </Container>
    )

}

export default DescriptionList;