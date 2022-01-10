import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import moment from "moment";

function CalendarDateElement(props) {

    const GetDay = () => {
        switch(props.dayKey){
            case 0: return ('Lun.');
            case 1: return ('Mar.');
            case 2: return ('Mer.');
            case 3: return ('Jeu.');
            case 4: return ('Ven.');
        }
    }

    if(moment().format("YYYY-MM-DD") === props.date.day){
        return(
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} style={{backgroundColor:'#2F5597'}}>
                <Grid item px={1} >
                    <Grid container direction={"column"} px={1}>
                        <Grid item textAlign={"center"}>
                            <Typography style={{color:'white'}}>{<GetDay/>}</Typography>
                        </Grid>
                        <Grid item textAlign={"center"}>
                            <Typography style={{color:'white'}}>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }else{
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

}

export default CalendarDateElement;