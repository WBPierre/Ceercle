import {
    Accordion, AccordionDetails,
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
import ProfileDefault from "../../../../assets/images/example/default.png";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAccordionSummary from '@mui/material/AccordionSummary';

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    '.MuiAccordionSummary-content': {
        width:'100%'
    },
}));

function CalendarListElement(props){

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const getMidDayText = (item) => {
        return ""
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
                    <ToDefineIcon sx={{height:30, width:30}}/>
                )
            case 1:
                return(
                    <OfficeIcon sx={{height:30, width:30}}/>

                )
            case 2:
                return(
                    <ManWorkingIcon sx={{height:30, width:30}}/>
                )
            case 3:
                return(
                    <AwayIcon sx={{height:30, width:30}}/>
                )
            case 4:
                return(
                    <OffIcon sx={{height:30, width:30}}/>
                )
        }
    }

    const getColor = () => {
        switch(props.type){
            case 0:
                return '#D3D3D3'
            case 1:
                return '#008946'
            case 2:
                return '#0070C0'
            case 3:
                return '#7030A0'
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
                                <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={1}>
                                    <Grid item xs={3}>
                                        <Avatar sx={{ width: 36, height: 36 }} style={{
                                            backgroundColor: getBackColor()
                                        }}>
                                            {getIcon()}
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography fontSize={14} fontWeight={600} style={{minWidth:'30px',color: getColor()}}>{getText()}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        {open ? <ExpandLess/> : <ExpandMore />}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} hidden={open} style={{flex:1}}>
                                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                                    {props.data.map((item, i) => {
                                        if(i < 3){
                                            return (
                                                <Grid item>
                                                    <Avatar sx={{ width: 24, height: 24 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                                </Grid>
                                            )
                                        }
                                    })}
                                    {props.data.length > 3 && (
                                        <Grid item>
                                            <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                                +{props.data.length-3}
                                            </Avatar>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails  style={{padding:0, paddingLeft:'5px'}}>
                        <List component="div" disablePadding >
                            {props.data.map((item, i) => {
                                return (
                                    <ListItem key={i} style={{paddingRight:0}}>
                                        <ListItemAvatar style={{minWidth:'20px'}}>
                                            <Avatar sx={{width:30, height:30}} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath}/>
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