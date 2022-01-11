import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
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
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid item px={1}>
                    <Grid container direction={"column"} px={1} style={{backgroundColor:'#2F5597', borderRadius:'50%'}}>

                        <Typography textAlign={"center"} style={{color: 'white'}}
                                    fontSize={22}
                                    fontWeight={600}>{<GetDay/>}</Typography>
                        <Typography textAlign={"center"} style={{color:'white'}}
                                    fontSize={18}
                                    fontWeight={600}>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
                    </Grid>

                </Grid>
            </Grid>

        )
    }else{
        return(
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography textAlign={"center"} style={{color: '#d32f2f'}}
                            fontSize={22}
                            fontWeight={500}>{<GetDay/>}</Typography>
                    <Typography textAlign={"center"} style={{color: '#2F5597'}}
                            fontSize={18}
                            fontWeight={500}>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
                </Grid>
            </Grid>
        )
    }

}

export default CalendarDateElement;