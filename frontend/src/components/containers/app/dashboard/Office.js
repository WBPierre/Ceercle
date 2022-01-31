import { Avatar, AvatarGroup, Paper } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import BookingService from "../../../../services/app/booking.service";
import OfficeModal from "./OfficeModal";

function Office(props) {

    const { t } = useTranslation();

    const [booking, setBooking] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = async (update) => {
        if (update) {
            const res = await BookingService.getBooking(props.day);
            setBooking(res.data);
            props.updateTimeSheet();
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
                            {t('app:dashboard:desk.my_desk')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"body1"} color={"primary"} fontSize={18}>
                    {t('app:dashboard:desk.my_reservation')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {booking.length !== 0 ? (
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        {booking.map((b, index) => {
                            return (
                                <Grid item>
                                    <Typography variant={"h5"} color={"secondary"}>
                                        {b.name}
                                    </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                ) : (
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        <Grid item>
                            <Typography variant={"h5"} color={"primary"}>
                                {t('app:dashboard:desk.none')}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
            {booking.length !== 0 ? (
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button variant={"contained"} onClick={() => handleOpen()}>{t('app:dashboard:desk.modify')}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button variant={"contained"} onClick={() => handleOpen()}>{t('app:dashboard:desk.book')}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default Office;