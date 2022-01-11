import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CreateIcon from '@mui/icons-material/Create';
import Button from "@mui/material/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import PlanningElement from "../../components/containers/app/dashboard/PlanningElement";
import {Divider} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Office from "../../components/containers/app/dashboard/Office";
import Container from "@mui/material/Container";
import Team from "../../components/containers/app/dashboard/Team";
import Mood from "../../components/containers/app/dashboard/Mood";
import CustomContainer from "../../components/containers/app/CustomContainer";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../components/context/auth/AuthProvider";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import TimeService from "../../services/app/time.service";
import useAuth from "../../components/context/auth/AuthHelper";
import moment from "moment";

export default function Dashboard(props) {

    const animationDuration = 500;
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const context = useAuth();
    const day = moment().tz("Europe/Paris");
    if(day.day() === 0){
        day.add(1, 'days');
    }else if(day.day() === 6){
        day.add(2, 'days');
    }
    const [daySelected, setDaySelected] = useState(day.format('YYYY-MM-DD'));


    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"column"} spacing={2} marginTop={"1%"}>
                <Grid item>
                    <PlanningBoard/>
                </Grid>
                <Grid item xs={12} mb={2}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={4}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={4} textAlign={"center"}>
                            <Button variant="text" endIcon={<ExpandMoreIcon />}>
                                Aujourd'hui
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1} justifyContent={"space-around"}>
                        {context.user.company.activeOfficeHandler &&
                            <Grid item xs={12} md={4} style={{borderRadius:'25px'}} component={Paper}>
                                <Office day={daySelected}/>
                            </Grid>
                        }
                        <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 3 : 5} style={{borderRadius:'25px'}} component={Paper}>
                            <Team/>
                        </Grid>
                        <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 4 : 5} style={{borderRadius:'25px'}} component={Paper}>
                            <Mood day={daySelected}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer>

    );
}
