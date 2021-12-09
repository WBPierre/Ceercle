import {Avatar, AvatarGroup, Paper} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import example1 from "../../../../assets/images/example/1.jpg";
import example2 from "../../../../assets/images/example/2.jpg";
import example3 from "../../../../assets/images/example/3.jpg";
import example4 from "../../../../assets/images/example/4.jpg";
import example5 from "../../../../assets/images/example/5.jpg";
import AddIcon from '@mui/icons-material/Add';
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaperIcon from "../../../molecules/icons/PaperIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";

function Team(){
    return(
        <Paper elevation={4} square style={{borderRadius:'25px'}}>
            <Grid container direction={"column"} spacing={2} py={2} px={2}>
                <Grid item xs={12}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography variant={"h5"} fontWeight={500}>
                                Mon équipe
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant={"text"} style={{backgroundColor:'transparent'}}>Go to</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button variant="text" style={{backgroundColor:'transparent', color:'#95E59A', fontSize:18, textTransform:'none'}} startIcon={<OfficeIcon sx={{width: 24, height:24}}/>} endIcon={<ExpandMoreIcon style={{color:'#7F7F7F'}}/>}>Bureau (7/15)</Button>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                <Grid item>
                                    <Avatar alt="Trevor Henderson" src={example5} />
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:'#7F7F7F'}}>Trevor Henderson</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button variant="text" style={{backgroundColor:'transparent', color:'#8BCCEE', fontSize:18, textTransform:'none'}} startIcon={<ManWorkingIcon sx={{width: 24, height:24}}/>} endIcon={<ExpandMoreIcon style={{color:'#7F7F7F'}}/>}>Télétravail (4/15)</Button>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                <Grid item>
                                    <Avatar alt="Agnes Walker" src={example4} />
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:'#7F7F7F'}}>Trevor Henderson</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="text" style={{backgroundColor:'transparent', color:'black', fontSize:18, textTransform:'none'}} startIcon={<PaperIcon sx={{width: 24, height:24}}/>} endIcon={<ExpandMoreIcon/>}>Tout afficher (4/15)</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Team;