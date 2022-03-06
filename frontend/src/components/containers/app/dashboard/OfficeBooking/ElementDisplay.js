import Grid from "@mui/material/Grid";
import ElementSelection from "./ElementSelection";
import Seat from "./Seat";
import useAuth from "../../../../context/auth/AuthHelper";


export default function ElementDisplay(props) {

    let context = useAuth();

    if (props.data[0].type === 3) {
        const room = props.booking.find((x) => x.type === 1);
        if(room === undefined){
            return (<div/>)
        }
        return (
            <div style={{width: '500px', height: '500px', position:'relative', backgroundImage: `url(${room.backgroundPath})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'contain'}}>
                {props.data.map((s, i) => (
                    <Seat data={s} size={room.size} booking={props.booking} key={i} handleSelection={(item) => props.handleSelection(item)} isSelected={props.booking[props.booking.length-1].id === s.id}/>
                ))}
            </div>
        )
    } else {
        return (
            <div style={{width: '500px', height: '500px'}}>
                <Grid container justifyContent={"space-evenly"} alignItems={"center"} style={{width:'100%', height:'100%', overflow:'scroll'}}>
                    {props.data.map((e, i) => {
                        return (
                            <ElementSelection data={e} isSelected={props.validateBooking && props.booking[props.booking.length-1].id === e.id } key={i} handleSelection={(item) => props.handleSelection(item)}/>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}