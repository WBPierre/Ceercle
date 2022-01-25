import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingSectionTemplate from "../account/SettingSectionTemplate";
import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Payfit from "../../../../assets/images/generic/payfit.png";
import BambooHR from "../../../../assets/images/generic/bamboohr.png";

function Integration(props) {
    return (
        <SettingSectionTemplate title="Intégration avec des applications tierces" description="Intégrer directement vos employés en vous connectant avec une autre application.">
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