import * as React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SettingSectionTemplate from "../account/SettingSectionTemplate";
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Chip} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Payfit from "../../../../assets/images/generic/payfit.png";
import BambooHR from "../../../../assets/images/generic/bamboohr.png";
import Slack from "../../../../assets/images/generic/slack.png";

function Integration(props) {

    const { t } = useTranslation();

    const SlackClick = () => {
        const slackParams = "" +
            "client_id=2680388727490.3116158101621&" +
            "scope=im:write,users.profile:read,users:read,users:write&" +
            "user_scope=users:read,users.profile:read,users.profile:write&" +
            "redirect_uri=https://app.ceercle.io/verify/oAuth";
        console.log('clicked');
        window.open('https://slack.com/oauth/authorize?'+slackParams, '_blank');
    }

    return (
        <SettingSectionTemplate title={t('app:rh_parameters:integration.title')} description={t('app:rh_parameters:integration.subtitle')}>
            <Grid container direction="column">
                <Grid item>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            disabled={false}
                        >
                            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <img alt={"slack wip"}  src={Slack} style={{ height: 50 }} />
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {t('app:rh_parameters:integration.slack')}
                            </Typography>
                            <Chip
                                style={{marginTop: '2%'}}
                                color="primary"
                                sx={{ borderColor: "#3F07A8", color: "#3F07A8" }}
                                label="Installer l'application Ceercle"
                                variant="outlined"
                                onClick={SlackClick}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            disabled
                        >
                            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <img alt={"payfit incoming WIP"}  src={Payfit} style={{ height: 60 }} />
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            disabled
                        >
                            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <img alt={"BambooHR incoming WIP"} src={BambooHR} style={{ height: 50 }}/>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </SettingSectionTemplate>
    )
}
export default Integration;