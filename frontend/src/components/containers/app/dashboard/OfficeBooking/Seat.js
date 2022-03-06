import Draggable from "react-draggable";
import {Avatar, Tooltip} from "@mui/material";
import SeatInfo from "./SeatInfo";
import useAuth from "../../../../context/auth/AuthHelper";
import ProfileDefault from "../../../../../assets/images/example/default.png";

export default function Seat(props){

    let context = useAuth();

    const handleClick = (item) => {
        if(item.users.length === 0){
            props.handleSelection(item);
        }
    }

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    const testIfUserShouldBeDisplay = () => {
        if(props.booking[props.booking.length -1].type === 3){
            if(props.data.users.length !==0) {
                if (props.data.users[0].firstName === context.user.firstName && props.data.users[0].lastName === context.user.lastName) {
                    if (props.booking[props.booking.length - 1].id !== props.data.id) {
                        return false;
                    }
                }
            }
        }
        return true
    }

    return(
        <Draggable
            onMouseDown={() => handleClick(props.data)}
            grid={[5,5]}
            position={{x:props.data.x, y:props.data.y}}
        >
            <div style={{display: 'inline-block', position:'absolute'}}>
                <Tooltip title={<SeatInfo seat={props.data} isSelected={props.isSelected}/>}>
                    {props.isSelected ? (
                        <Avatar sx={{width:props.size, height:props.size}} style={{fontSize:10, cursor:'pointer'}} onDragStart={preventDragHandler} alt={`${context.user.firstName} ${context.user.lastName}`} src={context.user.profilePicturePath === null ? ProfileDefault : context.user.profilePicturePath} />
                    ):(
                        props.data.users.length !== 0 && testIfUserShouldBeDisplay()  ? (
                            <Avatar sx={{width:props.size, height:props.size}} style={{fontSize:10, cursor:'pointer'}} onDragStart={preventDragHandler} alt={`${props.data.users[0].firstName} ${props.data.users[0].lastName}`} src={props.data.users[0].profilePicturePath}/>
                        ):(
                            <Avatar sx={{width:props.size, height:props.size}} style={{fontSize:10, cursor:'pointer'}} onDragStart={preventDragHandler} alt={"free desk"} />
                        )
                    )}

                </Tooltip>
            </div>
        </Draggable>
    )
}