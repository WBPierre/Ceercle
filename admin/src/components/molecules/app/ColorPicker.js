import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useState} from "react";
import { BlockPicker } from 'react-color';

function ColorPicker(props){

    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('#FFF');

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        props.updateColor(color.hex);
    };

    return(
        <div>
            <Button variant={"contained"} color={"primary"} onClick={() => handleOpen()}>Open color selector</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <BlockPicker color={color} onChangeComplete={handleChangeComplete}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default ColorPicker;