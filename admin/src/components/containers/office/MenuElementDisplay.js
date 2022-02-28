import {Button, Divider, Grid, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function MenuElementDisplay(props){

    const [name, setName] = useState('');

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
        }
    }

    useEffect(() => {
        if(props.item !== null){
            setName(props.item.name);
        }
    }, [props.item])

    const handleDeskUpdate = (type) => {
        props.updateSeat(props.item.index, type, name);
    }

    if(props.item === null){
        return(
            <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <Typography>Select an element</Typography>
                </Grid>
            </Grid>
        )
    }else{
        return(
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <Typography>Desk {props.item.name}</Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" onChange={handleChange} name={"name"} value={name} label="Name" variant="standard" />
                </Grid>
                <Grid item>
                    <Button variant={"outlined"} onClick={() => handleDeskUpdate(1)} fullWidth={true}>Save desk</Button>
                </Grid>
                <Grid item>
                    <Button variant={"outlined"} color={"warning"} onClick={() => handleDeskUpdate(0)} fullWidth={true}>Remove desk</Button>
                </Grid>
            </Grid>
        )
    }
}