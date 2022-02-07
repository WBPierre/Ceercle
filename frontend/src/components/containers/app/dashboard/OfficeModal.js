import { Chip, Divider, InputBase, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookingService from "../../../../services/app/booking.service";
import OfficeService from "../../../../services/app/office.service";
import TimeService from "../../../../services/app/time.service";
import { useEffect, useState } from "react";
import useAuth from "../../../context/auth/AuthHelper";
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

function OfficeModal(props) {

    const { t } = useTranslation();
    const context = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const [officeId, setOfficeId] = useState(0);
    const [floorId, setFloorId] = useState(0);
    const [roomId, setRoomId] = useState(0);
    const [deskId, setDeskId] = useState(0);
    const [officeList, setOfficeList] = useState([]);
    const [floorList, setFloorList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [deskList, setDeskList] = useState([]);

    useEffect(() => {
        async function getBooking() {
            if (props.booking.length !== 0) {
                let res = await OfficeService.getOffices(context.user.company.id);
                setOfficeList(res.data);
                res = await OfficeService.getFloors(props.booking[0].id);
                setFloorList(res.data);
                res = await OfficeService.getRooms(props.booking[1].id, props.day);
                setRoomList(res.data);
                res = await OfficeService.getDesks(props.booking[2].id, props.day);
                setDeskList(res.data);
                setOfficeId(props.booking[0].id)
                setFloorId(props.booking[1].id)
                setRoomId(props.booking[2].id)
                if (res.data.length === 0) {
                    setDeskId(1);
                }
            } else {
                setOfficeId(0);
                setFloorId(0);
                setRoomId(0);
                setDeskId(0);
                getOffices();
            }
        }
        getBooking();
    }, [props]);

    useEffect(() => {
        getOffices();
    }, []);

    async function getOffices() {
        const res = await OfficeService.getOffices(context.user.company.id);
        setOfficeList(res.data);
        if (res.data.length === 1) {
            setOfficeId(res.data[0].id);
        }
    }

    useEffect(() => {
        async function getFloors() {
            if (officeId !== 0) {
                const res = await OfficeService.getFloors(officeId);
                setFloorList(res.data);
                if (res.data.length === 1) {
                    setFloorId(res.data[0].id)
                }
            }
        }
        getFloors();
    }, [officeId])

    useEffect(() => {
        async function getRooms() {
            if (floorId !== 0) {
                const res = await OfficeService.getRooms(floorId, props.day);
                setRoomList(res.data);
                if (res.data.length === 1 && res.data[0].available.available) {
                    setRoomId(res.data[0].id)
                }
            }
        }
        getRooms();
    }, [floorId]);

    useEffect(() => {
        async function getDesks() {
            if (roomId !== 0) {
                const res = await OfficeService.getDesks(roomId, props.day);
                setDeskList(res.data);
                if (res.data.length === 0) {
                    setDeskId(1);
                } else {
                    if (res.data.length === 1 && res.data[0].available.available) {
                        setDeskId(res.data[0].id);
                    }
                }
            }
        }
        getDesks();
    }, [roomId]);



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
        if (deskList.length !== 0) {
            resources.officeElementId = deskId;
        } else {
            resources.officeElementId = roomId;
        }
        await BookingService.setBooking(resources).catch((err) => {
            enqueueSnackbar(t('app:errors.officeAlreadyBooked'), {
                variant: 'error'
            });
        });
        closeModal(true);
    }

    const closeModal = (update) => {
        props.handleClose(update);
    }

    const handleOfficeChange = (e) => {
        setOfficeId(e.target.value);
        setFloorId(0)
        setRoomId(0);
        setDeskId(0);
    }

    const handleFloorChange = (e) => {
        setFloorId(e.target.value);
        setRoomId(0);
        setDeskId(0);
    }

    const handleRoomChange = (e) => {
        setRoomId(e.target.value);
        setDeskId(0);
    }

    const handleDeskChange = (e) => {
        setDeskId(e.target.value);
    }

    if (officeList.length === 0) {
        return (<div />)
    }
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
                <Grid container direction={"row"} justifyContent={"space-between"}>
                    <Grid item>
                        <Typography id="modal-modal-title" variant="h6" component="h2" fontSize={24}>
                            {t('app:dashboard:desk.your_booking')}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="close modal" onClick={() => closeModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Divider />
                <Grid container direction={"column"} spacing={2} mt={2}>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"}>
                            <Grid item xs={3}>
                                <Typography fontSize={22} color={"secondary"}>{t('app:dashboard:desk.office')}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                                    <FormControl fullWidth sx={{ width: 200 }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={officeId}
                                            onChange={handleOfficeChange}
                                            disabled={false}
                                            variant={"standard"}
                                            input={<InputBase />}
                                        >
                                            <MenuItem key={-1} value={0} disabled>{t('app:dashboard:desk.select')}</MenuItem>
                                            {officeList.map((o, index) => {
                                                if (officeList.length === 1) {
                                                    return (
                                                        <MenuItem key={index} value={o.id} selected>{o.name}</MenuItem>
                                                    )
                                                } else {
                                                    return (
                                                        <MenuItem key={index} value={o.id}>{o.name}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                    </FormControl>
                                } />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"}>
                            <Grid item xs={3}>
                                <Typography fontSize={22} color={"secondary"}>{t('app:dashboard:desk.floor')}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Chip component={FormControl} style={{ backgroundColor: 'white' }} disabled={officeId === 0} variant={"outlined"} label={
                                    <FormControl fullWidth sx={{ width: 200 }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={floorId}
                                            onChange={handleFloorChange}
                                            disabled={false}
                                            variant={"standard"}
                                            input={<InputBase />}
                                        >
                                            <MenuItem key={-1} value={0} disabled>{t('app:dashboard:desk.select')}</MenuItem>
                                            {floorList.map((o, index) => {
                                                if (floorList.length === 1) {
                                                    return (
                                                        <MenuItem key={index} value={o.id} selected>{o.name}</MenuItem>
                                                    )
                                                } else {
                                                    return (
                                                        <MenuItem key={index} value={o.id}>{o.name}</MenuItem>
                                                    )
                                                }

                                            })}
                                        </Select>
                                    </FormControl>
                                } />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"}>
                            <Grid item xs={3}>
                                <Typography fontSize={22} color={"secondary"}>{t('app:dashboard:desk.room')}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Chip component={FormControl} style={{ backgroundColor: 'white' }} disabled={floorId === 0} variant={"outlined"} label={
                                    <FormControl fullWidth sx={{ width: 200 }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={roomId}
                                            onChange={handleRoomChange}
                                            disabled={false}
                                            variant={"standard"}
                                            input={<InputBase />}
                                        >
                                            <MenuItem value={0} disabled key={-1}>{t('app:dashboard:desk.select')}</MenuItem>
                                            {roomList.map((o, index) => {
                                                if (roomList.length === 1) {
                                                    if (o.available.available) {
                                                        return (
                                                            <MenuItem key={index} value={o.id} selected>{o.name}  ({parseInt(o.maxCapacity * o.capacity / 100) - o.available.used}/{parseInt(o.maxCapacity * o.capacity / 100)}.p)</MenuItem>
                                                        )
                                                    } else {
                                                        return (
                                                            <MenuItem key={index} value={o.id} selected disabled={!o.available.available}>{o.name} ({parseInt(o.maxCapacity * o.capacity / 100) - o.available.used}/{parseInt(o.maxCapacity * o.capacity / 100)}.p)</MenuItem>
                                                        )
                                                    }

                                                } else {
                                                    return (
                                                        <MenuItem key={index} value={o.id} disabled={!o.available.available}>{o.name} ({parseInt(o.maxCapacity * o.capacity / 100) - o.available.used}/{parseInt(o.maxCapacity * o.capacity / 100)}.p)</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                    </FormControl>
                                } />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"}>
                            <Grid item xs={3}>
                                <Typography fontSize={22} color={"secondary"}>{t('app:dashboard:desk.desk')}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Chip component={FormControl} style={{ backgroundColor: 'white' }} disabled={roomId === 0} variant={"outlined"} label={
                                    <FormControl fullWidth sx={{ width: 200 }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={deskId}
                                            onChange={handleDeskChange}
                                            disabled={false}
                                            variant={"standard"}
                                            input={<InputBase />}
                                        >
                                            <MenuItem value={0} key={-1} disabled>{t('app:dashboard:desk.select')}</MenuItem>
                                            {roomId !== 0 && deskList.length === 0 ? (
                                                <MenuItem value={1} key={0} selected>{t('app:dashboard:desk.free')}</MenuItem>
                                            ) : (
                                                deskList.map((o, index) => {
                                                    if (deskList.length === 1) {
                                                        return (
                                                            <MenuItem key={index} value={o.id} selected>{o.name}  ({o.capacity}.p)</MenuItem>
                                                        )
                                                    } else {
                                                        return (
                                                            <MenuItem key={index} value={o.id}>{o.name}  ({o.capacity}.p)</MenuItem>
                                                        )
                                                    }
                                                })
                                            )}

                                        </Select>
                                    </FormControl>
                                } />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item textAlign={"center"}>
                        <Button disabled={officeId === 0 || floorId === 0 || roomId === 0 || deskId === 0} onClick={() => confirmBooking()} color={"primary"} variant={"contained"}>{t('app:dashboard:desk.confirm')}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default OfficeModal;