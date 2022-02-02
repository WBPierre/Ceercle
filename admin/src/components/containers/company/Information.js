import {Paper, Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";

function Information(props){
    return(
        <Paper style={{borderRadius:'25px', padding: '2%'}}>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography variant={"h5"}>Global</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"}>
                        <Grid item xs={4}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Stats" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Stats 2" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Information;