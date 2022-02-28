import {Divider, Grid, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import List from '@mui/material/List';

export default function SeatInfo(props){
    return(
        <List>
            <ListItem disablePadding>
                <ListItemText primary={`Desk ${props.seat.name}`} />
            </ListItem>
            <Divider color={"white"}/>
            <ListItem disablePadding>
                <ListItemText primary="Status : Free" />
            </ListItem>
        </List>
    )
}