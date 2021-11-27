import {Avatar} from "@mui/material";
import Google from "../../../assets/icons/google.png"

function GoogleIcon(props){
    return(
        <Avatar src={Google} {...props} sx={{width: 24, height:24}}/>
    )
}

export default GoogleIcon;