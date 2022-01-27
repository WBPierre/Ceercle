import { Avatar, ListItemIcon, ListItemText, Menu } from "@mui/material";
import { useTranslation } from "react-i18next";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TimeService from "../../../../services/app/time.service";
import Button from "@mui/material/Button";
import OffIcon from "../../../molecules/icons/OffIcon";
import { useSnackbar } from "notistack";

function CalendarUser(props) {

    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { enqueueSnackbar } = useSnackbar();


    const getText = () => {
        switch (props.data.morning) {
            case 0:
                return t('app:statuses:undeclared')
            case 1:
                return t('app:statuses:office')
            case 2:
                return t('app:statuses:home_working')
            case 3:
                return t('app:statuses:on_the_go')
        }
    }

    const getIcon = () => {
        switch (props.data.morning) {
            case 0:
                return (
                    <ToDefineIcon />
                )
            case 1:
                return (
                    <OfficeIcon />

                )
            case 2:
                return (
                    <ManWorkingIcon />
                )
            case 3:
                return (
                    <AwayIcon />
                )
            case 4:
                return (
                    <OffIcon />
                )
        }
    }

    const getColor = () => {
        switch (props.data.morning) {
            case 0:
                return '#D3D3D3'
            case 1:
                return '#C3E4B6'
            case 2:
                return '#DAEFFA'
            case 3:
                return '#E6DCF1'
            case 4:
                return '#FBE7B4'
        }
    }

    const modifyChoice = async (name) => {
        handleClose();
        await declareDay(props.data.day, name)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        if (!props.data.past) {
            setAnchorEl(event.currentTarget);
        }
    };

    const declareDay = async (day, choice) => {
        const resources = {
            day: day,
            morning: choice,
            afternoon: choice
        }
        await TimeService.setTimeSheet(resources);
        enqueueSnackbar(t('app:calendar:snackbar_success'), {
            variant: 'success'
        });
        await props.updateData();
    }

    const getBorder = () => {
        if (!props.data.current) {
            return 'none'
        } else {
            switch (props.data.morning) {
                case 0:
                    return '3px solid #D3D3D3'
                case 1:
                    return '3px solid #95E59A'
                case 2:
                    return '3px solid #8BCCEE'
                case 3:
                    return '3px solid #C7B3DA'
                case 4:
                    return '3px solid #FFA800'
            }
        }
    }

    return (
        <div>
            <Button style={{
                backgroundColor: 'transparent',
                cursor: !props.data.past ? 'pointer' : 'default',
                width: '100%'
            }} disableRipple={true} onClick={handleClick} >
                <Avatar sx={{ width: 75, height: 75 }} style={{
                    border: getBorder(),
                    backgroundColor: getColor()
                }}>
                    {getIcon()}
                </Avatar>
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
                {props.data.morning !== 0 &&
                    <MenuItem onClick={() => modifyChoice(0)}>
                        <ListItemIcon>
                            <ToDefineIcon />
                        </ListItemIcon>
                        <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 1 &&
                    <MenuItem onClick={() => modifyChoice(1)}>
                        <ListItemIcon>
                            <OfficeIcon />
                        </ListItemIcon>
                        <ListItemText>{t('app:statuses:office')}</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 2 &&
                    <MenuItem onClick={() => modifyChoice(2)}>
                        <ListItemIcon>
                            <ManWorkingIcon />
                        </ListItemIcon>
                        <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 3 &&
                    <MenuItem onClick={() => modifyChoice(3)}>
                        <ListItemIcon>
                            <AwayIcon />
                        </ListItemIcon>
                        <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 4 &&
                    <MenuItem onClick={() => modifyChoice(4)}>
                        <ListItemIcon>
                            <OffIcon />
                        </ListItemIcon>
                        <ListItemText>{t('app:statuses:off')}</ListItemText>
                    </MenuItem>
                }
            </Menu>
        </div>
    )
}

export default CalendarUser;