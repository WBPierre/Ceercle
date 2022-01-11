import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
    Button,
    Collapse, Dialog, DialogActions, DialogTitle, Divider, FormControl, InputLabel, ListItem, ListItemAvatar,
    ListItemButton,
    ListItemIcon, ListItemSecondaryAction,
    ListItemText,
    ListSubheader, Modal, Select,
    TextField,
    Typography
} from "@mui/material";
import List from "@mui/material/List";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import ColorPicker from "../../../../components/molecules/app/ColorPicker";
import MenuItem from "@mui/material/MenuItem";
import CircleIcon from '@mui/icons-material/Circle';
import { BlockPicker } from 'react-color';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TeamAddModal(props) {

    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');

    const [openDelete, setOpenDelete] = useState(false);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const validate = () => {
        props.handleAddTeam(name, color)
        setName('')
        setColor('#000000')
    };

    const closeModal = () => {
        props.handleModalClose()
        setName('')
        setColor('#000000')
    };

    return (
        <Modal
            open={props.openModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: '#414040' }}>
                            Nouvelle équipe
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Divider />
                    </Grid>

                    <Grid item mt={4}>
                        <TextField fullWidth label="Nom de l'équipe" id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                    </Grid>


                    <Grid item item mt={4}>
                        <Grid container direction={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Grid item md={6}>
                                <BlockPicker color={color} onChangeComplete={handleChangeComplete} />
                            </Grid>

                            <Grid item md={6}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: color }}>
                                    {name}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item item mt={4}>
                            <Button fullWidth variant={"outlined"} onClick={validate}>Ajouter l'équipe</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
}

export default TeamAddModal;