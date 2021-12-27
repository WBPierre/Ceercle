import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import moment from "moment";

function CalendarElement(props) {

    const GetDay = () => {
        switch(props.dayKey){
            case 0: return ('Lun.');
            case 1: return ('Mar.');
            case 2: return ('Mer.');
            case 3: return ('Jeu.');
            case 4: return ('Ven.');
        }
    }

    return(
        <Grid container direction={"column"}>
            <Grid item textAlign={"center"}>
                <Typography>{<GetDay/>}</Typography>
            </Grid>
            <Grid item textAlign={"center"}>
                <Typography>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
            </Grid>
        </Grid>
    )
}

export default CalendarElement;