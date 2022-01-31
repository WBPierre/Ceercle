import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Fade from "react-reveal/Fade";
import PlanningElement from "./PlanningElement";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useEffect, useState } from "react";
import TimeService from "../../../../services/app/time.service";
import moment from "moment";
import "moment/min/locales";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Card from "@mui/material/Card";
import {Chip, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import * as App_Routes from "../../../../navigation/app/Routes";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PlanningBoard(props) {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();
    let navigate = useNavigate();
    const animationDuration = 500;
    const [week, setWeek] = useState([]);
    const [anim, setAnim] = useState(true);
    const [index, setIndex] = useState(0);
    const [orientation, setOrientation] = useState(true);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        updateTimeSheet();
    }, [props.update]);

    const updateTimeSheet = async () => {
        await TimeService.getTimeSheet(index).then((res) => {
            setWeek(res.data.week);
        })
    }

    useEffect(() => {
        const getTimeSheet = async () => {
            await TimeService.getTimeSheet(index).then((res) => {
                setWeek(res.data.week);
            })
        }
        getTimeSheet();
    }, []);

    const handlePrevious = async () => {
        let ind = index - 1;
        const res = await TimeService.getTimeSheet(ind);
        setOrientation(true);
        setAnim(!anim);
        setIndex(index - 1);
        setTimeout(() => {
            setAnim(true)
            setWeek(res.data.week);
        }, animationDuration)
    }

    const handleNext = async () => {
        let ind = index + 1;
        const res = await TimeService.getTimeSheet(ind);
        setOrientation(false);
        setAnim(!anim);
        setIndex(index + 1);
        setTimeout(() => {
            setAnim(true)
            setWeek(res.data.week);
        }, animationDuration)
    }

    const declareDay = async (day, choice) => {
        const resources = {
            day: day,
            morning: choice,
            afternoon: choice
        }
        await TimeService.setTimeSheet(resources);
        await TimeService.getTimeSheet(index).then((res) => {
            setWeek(res.data.week);
        })
        enqueueSnackbar(t('app:dashboard:snackbar_success'), {
            variant: 'success'
        });
    }

    if (week === undefined || week.length === 0) {
        return (<div />)
    }
    return (
        <Paper elevation={1} square style={{ borderRadius: '25px', minHeight: '30vh' }}>
            <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"1%"}>
                <Grid item xs={12} style={{width:'100%'}}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} maxWidth={true}>
                        <Grid item xs={2} textAlign={"center"}>
                            <Chip
                                label="Company rules"
                                icon={<CheckCircleIcon style={{color:'green'}}/>}
                                onClick={() => console.log("display rules")}
                            />
                        </Grid>
                        <Grid item xs={2} textAlign={"right"}>
                            <IconButton onClick={() => handlePrevious()} aria-label="previous" size={"medium"}>
                                <ChevronLeftIcon fontSize={"large"} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} textAlign={"center"}>
                            <Typography textAlign={"center"} fontSize={22} fontWeight={500}>
                                {moment(week[0].day).date()} {moment(week[0].day).locale(lang).format('MMMM')} - {moment(week[4].day).date()} {moment(week[4].day).locale(lang).format('MMMM')}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} textAlign={"left"}>
                            <IconButton onClick={() => handleNext()} disabled={index === 2} aria-label="previous" size={"medium"}>
                                <ChevronRightIcon fontSize={"large"} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} textAlign={"right"}>
                            <IconButton onClick={() => navigate(App_Routes.CALENDAR)} aria-label="previous" size={"medium"}>
                                <ExitToAppIcon fontSize={"large"} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ width: '100%' }}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={12} style={{ zIndex: 1 }}>
                            {week !== undefined && week.length !== 0 &&
                                <div style={{ width: '100%' }}>
                                    <Fade left={orientation} right={!orientation} spy={index} when={anim}
                                        duration={animationDuration} opposite distance={"10%"} cascade>
                                        <Grid container direction={"row"} justifyContent={"space-evenly"} flexWrap={"nowrap"}>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={week[0]}
                                                    day={t('app:date_elements:Mon')}
                                                    updateOffice={updateTimeSheet}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={week[1]}
                                                    day={t('app:date_elements:Tue')}
                                                    updateOffice={updateTimeSheet}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={week[2]}
                                                    day={t('app:date_elements:Wed')}
                                                    updateOffice={updateTimeSheet}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={week[3]}
                                                    day={t('app:date_elements:Thu')}
                                                    updateOffice={updateTimeSheet}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={week[4]}
                                                    day={t('app:date_elements:Fri')}
                                                    updateOffice={updateTimeSheet}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </div>
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default PlanningBoard;