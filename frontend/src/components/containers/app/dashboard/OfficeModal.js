import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Modal, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookingService from "../../../../services/app/booking.service";
import OfficeService from "../../../../services/app/office.service";
import {useEffect, useState} from "react";
import useAuth from "../../../context/auth/AuthHelper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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

function OfficeModal(props){

    const context = useAuth();
    const [list, setList] = useState([]);
    const [officeList, setOfficeList] = useState([]);
    const [officeId, setOfficeId] = useState(null);
    const [elementItem, setElementItem] = useState({});
    const [officeItem, setOfficeItem] = useState({});
    const [confirm, setConfirm] = useState(false);
    const [ind, setInd] = useState(0);

    useEffect(() => {
        async function getOffices(){
            const res = await OfficeService.getOffices(context.user.company.id);
            setOfficeList(res.data);
        }
        getOffices();
    }, []);


    const confirmBooking = async () => {
        const resources = {
            day: props.day,
            morning: 1,
            afternoon: 1,
            officeElementId: elementItem.id
        }
        await BookingService.setBooking(resources).then((res) => {
            console.log(res)
        })
        closeModal(true);
    }

    const closeModal = (update) => {
        setOfficeId(null);
        setList([]);
        setElementItem({});
        setOfficeItem({});
        setConfirm(false);
        setInd(0);
        props.handleClose(update);
    }


    const selectElement = async (item) => {
        if(item.elements.length !== 0){
            setInd(ind+1);
            setList(list => [...list, item.elements]);
        }else{
            setConfirm(true);
            setElementItem(item);
        }
    }

    const selectOffice = async (item) => {
        setOfficeItem(item);
        const res = await OfficeService.getOfficeElements(item.id, props.day);
        let arr = [];
        arr[0] = res.data;
        setList(arr);
        setOfficeId(item.id);
        setInd(0);
    };

    const goBack = () => {
        setConfirm(false);
        if(list.length === 1){
            setOfficeId(null);
            setList([]);
        }else{
            let arr = list;
            arr.pop();
            setList(arr);
        }
        setInd(ind-1);

    }

    if(officeList.length === 0){
        return (<div/>)
    }
    return(
        <Modal
            open={props.open}
            onClose={() => closeModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {confirm ? 'Confirmez-vous votre réservation' : 'Où souhaitez-vous réserver ?'}
                </Typography>
                <Divider/>
                {!confirm ? (
                    <div>
                        {officeId !== null &&
                        <IconButton color="primary" aria-label="return back" component="span" onClick={() => goBack()}>
                            <ChevronLeftIcon />
                        </IconButton>
                        }
                        {officeId === null ?(
                            <Grid container alignItems={"center"} justifyContent={"center"} mt={5}>
                                {officeList.map((item, index) => {
                                    return(
                                        <Grid item key={index}>
                                            <Button style={{textTransform:'capitalize'}} onClick={() => selectOffice(item)}>
                                                <Paper elevation={3}  style={{padding:20}}>
                                                    <Typography style={{fontSize: 24}}>
                                                        {item.name}
                                                    </Typography>
                                                </Paper>
                                            </Button>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        ):(
                            <Grid container alignItems={"center"} justifyContent={"center"} spacing={5}>
                                {list[list.length-1].map((item, index) => {
                                    return(
                                        <Grid item key={item.id}>
                                            <Button style={{textTransform:'capitalize'}} onClick={() => selectElement(item)}>
                                                <Paper elevation={3} style={{padding:10}}>
                                                    <Grid container direction={"row"} spacing={3} style={{padding:5}}>
                                                        <Grid item xs={8}>
                                                            <Typography style={{color: item.color, fontSize: 24}}>
                                                                {item.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Avatar sx={{ bgcolor: item.color }}>
                                                                {item.capacity - item.used}/{item.capacity}
                                                            </Avatar>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            </Button>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )}
                    </div>
                ):(
                    <Grid container direction={"column"} spacing={3} mt={3}>
                        <Grid item>
                            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                <Grid item>
                                    <Typography style={{fontSize:24}}>{officeItem.name} - </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{fontSize:24, color: elementItem.color}}>{elementItem.name}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={"row"}>
                                <Grid item md={6} textAlign={"center"}>
                                    <Button onClick={() => closeModal(false)}>Non</Button>
                                </Grid>
                                <Grid item md={6} textAlign={"center"}>
                                    <Button variant={"contained"} onClick={() => confirmBooking()}>Oui</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Modal>
    )
}

export default OfficeModal;