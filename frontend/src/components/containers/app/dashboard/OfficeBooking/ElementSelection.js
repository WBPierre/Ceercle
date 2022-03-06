import Grid from "@mui/material/Grid";
import {Avatar, Paper, Tooltip, Typography} from "@mui/material";
import ProfileDefault from "../../../../../assets/images/example/default.png";
import ElementTooltip from "./ElementTooltip";
import Button from "@mui/material/Button";


export default function ElementSelection(props){

    const handleSelection = () => {
        if(((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length > 0 ){
            props.handleSelection(props.data);
        }
    }

    const handleCapacityColor = () => {
        let available = (((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length)/(props.data.capacity*props.data.maxCapacity/100);
        available = available*100;
        if(available > 60){
            return '#008946';
        } else if(available > 30){
            return '#FFA800'
        } else {
            return '#DE5959'
        }
    }

    console.log(((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length);

    if(!props.data) return (<div/>)
    return(
        <Grid item xs={6}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Paper style={{padding: 5, width:'150px', height:'120px', cursor: ((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length > 0 ? 'pointer' : 'default', backgroundColor: ((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length > 0 ? '#FDF9F6' : "#CCCCCC", border: props.isSelected ? '2px solid #008946' : 'none'}} onClick={handleSelection}>
                    <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                            <Typography fontSize={24} fontWeight={500} textAlign={'left'}>{props.data.name}</Typography>
                        </Grid>
                        <Grid item textAlign={"center"}>
                            <Typography fontWeight={500} style={{color:handleCapacityColor()}}>{((props.data.capacity*props.data.maxCapacity)/100)-props.data.users.length}/{(props.data.capacity*props.data.maxCapacity)/100}</Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title={<ElementTooltip users={props.data.users}/>} arrow>
                                <Grid container direction={"row"}>
                                    {props.data.users.map((u, i) => {
                                        if(i < 4){
                                            return(
                                                <Grid item key={i}>
                                                    <Avatar sx={{height:24, width:24}} src={u.profilePicturePath === null ? ProfileDefault : u.profilePicturePath}/>
                                                </Grid>
                                            )
                                        }
                                    })}
                                    {props.data.users.length > 4 &&
                                    <Grid item>
                                        <Avatar sx={{height:24, width:24}} style={{fontSize: 12}}>+{props.data.users.length-4}</Avatar>
                                    </Grid>
                                    }
                                </Grid>
                            </Tooltip>

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )

}