import * as React from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import { Divider } from "@mui/material";
import Office from "../../components/containers/app/dashboard/Office";
import Team from "../../components/containers/app/dashboard/Team";
import Mood from "../../components/containers/app/dashboard/Mood";
import CustomContainer from "../../components/containers/app/CustomContainer";
import { useState } from "react";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import useAuth from "../../components/context/auth/AuthHelper";
import moment from "moment";

export default function Dashboard(props) {

    const { t } = useTranslation();
    const context = useAuth();
    const day = moment().tz("Europe/Paris");
    if (day.day() === 0) {
        day.add(1, 'days');
    } else if (day.day() === 6) {
        day.add(2, 'days');
    }
    const [daySelected, setDaySelected] = useState(day.format('YYYY-MM-DD'));

    return (
        <Grid wrap={"nowrap"} container direction={"column"} spacing={1}>
            <Grid item>
                <PlanningBoard />
            </Grid>
            <Grid item xs={12} mb={2}>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={4}>
                        <Divider color="#3B3838" />
                    </Grid>
                    <Grid item xs={4} textAlign={"center"}>
                        <Button variant="text" disableRipple={true} sx={{ color: "#3B3838", cursor: 'default' }}>
                            {t('app:dashboard:today')}
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Divider color="#3B3838" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={"row"} spacing={1} justifyContent={"space-around"}>
                    {context.user.company.activeOfficeHandler &&
                        <Grid item xs={12} md={4} style={{ borderRadius: '25px' }} component={Paper}>
                            <Office day={daySelected} />
                        </Grid>
                    }
                    <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 3 : 5} style={{ borderRadius: '25px' }} component={Paper}>
                        <Team day={daySelected} />
                    </Grid>
                    <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 4 : 5} style={{ borderRadius: '25px' }} component={Paper}>
                        <Mood day={daySelected} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
