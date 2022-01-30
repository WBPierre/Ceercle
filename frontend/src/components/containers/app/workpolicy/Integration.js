import * as React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SettingSectionTemplate from "../account/SettingSectionTemplate";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Payfit from "../../../../assets/images/generic/payfit.png";
import BambooHR from "../../../../assets/images/generic/bamboohr.png";

function Integration(props) {

    const { t } = useTranslation();

    return (
        <SettingSectionTemplate title={t('app:rh_parameters:integration.title')} description={t('app:rh_parameters:integration.subtitle')}>
            <Grid container direction="column">
                <Grid item>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            disabled
                        >
                            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <img src={Payfit} style={{ height: 60 }} />
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
                                    <img src={BambooHR} style={{ height: 50 }} />
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