import Draggable from "react-draggable";
import {Avatar} from "@mui/material";
import {useState} from "react";
import User from '../../../assets/images/example/default.png';
import Tooltip from '@mui/material/Tooltip';
import SeatInfo from "./SeatInfo";

export default function Seat(props){
    const [x, setX] = useState(props.data.x);
    const [y, setY] = useState(props.data.y);

    const handleDrag = (e, d) => {
        setX(d.x);
        setY(d.y);
        let item = props.data;
        item.x = d.x;
        item.y = d.y;
        props.select(item);
    }

    const handleClick = (item) => {
        item.x = x;
        item.y = y;
        props.select(item);
        console.log(item);
    }

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    return(
        <Draggable
        onDrag={handleDrag}
        onMouseDown={() => handleClick(props.data)}
        grid={[5,5]}
        position={{x:x, y:y}}
        >
            <div style={{display: props.data.visible ? 'inline-block' : 'none', position:'absolute'}}>
                <Tooltip title={<SeatInfo seat={props.data}/>}>
                    <Avatar sx={{width:props.size, height:props.size}} style={{fontSize:10, cursor:'pointer'}} onDragStart={preventDragHandler} alt={"user"} src={User}/>
                </Tooltip>
            </div>
        </Draggable>
    )
}