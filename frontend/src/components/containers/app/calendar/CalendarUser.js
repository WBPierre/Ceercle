import {Avatar, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu} from "@mui/material";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import PlaneTakeOffIcon from "../../../molecules/icons/PlaneTakeOffIcon";
import example1 from "../../../../assets/images/example/1.jpg";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import TimeService from "../../../../services/app/time.service";

function CalendarUser(props){

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const getText = () => {
        switch(props.data.morning){
            case 0:
                return "Non déclaré"
            case 1:
                return "Au bureau"
            case 2:
                return "Télétravail"
            case 3:
                return "Déplacement"
        }
    }

    const getIcon = () => {
        switch(props.data.morning){
            case 0:
                return (
                    <ToDefineIcon/>
                )
            case 1:
                return(
                    <OfficeIcon/>

                )
            case 2:
                return(
                    <ManWorkingIcon/>
                )
            case 3:
                return(
                    <PlaneTakeOffIcon/>
                )
        }
    }

    const getColor = () => {
        switch(props.data.morning){
            case 0:
                return '#D3D3D3'
            case 1:
                return '#95E59A'
            case 2:
                return '#8BCCEE'
            case 3:
                return '#C7B3DA'
        }
    }

    const modifyChoice = async (name) => {
        await declareDay(props.data.day, name)
        handleClose();
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
        await props.updateData();
    }

    return(
        <div style={{width:'95%', paddingLeft: '2.5%'}}>
            <ListItemButton onClick={handleClick} style={{
                paddingLeft: 0, borderWidth: 2, borderColor: getColor(), borderStyle: 'solid', borderRadius: '15px',
                backgroundColor: !props.data.past ? '' : 'transparent',
                cursor: !props.data.past ? 'pointer' : 'default'
            }}>
                <ListItemIcon style={{minWidth: '10%'}}>
                    {getIcon()}
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{style:{fontSize: 14}}} primary={getText()}/>
                <ListItemAvatar style={{minWidth: '10%'}}>
                    <Avatar alt="Trevor Henderson" src={example1}/>
                </ListItemAvatar>
            </ListItemButton>
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
                            <ToDefineIcon/>
                        </ListItemIcon>
                        <ListItemText>A définir</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 1 &&
                    <MenuItem onClick={() => modifyChoice(1)}>
                        <ListItemIcon>
                            <OfficeIcon/>
                        </ListItemIcon>
                        <ListItemText>Au bureau</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 2 &&
                    <MenuItem onClick={() => modifyChoice(2)}>
                        <ListItemIcon>
                            <ManWorkingIcon/>
                        </ListItemIcon>
                        <ListItemText>Télétravail</ListItemText>
                    </MenuItem>
                }
                {props.data.morning !== 3 &&
                    <MenuItem onClick={() => modifyChoice(3)}>
                        <ListItemIcon>
                            <PlaneTakeOffIcon/>
                        </ListItemIcon>
                        <ListItemText>Déplacement</ListItemText>
                    </MenuItem>
                }
            </Menu>
        </div>
    )
}

export default CalendarUser;