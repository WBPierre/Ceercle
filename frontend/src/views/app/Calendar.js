import * as React from 'react';
import Grid from "@mui/material/Grid";
import CustomContainer from "../../components/containers/app/CustomContainer";
import { useState } from "react";
import FilterBar from "../../components/containers/app/calendar/FilterBar";
import CalendarDisplay from "../../components/containers/app/calendar/CalendarDisplay";

export default function Calendar(props) {

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
            <Grid wrap={"nowrap"} container direction={"column"} spacing={1} >
                <Grid item mt={2}>
                    <FilterBar handleFilters={handleFilters} week={week} />
                </Grid>
                <Grid item mt={3}>
                    <CalendarDisplay filters={filters} handleWeek={handleWeek} />
                </Grid>
            </Grid>
    );
}
