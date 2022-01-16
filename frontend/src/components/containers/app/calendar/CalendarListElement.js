import {
    Accordion, AccordionDetails, AccordionSummary,
    Avatar,
    Collapse,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import {useState} from "react";
import List from "@mui/material/List";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import OffIcon from "../../../molecules/icons/OffIcon";
import Grid from "@mui/material/Grid";
import example4 from "../../../../assets/images/example/4.jpg";
import example5 from "../../../../assets/images/example/5.jpg";
import * as React from "react";
import Typography from "@mui/material/Typography";

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
            case 4:
                return "Off"
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
                    <AwayIcon/>
                )
            case 4:
                return(
                    <OffIcon/>
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
            case 4:
                return '#FFA800'
        }
    }

    const getBackColor = () => {
        switch(props.type){
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

    if(props.data.length === 0){
        return (<div/>)
    }else {

        return (
            <div style={{marginTop: '5%', marginBottom:'5%'}}>
                <Accordion style={{boxShadow:'none'}} disableGutters elevation={0}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{paddingLeft: 0, paddingRight: 0, display:'flex', flexDirection:'column'}}
                        onClick={handleClick}
                    >
                        <Grid container direction={"column"} spacing={1} style={{flex:1}}>
                            <Grid item xs={12} style={{flex:1}}>
                                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                                    <Grid item xs={3}>
                                        <Avatar sx={{ width: 36, height: 36 }} style={{
                                            backgroundColor: getBackColor()
                                        }}>
                                            {getIcon()}
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography fontSize={15} fontWeight={600} style={{color: getColor()}}>{getText()}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        {open ? <ExpandLess/> : <ExpandMore />}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} hidden={open} style={{flex:1}}>
                                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={example4} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src={example5} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src={example5} />
                                    </Grid>
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F'}}>
                                            +2
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List component="div" disablePadding>
                            {props.data.map((item, i) => {
                                return (
                                    <ListItem key={i}>
                                        <ListItemAvatar style={{minWidth:'20px'}}>
                                            <Avatar sx={{width:36, height:36}} src={example5}/>
                                        </ListItemAvatar>
                                        <ListItemText primaryTypographyProps={{style:{fontSize: 14, whiteSpace: 'nowrap', overflow:'hidden', textOverflow: 'ellipsis', paddingLeft:5}}} primary={`${item.fullName}`} secondary={getMidDayText(item)} secondaryTypographyProps={{style:{fontSize: 10, paddingLeft:5}}}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default CalendarListElement;