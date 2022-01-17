import { Avatar, AvatarGroup, Paper } from "@mui/material";
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
import { useNavigate } from "react-router-dom";


function Team() {
    let navigate = useNavigate();
    return (
        <Grid container direction={"column"} spacing={2} py={2} px={2}>
            <Grid item xs={12}>
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item>
                        <Typography variant={"h5"} fontWeight={500}>
                            Mon équipe
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant={"text"} onClick={() => navigate('/app/calendar')} style={{ backgroundColor: 'transparent', color: "#3B3838" }}>Accéder</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={"column"}>
                    <Grid item xs={12}>
                        <Button variant="text" style={{ backgroundColor: 'transparent', color: '#60b56d', fontSize: 16, textTransform: 'none' }} startIcon={<OfficeIcon sx={{ width: 28, height: 28, backgroundColor: '#95E59A' }} />} endIcon={<ExpandMoreIcon style={{ color: '#7F7F7F' }} />}>Bureau (7/15)</Button>
                    </Grid>
                    <Grid item xs={12} paddingLeft={2}>
                        <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                            <Grid item>
                                <Grid container direction={"row"} spacing={1}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={example1} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar alt="Travis Howard" sx={{ width: 24, height: 24 }} src={example2} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar alt="Cindy Baker" sx={{ width: 24, height: 24 }} src={example3} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{ backgroundColor: 'transparent', color: '#7F7F7F' }}>
                                            +4
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={"column"}>
                    <Grid item xs={12}>
                        <Button variant="text" style={{ backgroundColor: 'transparent', color: '#0070C0', fontSize: 16, textTransform: 'none' }} startIcon={<ManWorkingIcon sx={{ width: 28, height: 28, backgroundColor: '#8BCCEE' }} />} endIcon={<ExpandMoreIcon style={{ color: '#7F7F7F' }} />}>Télétravail (4/15)</Button>
                    </Grid>
                    <Grid item xs={12} paddingLeft={2}>
                        <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" src={example4} sx={{ width: 24, height: 24 }} />
                            </Grid>
                            <Grid item>
                                <Avatar alt="Travis Howard" src={example5} sx={{ width: 24, height: 24 }} />
                            </Grid>
                            <Grid item>
                                <Avatar sx={{ width: 24, height: 24 }} style={{ backgroundColor: 'transparent', color: '#7F7F7F' }}>
                                    +2
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button variant="text" style={{ backgroundColor: 'transparent', color: 'black', fontSize: 16, textTransform: 'none' }} startIcon={<PaperIcon sx={{ width: 24, height: 24 }} />} endIcon={<ExpandMoreIcon />}>Tout afficher (4/15)</Button>
            </Grid>
        </Grid>
    )
}

export default Team;