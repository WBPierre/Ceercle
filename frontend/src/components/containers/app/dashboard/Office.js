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

    return (
        <Grid container direction={"column"} spacing={4} py={2} px={2}>
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
                {props.reservation.length !== 0 ? (
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
                        {props.reservation.map((b, index) => {
                            return (
                                <Grid item key={index}>
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
            <Grid item xs={12}>
                <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                        {props.canBookOffice ?
                            props.reservation.length !== 0 ? (
                                <Button variant={"contained"} onClick={() => props.handleOpenOffice(props.day, props.reservation)}>{t('app:dashboard:desk.modify')}</Button>
                            ) : (
                                <Button variant={"contained"} onClick={() => props.handleOpenOffice(props.day, props.reservation)}>{t('app:dashboard:desk.book')}</Button>
                            )
                        :(
                            <Button variant={"contained"} disabled>{t('app:dashboard:desk.noBooking')}</Button>
                        )}

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Office;