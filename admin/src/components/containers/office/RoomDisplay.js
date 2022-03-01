import {useEffect, useState} from "react";
import Seat from "./Seat";
import {Button, Chip, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function RoomDisplay(props){

    const handleSelection = (item) => {
        props.select(item);
    }

    if(props.room.background){
        return(
            <div style={{width:'500px', height:'500px', position:'relative', backgroundImage: `url(${props.room.background})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'contain'}}>
                {props.seats.map((s, i) => (
                    <Seat data={s} size={props.room.size} key={i} select={(item) => handleSelection(item)}/>
                ))}
            </div>
        )
    }else{
        return(
            <div style={{width:'500px', height:'500px', backgroundColor:'#969696'}}>
                <Grid container direction={"column"} style={{height:'100%', width:'100%'}} justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <Typography>No image</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }


}