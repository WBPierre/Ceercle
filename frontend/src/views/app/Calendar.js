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
import { Divider, TextField } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Office from "../../components/containers/app/dashboard/Office";
import Container from "@mui/material/Container";
import Team from "../../components/containers/app/dashboard/Team";
import Mood from "../../components/containers/app/dashboard/Mood";
import CustomContainer from "../../components/containers/app/CustomContainer";
import Fade from 'react-reveal/Fade';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/auth/AuthProvider";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import TimeService from "../../services/app/time.service";
import FilterBar from "../../components/containers/app/calendar/FilterBar";
import CalendarDisplay from "../../components/containers/app/calendar/CalendarDisplay";

export default function Calendar(props) {

    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [week, setWeek] = useState([]);
    const [filters, setFilers] = useState({
        search: '',
        team: 0,
        type: -1
    })


    const handleFilters = (obj) => {
        setFilers(obj);
    }

    const handleWeek = (data) => {
        setWeek(data);
    }

    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"column"} spacing={1} >
                <Grid item mt={2}>
                    <FilterBar handleFilters={handleFilters} week={week}/>
                </Grid>
                <Grid item mt={3}>
                    <CalendarDisplay filters={filters} handleWeek={handleWeek}/>
                </Grid>
            </Grid>
        </CustomContainer >

    );
}
