import Grid from "@mui/material/Grid";
import {Button, Paper} from "@mui/material";
import CalendarElement from "./CalendarElement";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import TimeService from "../../../../services/app/time.service";

function CalendarDisplay() {

    const [week, setWeek] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const getTimeSheet = async () => {
            await TimeService.getTimeSheet(index).then((res) => {
                setWeek(res.data.week);
            })
        }
        getTimeSheet();
    }, [])

    if(week.length === 0) {
        return (<div/>)
    }else{
        return(
            <Paper>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Button variant={"contained"}>Aujourd'hui</Button>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"}>
                            <Grid item md={1} textAlign={"center"}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Grid>
                            {week.map((day, i) => (
                                <Grid item md={2} key={i}>
                                    <CalendarElement date={day} dayKey={i}/>
                                </Grid>
                            ))}
                            <Grid item md={1} textAlign={"center"}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <ChevronRightIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        )
    }

}

export default CalendarDisplay;