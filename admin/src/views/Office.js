import {useNavigate, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import {useEffect, useState} from "react";
import OfficeService from "../services/admin/office.service";
import CustomContainer from "../components/containers/CustomContainer";
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


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

function Office(){
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [index, setIndex] = useState(null);
    const [capacity, setCapacity] = useState(0);
    const [maxCapacity, setMaxCapacity] = useState(100);
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('FRANCE');
    const [update, setUpdate] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    const handleDeleteClickOpen = (id) => {
        setIndex(id)
        setOpenDelete(true);
    };

    const handleDeleteClose = () => {
        setOpenDelete(false);
    };

    useEffect(async () => {
        const res = await OfficeService.getOffices(id);
        setList(res.data);
    }, []);

    const handleChange = (event) => {
        switch(event.target.name){
            case 'name':
                setName(event.target.value);
                break;
            case 'capacity':
                setCapacity(event.target.value);
                break;
            case 'maxCapacity':
                setMaxCapacity(event.target.value);
                break;
            case 'address':
                setAddress(event.target.value);
                break;
            case 'zipCode':
                setZipCode(event.target.value);
                break;
            case 'city':
                setCity(event.target.value);
                break;
            case 'country':
                setCountry(event.target.value);
                break;
        }
    };

    const handleOpen = (item) => {
        if(item === undefined){
            setName('');
            setCapacity(0);
            setMaxCapacity(100);
            setAddress('');
            setZipCode('');
            setCity('');
            setCountry('FRANCE');
            setUpdate(false);
            setIndex(null);
        }else{
            setName(item.name);
            setCapacity(item.capacity);
            setMaxCapacity(item.maxCapacity);
            setAddress(item.address);
            setZipCode(item.zipCode);
            setCity(item.city);
            setCountry(item.country);
            setUpdate(true);
            setIndex(item.id);
        }
        setOpen(true);
    }


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
                companyId: parseInt(id),
                maxCapacity: maxCapacity,
                address: address,
                zipCode: zipCode,
                city: city,
                country: country,
            }
            console.log(resources);
            await OfficeService.addOffice(resources).then((res) => {
                console.log(res);
                if(res.status === 200){
                    enqueueSnackbar('Operation successful.', {
                        variant: 'success'
                    });
                }else{
                    enqueueSnackbar('Error : '+res.errors, {
                        variant: 'error'
                    });
                }
                handleClose();
            }).catch((err) => {
                console.log(err)
            })
        }else{
            if(index !== null){
                const resources = {
                    id: index,
                    name: name,
                    capacity: capacity,
                    maxCapacity: maxCapacity,
                    address: address,
                    zipCode: zipCode,
                    city: city,
                    country: country,
                }
                await OfficeService.updateOffice(resources).then((res) => {
                    if(res.status === 200){
                        enqueueSnackbar('Operation successful.', {
                            variant: 'success'
                        });
                    }else{
                        enqueueSnackbar('Error : '+res.errors, {
                            variant: 'error'
                        });
                    }
                    handleClose();
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
        const res = await OfficeService.getOffices(id);
        setList(res.data);
    }

    const verifyField = () => {
        if(name.length === 0) return false;
        if(capacity.length === 0) return false;
        return true;
    }

    const deleteOffice = async () => {
        if(index !== null){
            const resources = {
                id: index
            }
            console.log(resources);
            await OfficeService.deleteOffice(resources).then((res) => {
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
            const res = await OfficeService.getOffices(id);
            setList(res.data);
        }
    }


    const handleClose = () => setOpen(false);

    return(
        <CustomContainer>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Dialog
                        open={openDelete}
                        onClose={handleDeleteClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            Delete this office ?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleDeleteClose}>No</Button>
                            <Button onClick={() => deleteOffice()} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Button onClick={() => handleOpen()} variant={"contained"} fullWidth>Add office</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
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
                                    <TextField fullWidth label="Capacity (*)" id="fullWidth" name={"capacity"} value={capacity} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="Max. Capacity (%)" id="fullWidth" name={"maxCapacity"} value={maxCapacity} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="Address" id="fullWidth" name={"address"} value={address} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="Zip Code" id="fullWidth" name={"zipCode"} value={zipCode} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="City" id="fullWidth" name={"city"} value={city} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="Country" id="fullWidth" name={"country"} value={country} onChange={handleChange}/>
                                </Grid>
                                <Grid item>
                                    <Button fullWidth variant={"contained"} onClick={() => validate()}>{update ? 'Modify' : 'Add'}</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                </Grid>
                <Grid item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Office Name</TableCell>
                                    <TableCell align="right">Capacity</TableCell>
                                    <TableCell align="right">Max capacity</TableCell>
                                    <TableCell align="right">Country</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            {list.length === 0 ? (
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            No data
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            ):(
                                <TableBody>

                                    {list.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.capacity}</TableCell>
                                            <TableCell align="right">{row.maxCapacity} %</TableCell>
                                            <TableCell align="right">{row.country}</TableCell>
                                            <TableCell align="right"><Button variant={"contained"} color={"info"} onClick={() => navigate('/company/'+id+'/office/'+row.id)}>Manage</Button></TableCell>
                                            <TableCell align="right"><Button variant={"contained"} onClick={() => handleOpen(row)}>Update</Button></TableCell>
                                            <TableCell align="right"><Button variant={"contained"} color={"warning"} onClick={() => handleDeleteClickOpen(row.id)}>Delete</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </CustomContainer>
    )
}

export default Office;