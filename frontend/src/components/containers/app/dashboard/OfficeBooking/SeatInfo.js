import {Divider, Grid, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import List from '@mui/material/List';
import {useTranslation} from "react-i18next";
import useAuth from "../../../../context/auth/AuthHelper";


export default function SeatInfo(props){
    const { t } = useTranslation();
    const context = useAuth();

    return(
        <List>
            <ListItem disablePadding>
                <ListItemText primary={`${t('app:dashboard:desk.desk')} ${props.seat.name}`} />
            </ListItem>
            <Divider color={"white"}/>
            {props.seat.users.length !== 0 && props.shouldDisplay ? (
                <ListItem disablePadding>
                    <ListItemText primary={`Status : ${t('app:dashboard:desk.occupied')}`} />
                </ListItem>
            ):(
                <ListItem disablePadding>
                    <ListItemText primary={`Status : ${t('app:dashboard:desk.free_desk')}`} />
                </ListItem>
            )}
            {props.seat.users.length !== 0 && props.shouldDisplay && (
                <ListItem disablePadding>
                    <ListItemText primary={`${t('app:dashboard:desk.by')} :  ${props.seat.users[0].firstName} ${props.seat.users[0].lastName}`} />
                </ListItem>
            )}
        </List>
    )
}