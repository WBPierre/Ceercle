import {Button, Chip, Divider, Grid, Stack} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuElementDisplay from "./MenuElementDisplay";
import {useEffect} from "react";

export default function ModifyMenu(props){

    const handleAddSeat = () => {
        props.addSeat();
    }

    const updateSeat = (index, type, name) => {
        props.updateSeat(index, type, name);
    }


    return(
        <Grid container direction={"column"} style={{height:'100%'}}>
            <Grid item style={{flex:4}}>
                <MenuElementDisplay item={props.item} updateSeat={(index, type, name) => updateSeat(index, type, name)}/>
            </Grid>
            <Grid item style={{flex:1, borderTop:'1px solid black', padding:5}}>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <Button variant={"outlined"} onClick={() => handleAddSeat()} fullWidth={true}>Add a seat</Button>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"}>
                            <Grid item xs={6}>
                                <Button variant={"text"} fullWidth={true} onClick={() => props.close()}>Cancel</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant={"contained"} fullWidth={true} onClick={() => props.handleSave()}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}