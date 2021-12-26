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
import {useEffect, useState} from "react";
import TimeService from "../../../../services/app/time.service";
import moment from "moment";


function PlanningBoard() {

    const animationDuration = 500;
    const [week, setWeek] = useState([]);
    const [anim, setAnim] = useState(true);
    const [index, setIndex] = useState(0);
    const [orientation, setOrientation] = useState(true);

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
    }

    return(
        <Paper elevation={4} square style={{borderRadius:'25px', minHeight:'40vh'}}>
            <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"2%"}>
                <Grid item xs={12}>
                    <Button variant="text" endIcon={<CreateIcon style={{fontSize: 28, color:'grey'}}/>} disableRipple={true} style={{backgroundColor:'transparent', textTransform: 'none', fontSize: 28, color:'black'}}>
                        Mon planning
                    </Button>
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
                                    <Grid container direction={"row"} justifyContent={"space-evenly"}>
                                        <Grid item>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[0].morning}
                                                day={"Lun."} date={week[0].day}
                                                current={week[0].current} past={week[0].past}/>
                                        </Grid>
                                        <Grid item>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[1].morning}
                                                day={"Mar."} date={week[1].day}
                                                current={week[1].current} past={week[1].past}/>
                                        </Grid>
                                        <Grid item>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[2].morning}
                                                day={"Mer."} date={week[2].day}
                                                current={week[2].current} past={week[2].past}/>
                                        </Grid>
                                        <Grid item>
                                            <PlanningElement
                                                modify={declareDay}
                                                from={week[3].morning}
                                                day={"Jeu."} date={week[3].day}
                                                current={week[3].current} past={week[3].past}/>
                                        </Grid>
                                        <Grid item>
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