import { Chip, Divider, InputBase, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookingService from "../../../../../services/app/booking.service";
import OfficeService from "../../../../../services/app/office.service";
import TimeService from "../../../../../services/app/time.service";
import { useEffect, useState } from "react";
import useAuth from "../../../../context/auth/AuthHelper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from "notistack";
import ElementDisplay from "./ElementDisplay";
import BookingInformation from "./BookingInformation";

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
function OfficeModal(props) {

    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();

    const [booking, setBooking] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [validateBooking, setValidateBooking] = useState(false);


    // ONLY IF NO BOOKING
    useEffect(() => {
        async function getBooking(){
            if(props.booking.length !== 0){
                setBooking(props.booking);
                await displayCurrentReservation();
            }else{
                setBooking([]);
                setValidateBooking(false);
                setDisplayData([]);
                await getOffices();
            }
        }
        getBooking();
    }, [props.booking]); //eslint-disable-line

    const displayCurrentReservation = async () => {
        await getOfficeElements(props.booking[0].id, props.booking[props.booking.length-2].id);
    }

    async function getOffices() {
        const res = await BookingService.getBookingsForOffice(props.day);
        setDisplayData(res.data);
    }

    const handleSelection = async (item) => {
        if(!validateBooking){
            setBooking([...booking, item]);
        }else{
            setBooking([...booking.filter((x,i)=> i !== booking.length-1), item]);
        }
    }

    useEffect(() => {
        async function getData(){
            if(booking.length === 0){
                await getOffices();
            }else{
                if(booking.length > 1){
                    await getOfficeElements(booking[0].id, booking[booking.length-1].id);
                }else{
                    await getOfficeElements(booking[0].id, null);
                }
            }
        }
        getData();
    }, [booking]);

    const getOfficeElements = async (id, parentId) => {
        const res = await BookingService.getBookingsForOfficeElement(id, parentId, props.day);
        if(res.data.length !== 0){
            setDisplayData(res.data);
            if(res.data.length === 1){
                await handleSelection(res.data[0]);
            }
        }else{
            setValidateBooking(true);
        }
    }

    const removeItem = async (item) => {
        setValidateBooking(false);
        let index = booking.findIndex((x) => x.id === item.id);
        let tmp = booking.filter((x, i) => i < index)
        setBooking(tmp);
    }

    const closeModal = (update) => {
        props.handleClose(update);
    }


    const confirmBooking = async () => {
        if (props.resources) {
            await TimeService.setTimeSheet(props.resources);
            enqueueSnackbar(t('app:dashboard:snackbar_success'), {
                variant: 'success'
            });
        }
        const resources = {
            day: props.day,
            morning: props.resaType === 0 || props.resaType === 1,
            afternoon: props.resaType === 0 || props.resaType === 2,
            officeElementId: null
        }
        resources.officeElementId = booking[booking.length-1].id;
        await BookingService.setBooking(resources).catch((err) => {
            enqueueSnackbar(t('app:errors.officeAlreadyBooked'), {
                variant: 'error'
            });
        });
        closeModal(true);
    }


    if(displayData.length === 0) return (<div/>)
    return (
        <Modal
            open={props.open}
            onClose={() => closeModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
            disableEnforceFocus
        >
            <Box sx={style} style={{ borderRadius: '25px', outline: 'none' }}>
                <Grid container direction={"row"}>
                    <Grid item md={8} style={{width:'500px', height:'500px'}}>
                        <ElementDisplay data={displayData} booking={booking} validateBooking={validateBooking} handleSelection={(item) => handleSelection(item)}/>
                    </Grid>
                    <Grid item md={4} style={{borderLeft: '1px solid black', padding:5, paddingLeft:10, flex:1}}>
                        <Grid container direction={"column"} style={{height:'100%'}}>
                            <Grid item>
                                <Grid container direction={"row"} justifyContent={"space-between"} style={{marginBottom:'5%'}}>
                                    <Grid item>
                                        <Grid container direction={"column"}>
                                            <Grid item>
                                                <Typography id="modal-modal-title" variant="h6" component="h2" fontSize={24}>
                                                    {t('app:dashboard:desk.your_booking')}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography fontSize={14}>
                                                    {t('app:dashboard:desk.subtitle')}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid item>
                                        <IconButton aria-label="close modal" onClick={() => closeModal(false)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Divider/>
                            </Grid>
                            <Grid item style={{marginTop:'5%', height:'80%'}} >
                                <BookingInformation remove={(item) => removeItem(item)} booking={booking} displayData={displayData} confirmBooking={() => confirmBooking()} validateBooking={validateBooking}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default OfficeModal;