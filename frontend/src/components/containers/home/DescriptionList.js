import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import DescriptionElement from "../../molecules/home/DescriptionElement"
import Desc1 from "../../../assets/images/home/desc1.png";
import Desc2 from "../../../assets/images/home/desc2.png";
import Desc3 from "../../../assets/images/home/desc3.png";
import GridModule from "./GridModule";


function DescriptionList({props}){

    return(
        <GridModule direction="column">
            <Grid item>
                <Grid container spacing={5} direction="column">
                    <Grid item>
                        <Typography variant="body1" align="center">
                            Vous éprouvez des difficultés à mettre ne place une nouvelle organisation de travail plus flexible ?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" fontWeight={600} align="center">
                            Adoptez SpaceCorner, une solution tout-en-un pour vous accompagner dans vos problématiques liées au travail hybride.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <DescriptionElement align="left" title="Louis Lacaille" image={Desc1} buttonText="En savoir plus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere efficitur augue eu commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at purus in nulla viverra lacinia non nec justo. Nullam congue nunc condimentum, ornare lectus et, molestie ante. Vivamus congue et massa sed molestie. Pellentesque vitae lacus sed massa accumsan rhoncus sed vitae metus. In hac habitasse platea dictumst. Pellentesque eu metus id nunc bibendum euismod in et elit. Ut vestibulum eleifend massa non scelerisque.
"/>
                <DescriptionElement align="right" title="Title" image={Desc2} buttonText="En savoir plus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere efficitur augue eu commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at purus in nulla viverra lacinia non nec justo. Nullam congue nunc condimentum, ornare lectus et, molestie ante. Vivamus congue et massa sed molestie. Pellentesque vitae lacus sed massa accumsan rhoncus sed vitae metus. In hac habitasse platea dictumst. Pellentesque eu metus id nunc bibendum euismod in et elit. Ut vestibulum eleifend massa non scelerisque.
"/>
                <DescriptionElement align="left" title="Title" image={Desc3} buttonText="En savoir plus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere efficitur augue eu commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at purus in nulla viverra lacinia non nec justo. Nullam congue nunc condimentum, ornare lectus et, molestie ante. Vivamus congue et massa sed molestie. Pellentesque vitae lacus sed massa accumsan rhoncus sed vitae metus. In hac habitasse platea dictumst. Pellentesque eu metus id nunc bibendum euismod in et elit. Ut vestibulum eleifend massa non scelerisque.
"/>
            </Grid>
        </GridModule>
    )

}

export default DescriptionList;