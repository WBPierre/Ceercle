import {Avatar} from "@mui/material";
import Slack from "../../../assets/icons/slack.png"

function SlackIcon(props){
    return(
        <Avatar src={Slack} {...props} sx={{width: 24, height:24}}/>
    )
}

export default SlackIcon;