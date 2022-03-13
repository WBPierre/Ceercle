import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Fade from "react-reveal/Fade";
import PlanningElement from "./PlanningElement";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useState } from "react";
import TimeService from "../../../../services/app/time.service";
import BookingService from "../../../../services/app/booking.service";
import moment from "moment";
import "moment/min/locales";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import * as App_Routes from "../../../../navigation/app/Routes";
import { useTranslation } from "react-i18next";
import HRRulesCheckDisplay from "./HRRulesCheckDisplay";
import useAuth from "../../../context/auth/AuthHelper";
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
    fontSize: 11,
    fontColor: '#FFFFFF'
  }));

function PlanningBoard(props) {
    const context = useAuth();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();
    let navigate = useNavigate();
    const animationDuration = 500;
    const [anim, setAnim] = useState(true);
    const [index, setIndex] = useState(0);
    const [orientation, setOrientation] = useState(true);
    const { enqueueSnackbar } = useSnackbar();


    const handlePrevious = async () => {
        let ind = index - 1;
        setOrientation(true);
        setAnim(!anim);
        setIndex(index - 1);
        setTimeout(async () => {
            props.getTimeSheet(ind);
            setAnim(true);
        }, animationDuration)
    }

    const handleNext = async () => {
        let ind = index + 1;
        setOrientation(false);
        setAnim(!anim);
        setIndex(index + 1);
        setTimeout(async () => {
            props.getTimeSheet(ind);
            setAnim(true);
        }, animationDuration)
    }

    const declareDay = async (day, choice, half, order) => {
        let previous = props.week.filter(x => x.day === day)[0];
        let resources = {
            day: day,
            morning: previous.morning,
            afternoon: previous.afternoon
        }
        if(half){
            if(order === 0){
                resources.morning = choice;
            }else{
                resources.afternoon = choice
            }
        }else{
            resources.morning = choice;
            resources.afternoon = choice;
        }
        if(previous.morning !== choice || previous.afternoon !== choice) {
            if(context.user.company.activeOfficeHandler && context.user.company.officeBookingMandatory && previous.reservation.length === 0 && (resources.morning === 1 || resources.afternoon === 1)){
                props.handleOpenOffice(day, previous.reservation, order, resources);
            }else{
                await TimeService.setTimeSheet(resources);
                enqueueSnackbar(t('app:dashboard:snackbar_success'), {
                    variant: 'success'
                });
                let before = props.week.find(x => x.day === day);
                if (resources.morning !== 1 && resources.afternoon !== 1) {
                    if (before.reservation.length !== 0) {
                        await BookingService.removeBooking(before.day);
                        enqueueSnackbar(t('app:dashboard:desk_remove'), {
                            variant: 'success'
                        });
                    }
                }
            }

            await props.getTimeSheet(index);
        }
    }

    const declareWeek = async () => {
        const followingDays = props.week.filter(x => moment(x.day).diff(moment()) >= 0);
        console.log(context.user.company.officeBookingMandatory)
        if(followingDays.length >0){
            for(let i=0; i<followingDays.length; i++){
                let dayOfTheWeek = moment(followingDays[i].day).day() - 1
                let status = 0
                switch (dayOfTheWeek){
                    case 0: status = props.user.mondayStatus; break;
                    case 1: status = props.user.tuesdayStatus; break;
                    case 2: status = props.user.wednesdayStatus; break;
                    case 3: status = props.user.thursdayStatus; break;
                    case 4: status = props.user.fridayStatus; break;
                }
                if(status == 1 && context.user.company.activeOfficeHandler && (followingDays[i].morning != 1) && (followingDays[i].afternoon != 1)){
                    const resources = {
                        day: followingDays[i].day,
                        officeElementId: props.user.favoriteDesk,
                        officeBookingMandatory: context.user.company.officeBookingMandatory
                    }
                    await BookingService.setAutomaticBooking(resources).then(async (res) => {
                        let timeSheetResources = {
                            day: followingDays[i].day,
                            morning: status,
                            afternoon: status,
                        }
                        if(res.data.status == 'validated'){
                            await TimeService.setTimeSheet(timeSheetResources);
                            enqueueSnackbar(t('app:dashboard:snackbar_success'), {
                                variant: 'success'
                            });
                        } else if (res.data.status == 'other_seat'){
                            await TimeService.setTimeSheet(timeSheetResources);
                            enqueueSnackbar("Votre bureau favori n'est pas disponible.", {
                                variant: 'success'
                            });
                        } else if(res.data.status == 'warning'){
                            await TimeService.setTimeSheet(timeSheetResources);
                            enqueueSnackbar("Votre bureau favori n'est pas disponible. Un autre bureau vous a été attribué.", {
                                variant: 'success'
                            });
                        } else if(res.data.status == 'declare_favorite_seat'){
                            await TimeService.setTimeSheet(timeSheetResources);
                            enqueueSnackbar("Veuillez déclarer un bureau favori dans vos paramètres de compte.", {
                                variant: 'warning'
                            });
                        } else {
                            enqueueSnackbar("Pas de place disponible", {
                                variant: 'success'
                            });
                        }
                    })
                } else {
                    let resources = {
                        day: followingDays[i].day,
                        morning: status,
                        afternoon: status,
                    }
                    await TimeService.setTimeSheet(resources);
                }
            }
        }
        await props.getTimeSheet(index);
    }

    if (props.week === undefined || props.week.length === 0) {
        return (<div />)
    }
    return (
        <Paper elevation={1} square style={{ borderRadius: '25px', minHeight: '30vh' }}>
            <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"1%"}>
                <Grid item xs={12} style={{ width: '100%' }}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} maxWidth={true}>
                        <Grid item xs={2} textAlign={"center"}>
                            <HRRulesCheckDisplay ruleRespected={props.ruleRespected} />
                        </Grid>
                        <Grid item xs={2} textAlign={"right"}>
                            <IconButton onClick={() => handlePrevious()} aria-label="previous" size={"medium"}>
                                <ChevronLeftIcon fontSize={"large"} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} textAlign={"center"}>
                            <Typography textAlign={"center"} fontSize={22} fontWeight={500}>
                                {moment(props.week[0].day).date()} {moment(props.week[0].day).locale(lang).format('MMMM')} - {moment(props.week[4].day).date()} {moment(props.week[4].day).locale(lang).format('MMMM')}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} textAlign={"left"}>
                            <IconButton onClick={() => handleNext()} disabled={index === 2} aria-label="previous" size={"medium"}>
                                <ChevronRightIcon fontSize={"large"} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} textAlign={"right"}>
                            <ColorButton variant="contained" startIcon={<EventAvailableIcon />} onClick={() => declareWeek()}>Semaine par défaut</ColorButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ width: '100%' }}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={12} style={{ zIndex: 1 }}>
                            {props.week !== undefined && props.week.length !== 0 &&
                                <div style={{ width: '100%' }}>
                                    <Fade left={orientation} right={!orientation} spy={index} when={anim}
                                        duration={animationDuration} opposite distance={"10%"} cascade>
                                        <Grid container direction={"row"} justifyContent={"space-evenly"} flexWrap={"nowrap"} flexGrow={0}>
                                            <Grid item  flexGrow={1} component={Paper} style={{ boxShadow: 'none', maxWidth:'20%' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={props.week[0]}
                                                    day={t('app:date_elements:Mon')}
                                                    openOffice={(day, booking, type) => props.handleOpenOffice(day, booking, type)}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none', maxWidth:'20%' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={props.week[1]}
                                                    day={t('app:date_elements:Tue')}
                                                    openOffice={(day, booking, type) => props.handleOpenOffice(day, booking, type)}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none', maxWidth:'20%' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={props.week[2]}
                                                    day={t('app:date_elements:Wed')}
                                                    openOffice={(day, booking, type) => props.handleOpenOffice(day, booking, type)}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none', maxWidth:'20%' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={props.week[3]}
                                                    day={t('app:date_elements:Thu')}
                                                    openOffice={(day, booking, type) => props.handleOpenOffice(day, booking, type)}
                                                />
                                            </Grid>
                                            <Grid item flexGrow={1} component={Paper} style={{ boxShadow: 'none', maxWidth:'20%' }}>
                                                <PlanningElement
                                                    modify={declareDay}
                                                    data={props.week[4]}
                                                    day={t('app:date_elements:Fri')}
                                                    openOffice={(day, booking, type) => props.handleOpenOffice(day, booking, type)}
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