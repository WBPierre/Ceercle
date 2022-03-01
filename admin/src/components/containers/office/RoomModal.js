import Box from "@mui/material/Box";
import {Button, FormControl, InputLabel, Modal, Select, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import ColorPicker from "../../molecules/app/ColorPicker";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import RoomDisplay from "./RoomDisplay";
import ModifyMenu from "./ModifyMenu";
import {useEffect, useState} from "react";
import {useSnackbar} from "notistack";
import OfficeElementService from "../../../services/admin/officeElement.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:'25px',
    p: 2,
};

export default function RoomModal(props){
    const [seats, setSeats] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        function verifySeats(){
            let array = [];
            for(let i =0; i < props.room.elements.length; i++){
                let seat = {
                    "index": i,
                    "name": props.room.elements[i].name,
                    "type": 2,
                    "x": props.room.elements[i].x,
                    "y": props.room.elements[i].y,
                    "capacity": 1,
                    "maxCapacity": 100,
                    "visible":true
                }
                setIndex(i+1);
                array.push(seat);
            }
            setSeats(array);
        }
        verifySeats();
    }, [props.room])

    const addSeat = () => {
        const newSeat = {
            "index": index,
            "name": seats.length > 0 ? (parseInt(seats[seats.length-1].name)+1).toString() : "1",
            "type": 2,
            "x": 0,
            "y": 0,
            "capacity": 1,
            "maxCapacity": 100,
            "visible": true
        };
        setIndex(index+1);
        setSeats([...seats, newSeat]);
    }

    const [selection, setSelection] = useState(null);

    const handleSelection = (item) => {
        setSelection(Object.assign({}, item));
    }

    const handleUpdateSeat = (index, type, name) => {
        if(type === 0){
            let array = [...seats];
            array[index].visible = false;
            setSeats(array);
            setSelection(null)
        }else{
            let array = [...seats];
            array[index].name = name;
            setSeats(array);
        }
        enqueueSnackbar('Update saved.', {
            variant: 'success'
        });
    }

    const handleSave = async () => {
        if(seats.length < 1){
            enqueueSnackbar('No desk to save.', {
                variant: 'warning'
            });
        }else{
            await OfficeElementService.deleteDesks(props.room.id);
            for(let i = 0; i < seats.length; i++){
                if(seats[i].visible){
                    const resources = {
                        name: seats[i].name,
                        type: 3,
                        capacity: 1,
                        maxCapacity: 100,
                        parentId: props.room.id,
                        officeId: props.room.officeId,
                        x: seats[i].x,
                        y: seats[i].y
                    }
                    await OfficeElementService.addOfficeElement(resources).catch((err) => console.log(err.response));
                }
            }
            enqueueSnackbar('Update saved.', {
                variant: 'success'
            });
        }
    }

    return(
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Typography>Modify the room {props.room.name}</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="close" onClick={props.handleCloseModal}>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{marginBottom: '2%'}}/>
                    <Grid item>
                        <Grid container direction={"row"}>
                            <Grid item xs={8} style={{width:'500px', height:'500px'}}>
                                <RoomDisplay seats={seats} room={props.room} select={(item) => handleSelection(item)}/>
                            </Grid>
                            <Grid item xs={4}  style={{borderLeft:'1px solid black', padding:5}}>
                                <ModifyMenu item={selection} handleSave={() => handleSave()} updateSeat={(index, type, name) => handleUpdateSeat(index, type, name)} addSeat={() => addSeat()} close={props.handleCloseModal}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}