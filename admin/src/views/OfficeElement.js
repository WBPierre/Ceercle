import CustomContainer from "../components/containers/CustomContainer";
import {useNavigate, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import OfficeElementService from "../services/admin/officeElement.service";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {
    Button,
    Collapse, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, ListItem, ListItemAvatar,
    ListItemButton,
    ListItemIcon, ListItemSecondaryAction,
    ListItemText,
    ListSubheader, Modal, Select,
    TextField,
    Typography
} from "@mui/material";
import List from "@mui/material/List";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import OfficeService from "../services/admin/office.service";
import ElementChildren from "../components/containers/office/ElementChildren";
import ColorPicker from "../components/molecules/app/ColorPicker";
import MenuItem from "@mui/material/MenuItem";


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


function OfficeElement(){

    const {id, idOffice} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState(0);
    const [color, setColor] = useState('');
    const [capacity, setCapacity] = useState(0);
    const [parentId, setParentId] = useState(null);
    const [update, setUpdate] = useState(false);
    const [index, setIndex] = useState(null);

    const [openDelete, setOpenDelete] = useState(false);

    const handleDeleteClickOpen = (id) => {
        setIndex(id)
        setOpenDelete(true);
    };

    const handleDeleteClose = () => {
        setOpenDelete(false);
    };

    useEffect(async() => {
        await OfficeElementService.getOfficeElements(idOffice).then((res) => {
            setList(res.data);
            console.log(res.data);
        })
    }, [])

    const handleModalOpen = (item) => {
        if(item === undefined){
            setName('');
            setCapacity(0);
            setType(0);
            setColor('');
            setParentId(null);
            setUpdate(false);
            setIndex(null);
        }else{
            setName(item.name);
            setCapacity(item.capacity);
            setType(item.type);
            setColor(item.color);
            setParentId(item.parentId);
            setUpdate(true);
            setIndex(item.id);
        }
        setOpenModal(true);
    }

    const handleModalOpenForChild = (id) =>{
        setName('');
        setCapacity(0);
        setType(0);
        setColor('');
        setParentId(id);
        setUpdate(false);
        setIndex(null);
        setOpenModal(true);
    }

    const handleChange = (event) => {
        switch(event.target.name){
            case 'name':
                setName(event.target.value);
                break;
            case 'capacity':
                setCapacity(event.target.value);
                break;
            case 'color':
                setColor(event.target.value);
                break;
            case 'type':
                setType(event.target.value);
                break;
        }
    };

    const validate = async () => {
        if(!verifyField()){
            enqueueSnackbar('Fill all required fields', {
                variant: 'warning'
            });
            return;
        }
        if(!update) {
            const resources = {
                name: name,
                capacity: capacity,
                parentId: parentId,
                color: color,
                type: type,
                officeId: parseInt(idOffice)
            }
            await OfficeElementService.addOfficeElement(resources).then((res) => {
                if(res.status === 200){
                    enqueueSnackbar('Operation successful.', {
                        variant: 'success'
                    });
                }else{
                    enqueueSnackbar('Error : '+res.errors, {
                        variant: 'error'
                    });
                }
                handleModalClose();
            }).catch((err) => {
                console.log(err.response.data)
                console.log(err)
            })
        }else{
            if(index !== null){
                const resources = {
                    id: index,
                    name: name,
                    capacity: capacity,
                    color: color,
                    type: type
                }
                await OfficeElementService.updateOfficeElement(resources).then((res) => {
                    if(res.status === 200){
                        enqueueSnackbar('Operation successful.', {
                            variant: 'success'
                        });
                    }else{
                        enqueueSnackbar('Error : '+res.errors, {
                            variant: 'error'
                        });
                    }
                    handleModalClose();
                }).catch((err) => {
                    console.log(err.response.data);
                    console.log(err)
                })
            }
        }
        const res = await OfficeElementService.getOfficeElements(idOffice);
        setList(res.data);
    }

    const verifyField = () => {
        if(name.length === 0) return false;
        if(type < 0 && type > 3) return false;
        return true;
    }

    const deleteOffice = async () => {
        if(index !== null){
            const resources = {
                id: index
            }
            await OfficeElementService.deleteOfficeElement(resources).then((res) => {
                if(res.status === 200){
                    enqueueSnackbar('Operation successful.', {
                        variant: 'success'
                    });
                }
                handleDeleteClose();
            }).catch((err) => {
                enqueueSnackbar(err.toString(), {
                    variant: 'error'
                });
            })
            const res = await OfficeElementService.getOfficeElements(idOffice);
            setList(res.data);
        }
    }

    const handleModalClose = () => setOpenModal(false);


    return(
        <CustomContainer>
            <Grid container direction={"column"}>
                <Grid item>
                    <Dialog
                        open={openDelete}
                        onClose={handleDeleteClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            Delete this element ?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleDeleteClose}>No</Button>
                            <Button onClick={() => deleteOffice()} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Modal
                        open={openModal}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add office
                            </Typography>
                            <Grid container direction={"column"} spacing={3}>
                                <Grid item>
                                    <TextField fullWidth label="Name (*)" id="fullWidth" name={"name"} value={name} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="Capacity" id="fullWidth" name={"capacity"} value={capacity} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            name={"type"}
                                            label="Type"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={0}>Floor</MenuItem>
                                            <MenuItem value={1}>Room</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Grid item>
                                            <ColorPicker updateColor={(hex) => setColor(hex)}/>
                                        </Grid>
                                        <Grid>
                                            <TextField fullWidth label="Color" id="fullWidth" name={"color"} value={color} onChange={handleChange}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button fullWidth variant={"contained"} onClick={() => validate()}>{update ? 'Modify' : 'Add'}</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton style={{backgroundColor:'#2F5597', color:'white'}} onClick={() => handleModalOpen()}>
                            <ListItemIcon style={{color:'white'}}>
                                <AddCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add an element" />
                        </ListItemButton>
                        {list.length !== 0 &&
                        <div>
                            {list.map((item, index) => (
                                <ElementChildren key={index} indent={0} data={item} handleUpdate={(item) => handleModalOpen(item)} handleAddChild={(id) => handleModalOpenForChild(id)} handleDelete={(id) => handleDeleteClickOpen(id)}/>
                            ))}
                        </div>
                        }
                    </List>
                </Grid>
            </Grid>
        </CustomContainer>
    )
}

export default OfficeElement;