import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Fade from "react-reveal/Fade";
import PlanningElement from "./PlanningElement";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Paper from "@mui/material/Paper";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import TimeService from "../../../../services/app/time.service";
import moment from "moment";
import "moment/min/locales";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Card from "@mui/material/Card";
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import * as App_Routes from "../../../../navigation/app/Routes";


function PlanningBoard() {
    let navigate = useNavigate();
    const animationDuration = 500;
    const [week, setWeek] = useState([]);
    const [anim, setAnim] = useState(true);
    const [index, setIndex] = useState(0);
    const [orientation, setOrientation] = useState(true);
    const { enqueueSnackbar } = useSnackbar();


    useEffect(() => {
        const getTimeSheet = async () => {
            await TimeService.getTimeSheet(index).then((res) => {
                setWeek(res.data.week);
            })
        }
        getTimeSheet();
    }, [])

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
        setIndex(index+1);
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
        enqueueSnackbar('Déclaration enregistrée', {
            variant: 'success'
        });
    }

    if(week === undefined || week.length === 0){
        return (<div/>)
    }
    return(
        <Paper elevation={1} square style={{borderRadius:'25px', minHeight:'30vh'}}>
            <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"1%"}>
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button variant="text" onClick={() => navigate(App_Routes.CALENDAR)} endIcon={<ExitToAppIcon style={{fontSize: 22}}/>} disableRipple={true} style={{fontWeight:500, backgroundColor:'transparent', textTransform: 'none', fontSize: 26, color:'black'}}>
                                Mon planning
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography textAlign={"center"} fontSize={16}>
                                {moment(week[0].day).date()} {moment(week[0].day).locale('fr').format('MMMM')} - {moment(week[4].day).date()} {moment(week[4].day).locale('fr').format('MMMM')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{width:'100%'}}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={1} textAlign={"right"} style={{zIndex:2}}>
                            <IconButton onClick={() => handlePrevious()} aria-label="previous" size={"large"}>
                                <ChevronLeftIcon fontSize={"large"}/>
                            </IconButton>
                        </Grid>


                        <Grid item xs={10} style={{zIndex:1}}>
                            {week !== undefined && week.length !== 0 &&
                            <div style={{width: '100%'}}>
                                <Fade left={orientation} right={!orientation} spy={index} when={anim}
                                      duration={animationDuration} opposite distance={"10%"} cascade>
                                    <Grid container direction={"row"} justifyContent={"space-evenly"} flexWrap={"nowrap"}>
                                        <Grid item flexGrow={1} component={Paper} style={{boxShadow:'none'}}>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[0].morning}
                                                day={"Lun."} date={week[0].day}
                                                current={week[0].current} past={week[0].past}/>
                                        </Grid>
                                        <Grid item flexGrow={1} component={Paper} style={{boxShadow:'none'}}>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[1].morning}
                                                day={"Mar."} date={week[1].day}
                                                current={week[1].current} past={week[1].past}/>
                                        </Grid>
                                        <Grid item flexGrow={1} component={Paper} style={{boxShadow:'none'}}>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[2].morning}
                                                day={"Mer."} date={week[2].day}
                                                current={week[2].current} past={week[2].past}/>
                                        </Grid>
                                        <Grid item flexGrow={1} component={Paper} style={{boxShadow:'none'}}>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[3].morning}
                                                day={"Jeu."} date={week[3].day}
                                                current={week[3].current} past={week[3].past}/>
                                        </Grid>
                                        <Grid item flexGrow={1} component={Paper} style={{boxShadow:'none'}}>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[4].morning}
                                                day={"Ven."} date={week[4].day}
                                                current={week[4].current} past={week[4].past}/>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </div>
                            }
                        </Grid>
                        <Grid item xs={1} textAlign={"left"} style={{zIndex:2}}>
                            <IconButton onClick={()=>handleNext()} disabled={index === 2} aria-label="previous" size={"large"}>
                                <ChevronRightIcon fontSize={"large"}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PlanningBoard;