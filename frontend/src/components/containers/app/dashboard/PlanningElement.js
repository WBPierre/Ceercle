import {Avatar, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import PlaneTakeOffIcon from "../../../molecules/icons/PlaneTakeOffIcon";
import {useTheme} from "@mui/material/styles";

function PlanningElement(props){

    switch(props.from){
        case "remote":
            return(
                <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography textAlign={"center"} style={{color: props.current ? '#8BCCEE' : '#d32f2f'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                        <Typography textAlign={"center"} style={{color: props.current ? '#8BCCEE' : '#2F5597'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.dayNumber}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{width: 75, height: 75}}
                                style={{
                                    border: props.current ? '3px solid #8BCCEE' : 'none',
                                    backgroundColor: props.past ? '#D3D3D3' : props.current ? '#DAEFFA' : '#DAEFFA'
                                }}>
                            <ManWorkingIcon sx={{width: 50, height:50}}/>
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography textAlign={"center"} style={{color: props.past ? '#D3D3D3' : props.current ? '#8BCCEE' : '#2F5597'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>Télétravail</Typography>
                    </Grid>
                </Grid>
            );
        case "office":
            return(
                <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography textAlign={"center"} style={{color: props.current ? '#95E59A' : '#d32f2f'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                        <Typography textAlign={"center"} style={{color: props.current ? '#95E59A' : '#2F5597'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.dayNumber}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ width: 75, height: 75 }}
                                style={{
                                    border: props.current ? '3px solid #95E59A' : 'none',
                                    backgroundColor: props.past ? '#D3D3D3' : props.current ? '#C3E4B6' : '#2F5597'}}>
                            <OfficeIcon sx={{width: 50, height:50}}/>
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography textAlign={"center"} style={{color: props.past ? '#D3D3D3' : props.current ? '#95E59A' : '#60b56d'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>Bureau</Typography>
                    </Grid>
                </Grid>
            );
        case "move":
            return(
                <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography textAlign={"center"} style={{color: props.current ? '#C7B3DA' : '#d32f2f'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                        <Typography textAlign={"center"} style={{color: props.current ? '#C7B3DA' : '#2F5597'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.dayNumber}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ width: 75, height: 75 }}
                                style={{
                                    border: props.current ? '3px solid #C7B3DA' : 'none',
                                    backgroundColor: props.past ? '#D3D3D3' : '#E6DCF1'}}>
                            <PlaneTakeOffIcon sx={{width: 50, height:50}}/>
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography textAlign={"center"} style={{color: props.past ? '#D3D3D3' : props.current ? '#C7B3DA' : '#9872B2'}} fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>Déplacement</Typography>
                    </Grid>
                </Grid>
            )
        default:
            return(<div/>)
    }
}

export default PlanningElement;