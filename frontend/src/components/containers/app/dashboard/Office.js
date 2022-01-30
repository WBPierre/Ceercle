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
import { useEffect, useState } from "react";
import BookingService from "../../../../services/app/booking.service";
import OfficeModal from "./OfficeModal";

function Office(props) {

    const [booking, setBooking] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = async (update) => {
        if (update) {
            const res = await BookingService.getBooking(props.day);
            setBooking(res.data);
        }
        setOpen(false);
    }

    useEffect(() => {
        async function getBooking() {
            const res = await BookingService.getBooking(props.day);
            setBooking(res.data);
        };
        getBooking();
    }, [])



    return (
        <Grid container direction={"column"} spacing={4} py={2} px={2}>
            <OfficeModal open={open} handleClose={(update) => handleClose(update)} handleOpen={handleOpen} day={props.day} />
            <Grid item xs={12}>
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item>
                        <Typography variant={"h5"} fontWeight={500}>
                            Mon bureau
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"body1"} color={"primary"} fontSize={18}>
                    Ma réservation :
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {booking.length !== 0 ? (
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        <Grid item>
                            <Typography variant={"h5"} color={"primary"}>
                                {booking.office}
                            </Typography>
                        </Grid>
                        {booking.parent &&
                            <Grid item>
                                <Typography variant={"h5"} color={"primary"}>
                                    {booking.parent}
                                </Typography>
                            </Grid>
                        }
                        <Grid item>
                            <Typography variant={"h5"} style={{ color: '#d32f2f' }}>
                                {booking.room}
                            </Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        <Grid item>
                            <Typography variant={"h5"} color={"primary"}>
                                Aucune réservation
                            </Typography>
                        </Grid>
                    </Grid>
                )}

            </Grid>
            {booking.length !== 0 ? (
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button variant={"contained"} onClick={() => handleOpen()}>Modifier ma réservation</Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button variant={"contained"} onClick={() => handleOpen()}>Faire une réservation</Button>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default Office;