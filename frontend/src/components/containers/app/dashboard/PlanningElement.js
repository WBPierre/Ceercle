import {Avatar, Fab, ListItemIcon, ListItemText, Menu, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import moment from "moment";
import { useTranslation } from "react-i18next";
import OffIcon from "../../../molecules/icons/OffIcon";
import useAuth from "../../../context/auth/AuthHelper";
import OfficeModal from "./OfficeModal";
import * as React from "react";
import BookingService from "../../../../services/app/booking.service";

function PlanningElement(props) {

    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const context = useAuth();

    const handleClick = (event) => {
        if (!props.data.past) {
            setAnchorEl(event.currentTarget);
        }
    };

    const modifyChoice = (name) => {
        props.modify(props.data.day, name)
        handleClose();
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getActiveBGColor = () => {
        switch(props.data.morning){
            case 0: return "#F2F2F2";
            case 1: return "#F7FEF5"
            case 2: return "#F3F7FE"
            case 3: return "#FAF6FF"
            case 4: return "#FEFAF1"
        }
    }


    const getIcon = () => {
        switch(props.data.morning){
            case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
            case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
            case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
            case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
            case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
        }
    }

    const getTextColor = () => {
        switch(props.data.morning){
            case 0: return "#d32f2f";
            case 1: return "#008946"
            case 2: return "#0070C0"
            case 3: return "#7030A0"
            case 4: return "#FFA800"
        }
    }

    const getBgColor = () => {
        switch(props.data.morning){
            case 0: return "#D3D3D3";
            case 1: return "#C3E4B6"
            case 2: return "#DAEFFA"
            case 3: return "#E6DCF1"
            case 4: return "#FBE7B4"
        }
    }

    const getText = () => {
        switch(props.data.morning){
            case 0: return props.data.past ? t('app:statuses:undeclared') : t('app:statuses:to_be_defined');
            case 1: return t('app:statuses:office')
            case 2: return t('app:statuses:home_working')
            case 3: return t('app:statuses:on_the_go')
            case 4: return t('app:statuses:off')
        }
    }

    const reservationString = () => {
        if(props.data.reservation.length !== 0 ){
            return props.data.reservation[0].name +" | "+ props.data.reservation[props.data.reservation.length-1].name;
        }else{
            return t('app:dashboard:no_reservation')
        }
    }

    const [openOffice, setOpenOffice] = useState(false);

    const handleOpenOffice = () => {
        setOpenOffice(true);
    }
    const handleCloseOffice = async (update) => {
        if(update){
            props.updateOffice();
        }
        setOpenOffice(false);
    }

    return(
        <div style={{ width: '100%', height: '100%' }}>
            {props.data.morning === 1 &&
                <OfficeModal open={openOffice} handleClose={(update) => handleCloseOffice(update)} handleOpen={handleOpenOffice} day={moment(props.data.day, 'YYYY-MM-DD').format('YYYY-MM-DD')} />
            }
            <Grid container direction={"column"} style={{position:'relative'}}>
                <Grid item xs={12}>
                    <Grid item xs={12} style={{backgroundColor: props.data.current ? getActiveBGColor() : ''}}>
                        <Typography textAlign={"center"} style={{ color: props.data.current ? getTextColor() : '#C00000' }}
                                    fontSize={20}
                                    fontWeight={props.data.current ? 600 : 500}>{props.day}</Typography>
                        <Typography textAlign={"center"} style={{ color: props.data.current ? getTextColor() : '#002060' }}
                                    fontSize={20}
                                    fontWeight={props.data.current ? 600 : 500}>{moment(props.data.day, 'YYYY-MM-DD').date()}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.data.current ? getActiveBGColor() : '',
                        cursor: !props.data.past ? 'pointer' : 'default',
                        flex:1,
                        width:'100%'
                    }} id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                        style={{
                                            border: props.data.current ? `3px solid ${getTextColor()}` : 'none',
                                            backgroundColor: props.data.past ? '#D3D3D3' : getBgColor()
                                        }}>
                                    {getIcon()}
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} mb={1} style={{width: '100%' }}>
                                <Typography textAlign={"center"}
                                            style={{ color: props.data.past ? '#D3D3D3' : getTextColor(), width: '100%' }}
                                            fontSize={props.data.current ? 18 : 16}
                                            fontWeight={props.data.current ? 600 : 500}>{getText()}</Typography>
                            </Grid>
                        </Grid>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem style={{display:props.data.morning === 0 ? 'none' : 'flex'}} onClick={() => modifyChoice(0)}>
                            <ListItemIcon>
                                <ToDefineIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{display:props.data.morning === 1 ? 'none' : 'flex'}}  onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{display:props.data.morning === 2 ? 'none' : 'flex'}} onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{display:props.data.morning === 3 ? 'none' : 'flex'}} onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <AwayIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{display:props.data.morning === 4 ? 'none' : 'flex'}} onClick={() => modifyChoice(4)}>
                            <ListItemIcon>
                                <OffIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:off')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </Grid>
                {context.user.company.activeOfficeHandler &&
                    <Grid item xs={12} style={{width:'100%', textAlign:"center"}}>
                        <Button onClick={() => handleOpenOffice()} disabled={props.data.morning !== 1 || props.data.past} style={{textOverflow: 'ellipsis' ,fontSize: 12, textTransform:'none', width:'100%', textAlign:"center", color: props.data.morning !== 1 ? 'transparent' : props.data.past ? '#D3D3D3' : 'inherit'}}>
                            {props.data.morning === 1 && reservationString()}
                            {props.data.morning !== 1 && reservationString()}
                        </Button>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default PlanningElement;