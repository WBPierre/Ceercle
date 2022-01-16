import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import { BlockPicker } from 'react-color';
import { Chip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function ColorPicker(props) {

    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('#FFF');

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        props.updateColor(color.hex);
    };



    return (
        <div>
            <Chip
                label="Couleur"
                sx={{ borderColor: "#3C3B3D", color: "#3C3B3D" }}
                color="primary"
                onClick={handleOpen}
                icon={<EditIcon />}
                variant="outlined"
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <BlockPicker color={color} onChangeComplete={handleChangeComplete} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Choisir</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default ColorPicker;