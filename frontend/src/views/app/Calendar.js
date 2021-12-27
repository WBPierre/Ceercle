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
import {Divider, TextField} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Office from "../../components/containers/app/dashboard/Office";
import Container from "@mui/material/Container";
import Team from "../../components/containers/app/dashboard/Team";
import Favorites from "../../components/containers/app/dashboard/Favorites";
import CustomContainer from "../../components/containers/app/CustomContainer";
import Fade from 'react-reveal/Fade';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../components/context/auth/AuthProvider";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import TimeService from "../../services/app/time.service";
import FilterBar from "../../components/containers/app/calendar/FilterBar";
import CalendarDisplay from "../../components/containers/app/calendar/CalendarDisplay";

export default function Calendar(props) {

    const animationDuration = 500;
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"column"} spacing={3} marginTop={"1%"}>
                <Grid item>
                    <FilterBar/>
                </Grid>
                <Grid item>
                    <CalendarDisplay/>
                </Grid>
            </Grid>
        </CustomContainer>

    );
}
