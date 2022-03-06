import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as React from "react";
import useAuth from "../../../context/auth/AuthHelper";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import OfficeModal from "./OfficeBooking/OfficeModal";
import moment from "moment";

function BookingElement(props){

    const context = useAuth();
    const { t } = useTranslation();
    const [openOffice, setOpenOffice] = useState(false);

    const handleOpenOffice = () => {
        setOpenOffice(true);
    }
    const handleCloseOffice = async (update) => {
        setOpenOffice(false);
    }


    const reservationString = () => {
        if(props.data.reservation.length !== 0 ){
            return props.data.reservation[0].name +" | "+ props.data.reservation[props.data.reservation.length-1].name;
        }else{
            return t('app:dashboard:no_reservation')
        }
    }

    return(
        <div style={{ width: '100%', height: '100%' }}>
            {props.data.morning === 1 &&
                <OfficeModal open={openOffice} handleClose={(update) => handleCloseOffice(update)} handleOpen={handleOpenOffice} day={moment(props.data.day, 'YYYY-MM-DD').format('YYYY-MM-DD')} />
            }
            {context.user.company.activeOfficeHandler &&
            <Grid item xs={12} style={{width:'100%', textAlign:"center"}}>
                <Button onClick={() => handleOpenOffice()} disabled={props.data.morning !== 1 || props.data.past} style={{textOverflow: 'ellipsis' ,fontSize: 12, textTransform:'none', width:'100%', textAlign:"center", color: props.data.morning !== 1 ? 'transparent' : props.data.past ? '#D3D3D3' : 'inherit'}}>
                    {props.data.morning === 1 && reservationString()}
                    {props.data.morning !== 1 && reservationString()}
                </Button>
            </Grid>
            }
        </div>
    )
}
export default BookingElement;