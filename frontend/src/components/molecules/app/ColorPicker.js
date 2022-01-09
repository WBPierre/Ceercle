import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
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

    const handleDelete = () => {
    };

    return (
        <div>
            <Chip
                label="Couleur"
                color="primary"
                onClick={handleOpen}
                onDelete={handleDelete}
                deleteIcon={<EditIcon />}
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