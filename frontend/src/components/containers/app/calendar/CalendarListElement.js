import {Avatar, Collapse, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import PlaneTakeOffIcon from "../../../molecules/icons/PlaneTakeOffIcon";
import {useState} from "react";
import List from "@mui/material/List";
import {StarBorder} from "@mui/icons-material";

function CalendarListElement(props){

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const getMidDayText = (item) => {
        if(item.morning === props.type){
            return "Le matin"
        }else{
            return "L'après-midi"
        }
    }

    const getText = () => {
        switch(props.type){
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
        switch(props.type){
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
        switch(props.type){
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

    if(props.data.length === 0){
        return (<div/>)
    }else {

        return (
            <div style={{marginTop: '5%'}}>
                <ListItemButton onClick={() => handleClick()} style={{
                    paddingLeft: 0, borderWidth: 2, borderColor: getColor(), borderStyle: 'solid', borderRadius: '15px',
                    borderBottomLeftRadius: open ? '0px' : '15px',
                    borderBottomRightRadius: open ? '0px' : '15px',
                    borderBottomStyle: open ? 'none' : 'solid'
                }}>
                    <ListItemIcon style={{minWidth: '10%'}}>
                        {getIcon()}
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{style:{fontSize: 14}}} primary={getText()}/>
                    <ListItemText primary={`${props.data.length}/${props.total}`} primaryTypographyProps={{
                        textAlign: 'center',
                        style: {backgroundColor: getColor(), padding: 5, borderRadius: '25px', color: 'white', fontSize: 12}
                    }}/>
                </ListItemButton>
                <Collapse in={open} timeout="auto">
                    <List component="div" disablePadding style={{
                        borderWidth: 2, borderColor: getColor(), borderRadius: '15px',
                        borderTopLeftRadius: open ? '0px' : '15px',
                        borderTopRightRadius: open ? '0px' : '15px',
                        borderTopStyle: open ? 'none' : 'solid',
                        borderTopWidth: 0,
                        borderStyle: open ? 'solid' : 'none'
                    }}>
                        {props.data.map((item, i) => {
                            return (
                                <ListItem sx={{pl: 4}} key={i}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarBorder/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primaryTypographyProps={{style:{fontSize: 14}}} primary={`${item.fullName}`} secondary={getMidDayText(item)} secondaryTypographyProps={{style:{fontSize: 10}}}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </Collapse>
            </div>
        )
    }
}

export default CalendarListElement;