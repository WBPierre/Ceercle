import Typography from "@mui/material/Typography";
import * as React from "react";
import {useTranslation} from "react-i18next";
import Grid from "@mui/material/Grid";
import {Button, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import List from "@mui/material/List";
import CancelIcon from '@mui/icons-material/Cancel';

export default function BookingInformation(props){
    const { t } = useTranslation();

    const getNextText = () => {
        switch(props.displayData[0].type){
            case 'office':
                return t('app:dashboard:desk.type.office')
            case 0:
                return t('app:dashboard:desk.type.0')
            case 1:
                return t('app:dashboard:desk.type.1')
            case 2:
                return t('app:dashboard:desk.type.2')
        }
    }


    return(
        <div style={{height:'100%', display:"flex"}}>
            <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"space-between"}>
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <List>
                            {props.booking.map((b, i) => {
                                if(b.type === 3){
                                    return(
                                        <ListItem disablePadding key={i}>
                                            <ListItemIcon style={{minWidth: "30px"}}>
                                                <CheckBoxIcon style={{color:'green'}} />
                                            </ListItemIcon>
                                            <ListItemText primaryTypographyProps={{fontSize:18, fontWeight:500}} primary={`${t('app:dashboard:desk.desk')} ${b.name}`} />
                                            <ListItemIcon style={{minWidth:'0px', cursor:'pointer'}} onClick={() => props.remove(b)}>
                                                <CancelIcon style={{color:'grey'}} />
                                            </ListItemIcon>
                                        </ListItem>
                                    )
                                }else{
                                    return(
                                        <ListItem disablePadding key={i}>
                                            <ListItemIcon style={{minWidth: "30px"}}>
                                                <CheckBoxIcon style={{color:'green'}} />
                                            </ListItemIcon>
                                            <ListItemText primaryTypographyProps={{fontSize:18, fontWeight:500}} primary={`${b.name}`} />
                                            <ListItemIcon style={{minWidth:'0px', cursor:'pointer'}} onClick={() => props.remove(b)}>
                                                <CancelIcon style={{color:'grey'}} />
                                            </ListItemIcon>
                                        </ListItem>
                                    )
                                }

                            })}
                            </List>
                        </Grid>

                        {!props.validateBooking && (
                            <Grid item>
                                <Typography>{getNextText()}</Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                {props.validateBooking && (
                    <Grid item style={{marginBottom:'20%'}}>
                        <Button onClick={() => props.confirmBooking()} fullWidth variant={"contained"} color={"secondary"} style={{borderRadius:'25px', textTransform:'none'}}>{t('app:dashboard:desk.confirm')}</Button>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}