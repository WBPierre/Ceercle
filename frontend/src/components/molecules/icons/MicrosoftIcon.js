import {Avatar} from "@mui/material";
import Microsoft from "../../../assets/icons/microsoft.png"

function MicrosoftIcon(props){
    return(
        <Avatar src={Microsoft} {...props} sx={{width: 24, height:24}}/>
    )
}

export default MicrosoftIcon;