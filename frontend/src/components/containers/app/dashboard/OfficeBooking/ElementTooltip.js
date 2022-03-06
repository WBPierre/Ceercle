import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ProfileDefault from "../../../../../assets/images/example/default.png";


export default function ElementTooltip(props){
    return(
        <div>
            <List disablePadding>
                {props.users.map((u, i) => {
                    if(i < 10){
                        return(
                            <ListItem key={i} style={{padding: '2px'}}>
                                <ListItemAvatar>
                                    <Avatar sx={{width:32, height:32}} src={u.profilePicturePath === null ? ProfileDefault : u.profilePicturePath}/>
                                </ListItemAvatar>
                                <ListItemText primaryTypographyProps={{fontSize:14}} primary={`${u.firstName} ${u.lastName}`} />
                            </ListItem>
                        )
                    }
                })}
                {props.users.length > 10 && (
                    <ListItem>
                        <ListItemText primaryTypographyProps={{fontSize:12, textAlign:"center"}} primary={`...`} />
                    </ListItem>
                )}
            </List>
        </div>
    )
}
