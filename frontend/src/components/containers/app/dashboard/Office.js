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

function Office(){
    return(
        <Paper elevation={4} square style={{borderRadius:'25px'}}>
            <Grid container direction={"column"} spacing={4} pb={2} px={2}>
                <Grid item xs={12}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography variant={"h5"} fontWeight={500}>
                                Mon bureau
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant={"text"} style={{backgroundColor:'transparent'}}>Go to</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"} color={"primary"} fontSize={18}>
                        Ma réservation :
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        <Grid item>
                            <Typography variant={"h5"} color={"primary"}>
                                Paris
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h5"} color={"primary"}>
                                Salle Eiffel
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h5"} style={{color:'#d32f2f'}}>
                                B08
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"} color={"primary"} fontSize={18}>
                        Collaborateurs dans votre salle :
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={example1} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="Travis Howard" src={example2} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="Cindy Baker" src={example3} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="Agnes Walker" src={example4} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="Trevor Henderson" src={example5} />
                        </Grid>
                        <Grid item>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Office;