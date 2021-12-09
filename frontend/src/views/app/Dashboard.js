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

export default function Dashboard(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"column"} spacing={2}>
                <Grid item>
                    <Paper elevation={4} square style={{borderRadius:'25px'}}>
                        <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"2%"}>
                            <Grid item xs={12}>
                                <Button variant="text" endIcon={<CreateIcon style={{fontSize: 28, color:'grey'}}/>} disableRipple={true} style={{backgroundColor:'transparent', textTransform: 'none', fontSize: 28, color:'black'}}>
                                    Mon planning
                                </Button>
                            </Grid>
                            <Grid item xs={12} style={{width:'100%'}}>
                                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item xs={1} textAlign={"right"}>
                                        <IconButton aria-label="previous" size={"large"}>
                                            <ChevronLeftIcon fontSize={"large"}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container direction={"row"} spacing={5} justifyContent={"space-evenly"}>
                                            <Grid item>
                                                <PlanningElement from={"remote"} day={"Lun."} dayNumber={6} current={false} past={true}/>
                                            </Grid>
                                            <Grid item>
                                                <PlanningElement from={"office"} day={"Mar."} dayNumber={7} current={false} past={true}/>
                                            </Grid>
                                            <Grid item>
                                                <PlanningElement from={"office"} day={"Mer."} dayNumber={8} current={true} past={false}/>
                                            </Grid>
                                            <Grid item>
                                                <PlanningElement day={"Jeu."} dayNumber={9} current={false} past={false}/>
                                            </Grid>
                                            <Grid item>
                                                <PlanningElement from={"move"} day={"Ven."} dayNumber={10} current={false} past={false}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1} textAlign={"left"}>
                                        <IconButton aria-label="previous" size={"large"}>
                                            <ChevronRightIcon fontSize={"large"}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
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
