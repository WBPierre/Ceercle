import { Avatar, Divider, Fab, ListItemIcon, ListItemText, Menu, Switch, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import moment from "moment";
import { useTranslation } from "react-i18next";
import OffIcon from "../../../molecules/icons/OffIcon";
import useAuth from "../../../context/auth/AuthHelper";
import * as React from "react";
import PlanningButton from "./PlanningButton";

function PlanningElement(props) {

    const { t } = useTranslation();
    const [half, setHalf] = useState(false);
    const context = useAuth();

    const handleChange = (e) => {
        setHalf(e.target.checked);
    }

    useEffect(() => {
        if (props.data.morning !== props.data.afternoon) {
            setHalf(true);
        } else {
            setHalf(false);
        }
    }, [props.data])



    const modifyChoice = (name, half, order) => {
        props.modify(props.data.day, name, half, order)
    }


    const getTextColor = () => {
        switch (props.data.morning) {
            case 0: return "#d32f2f";
            case 1: return "#008946"
            case 2: return "#0070C0"
            case 3: return "#7030A0"
            case 4: return "#FFA800"
        }
    }

    const reservationString = () => {
        if (props.data.reservation.length !== 0) {
            return props.data.reservation[0].name + " | " + props.data.reservation[props.data.reservation.length - 1].name;
        } else {
            return t('app:dashboard:no_reservation')
        }
    }

    const openOffice = () => {
        if (props.data.morning === props.data.afternoon) {
            props.openOffice(moment(props.data.day).format('YYYY-MM-DD'), props.data.reservation, 0)

        }
        if (props.data.morning === 1) {
            props.openOffice(moment(props.data.day).format('YYYY-MM-DD'), props.data.reservation, 1)
        } else {
            props.openOffice(moment(props.data.day).format('YYYY-MM-DD'), props.data.reservation, 2)
        }
    }


    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Grid container direction={"column"} style={{ position: 'relative' }}>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Typography textAlign={"center"} style={{ color: props.data.current ? getTextColor() : '#C00000' }}
                            fontSize={20}
                            fontWeight={props.data.current ? 600 : 500}>{props.day}</Typography>
                        <Typography textAlign={"center"} style={{ color: props.data.current ? getTextColor() : '#002060' }}
                            fontSize={20}
                            fontWeight={props.data.current ? 600 : 500}>{moment(props.data.day, 'YYYY-MM-DD').date()}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%' }}>
                    {half ? (
                        <Grid container direction={"row"} sx={{ width: '100%' }}>
                            <Grid item xs={6} sx={{ width: '50%' }}>
                                <PlanningButton order={0} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange} />
                            </Grid>
                            <Grid item xs={6} sx={{ width: '50%' }}>
                                <PlanningButton order={1} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange} />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid item xs={12} sx={{ width: '100%' }}>
                            <PlanningButton order={0} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange} />
                        </Grid>
                    )}
                </Grid>
                {context.user.company.activeOfficeHandler &&
                    <Grid item xs={12} style={{ width: '100%', textAlign: "center" }}>
                        <Button onClick={() => openOffice()} disabled={(props.data.morning !== 1 && props.data.afternoon !== 1) || props.data.past} style={{ textOverflow: 'ellipsis', fontSize: 12, textTransform: 'none', width: '100%', textAlign: "center", color: (props.data.morning !== 1 && props.data.afternoon !== 1) ? 'transparent' : props.data.past ? '#D3D3D3' : 'inherit' }}>
                            {(props.data.morning === 1 || props.data.afternoon === 1) && reservationString()}
                            {(props.data.morning !== 1 && props.data.afternoon !== 1) && reservationString()}
                        </Button>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default PlanningElement;
