import {Paper, Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";
import CompanyService from "../../../services/admin/company.service";

function Information(props){

    const [stats, setStats] = useState(null);

    useEffect(() =>{
        getStats();
    }, []);

    const getStats = async () => {
        await CompanyService.getStats(props.company.id).then((res)=>{
            setStats(res.data);
            console.log(res.data);
        })
    }

    if(!stats) return (<div/>)
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
                                        <ListItemText primary="Invoice type" />
                                        <ListItemText primary={stats.invoice_type === 0 ? 'Monthly' : 'Yearly'} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Current invoice value" />
                                        <ListItemText primary={`${stats.currentInvoiceValue} € HT`} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Active users" />
                                        <ListItemText primary={stats.activeUsers} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Pending users" />
                                        <ListItemText primary={stats.pendingUsers} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Disabled users" />
                                        <ListItemText primary={stats.disabledUsers} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Teams" />
                                        <ListItemText primary={stats.teams} primaryTypographyProps={{textAlign:"right"}} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Information;