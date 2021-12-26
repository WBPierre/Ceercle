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
import Favorites from "../../components/containers/app/dashboard/Favorites";
import CustomContainer from "../../components/containers/app/CustomContainer";
import Fade from 'react-reveal/Fade';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../components/context/auth/AuthProvider";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import TimeService from "../../services/app/time.service";

export default function Dashboard(props) {

    const animationDuration = 500;
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

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
                    <Grid container direction={"row"} spacing={3}>
                        <Grid item xs={12} md={4} mt={2}>
                            <Office/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Team/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Favorites/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer>

    );
}
