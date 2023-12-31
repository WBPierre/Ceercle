import * as React from "react";
import Grid from "@mui/material/Grid";
import CalendarDateElement from "./CalendarDateElement";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import TimeService from "../../../../services/app/time.service";
import CalendarElement from "./CalendarElement";
import CalendarUser from "./CalendarUser";

function CalendarDisplay(props) {

    const [week, setWeek] = useState([]);
    const [index, setIndex] = useState(0);
    const [usersWeek, setUsersWeek] = useState([]);


    useEffect(() => {
        const getTimeSheet = async () => {
            await TimeService.getTimeSheet(index).then((res) => {
                setWeek(res.data.week);
                props.handleWeek(res.data.week);
            })
        }
        const getAllTimeSheet = async () => {
            await TimeService.getAllTimeSheet(index).then((res) => {
                setUsersWeek(res.data);
            })
        }
        getTimeSheet();
        getAllTimeSheet();
    }, []); //eslint-disable-line

    const updateData = async (ind) => {
        if (ind === undefined) {
            ind = index
        }
        await TimeService.getTimeSheet(ind).then((res) => {
            setWeek(res.data.week);
            props.handleWeek(res.data.week);
        })
        await TimeService.getAllTimeSheet(ind).then((res) => {
            setUsersWeek(res.data);
        })
    }

    const getPreviousWeek = async () => {
        let ind = index - 1;
        setIndex(ind);
        await updateData(ind);
    }

    const getNextWeek = async () => {
        let ind = index + 1;
        setIndex(ind);
        await updateData(ind);
    }

    if (week.length === 0 || usersWeek.length === 0) {
        return (<div />)
    } else {
        return (
            <Grid container direction={"column"} spacing={2}>
                <Grid item mt={1}>
                    <Grid container direction={"row"}>
                        <Grid item md={1} textAlign={"center"}>
                            <IconButton aria-label="previous" size={"large"} onClick={() => getPreviousWeek()} color="primary">
                                <ChevronLeftIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Grid>
                        {week.map((day, i) => (
                            <Grid item md={2} key={i}>
                                <CalendarDateElement date={day} dayKey={i} />
                            </Grid>
                        ))}
                        <Grid item md={1} textAlign={"center"}>
                            <IconButton aria-label="next" size={"large"} onClick={() => getNextWeek()} color="primary">
                                <ChevronRightIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} >
                        <Grid item md={1} />
                        {week.map((day, i) => (
                            <Grid item md={2} key={i}>
                                <CalendarUser data={week[i]} updateData={updateData} />
                            </Grid>
                        ))}
                        <Grid item md={1} />
                    </Grid>
                </Grid>

                <Grid item mt={2}>
                    <Grid container direction={"row"}>
                        <Grid item md={1} />
                        {week.map((day, i) => (
                            <Grid item md={2} key={i}>
                                <CalendarElement data={usersWeek[i]} dayKey={i} filters={props.filters} />
                            </Grid>
                        ))}
                        <Grid item md={1} />
                    </Grid>
                </Grid>
            </Grid>

        )
    }

}

export default CalendarDisplay;