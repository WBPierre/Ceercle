import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import OffIcon from "../../../molecules/icons/OffIcon";
import Button from "@mui/material/Button";
import {Avatar, ListItemIcon, ListItemText, Menu, Switch, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Grid from "@mui/material/Grid";


function CalendarUserButton(props){
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [half, setHalf] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (!props.data.past) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const modifyChoice = (name) => {
        props.modifyChoice(name, half, props.order);
        handleClose();
    }

    useEffect(() => {
        setHalf(props.half);
    }, [props.half])


    const getIcon = () => {
        if(half) {
            if(props.order === 0){
                switch(props.data.morning){
                    case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                    case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                    case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                    case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                    case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
                }
            }else{
                switch(props.data.afternoon){
                    case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                    case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                    case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                    case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                    case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
                }
            }
        }else{
            switch(props.data.morning){
                case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
            }
        }
    }

    const getTextColor = () => {
        if(props.order === 0){
            switch(props.data.morning){
                case 0: return "#d32f2f";
                case 1: return "#008946"
                case 2: return "#0070C0"
                case 3: return "#7030A0"
                case 4: return "#FFA800"
            }
        }else{
            switch(props.data.afternoon){
                case 0: return "#d32f2f";
                case 1: return "#008946"
                case 2: return "#0070C0"
                case 3: return "#7030A0"
                case 4: return "#FFA800"
            }
        }
    }

    const getBgColor = () => {
        if(props.order === 0){
            switch(props.data.morning){
                case 0: return "#D3D3D3";
                case 1: return "#C3E4B6"
                case 2: return "#DAEFFA"
                case 3: return "#E6DCF1"
                case 4: return "#FBE7B4"
            }
        }else{
            switch(props.data.afternoon){
                case 0: return "#D3D3D3";
                case 1: return "#C3E4B6"
                case 2: return "#DAEFFA"
                case 3: return "#E6DCF1"
                case 4: return "#FBE7B4"
            }
        }
    }

    const handleChange = async (e) => {
        setHalf(e.target.checked);
        if(!e.target.checked){
            props.modifyChoice(props.data.morning, false, 0);
        }
        props.changeHalf(e);
        handleClose();
    }

    const shouldDisplayOption = (choice) => {
        if(half){
            if(props.order === 0){
                if(choice === props.data.morning){
                    return 'none';
                }else{
                    return 'flex';
                }
            } else {
                if(choice === props.data.afternoon){
                    return 'none';
                }else{
                    return 'flex';
                }
            }
        }else{
            if(choice === props.data.morning){
                return 'none';
            }else{
                return 'flex';
            }
        }
    }

    return(
        <div style={{height:'100%', width:'100%'}}>
            <Button style={{
                backgroundColor: 'transparent',
                cursor: !props.data.past ? 'pointer' : 'default',
                textTransform: 'none',
                flex:1,
                width: '100%'
            }} disableRipple={true} id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                <Grid container direction={"column"} spacing={0}>
                    <Grid item>
                        <Typography textAlign={"center"} fontSize={10} style={{color: props.half ? '#b4b4b4' : 'transparent'}}>{props.half ? props.order === 0 ? t('generic:morning') : t('generic:afternoon') : 'UNDEFINED'}</Typography>
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar sx={{ width: 75, height: 75 }} style={{
                            border: props.data.current ? `3px solid ${getTextColor()}` : 'none',
                            backgroundColor: props.data.past ? '#D3D3D3' : getBgColor()
                        }}>
                            {getIcon()}
                        </Avatar>
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
                <MenuItem key={-1} disableRipple={true} disableTouchRipple style={{backgroundColor:'transparent', cursor:'default'}}>
                    <ListItemText primaryTypographyProps={{fontSize:12 }}>{t('generic:half')}</ListItemText>
                    <Switch aria-label={'Switch half days'} checked={half} onChange={handleChange} value={half}/>
                </MenuItem>
                <MenuItem key={0} style={{display:shouldDisplayOption(0)}} onClick={() => modifyChoice(0)}>
                    <ListItemIcon>
                        <ToDefineIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                </MenuItem>
                <MenuItem key={1} style={{display:shouldDisplayOption(1)}}  onClick={() => modifyChoice(1)}>
                    <ListItemIcon>
                        <OfficeIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:office')}</ListItemText>
                </MenuItem>
                <MenuItem key={2} style={{display:shouldDisplayOption(2)}} onClick={() => modifyChoice(2)}>
                    <ListItemIcon>
                        <ManWorkingIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                </MenuItem>
                <MenuItem key={3} style={{display:shouldDisplayOption(3)}} onClick={() => modifyChoice(3)}>
                    <ListItemIcon>
                        <AwayIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                </MenuItem>
                <MenuItem key={4} style={{display:shouldDisplayOption(4)}} onClick={() => modifyChoice(4)}>
                    <ListItemIcon>
                        <OffIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:off')}</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default CalendarUserButton;