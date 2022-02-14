import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button, Divider, FormControl, InputLabel, Select, Stack, Switch, TextField, Typography} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import {useState} from "react";
import moment from "moment";
import {useSnackbar} from "notistack";
import CompanyService from "../../../services/admin/company.service";
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import 'moment/locale/fr';
import MenuItem from "@mui/material/MenuItem";

function CreateCompany(props){
    const [name, setName] = useState('');
    const [activationDay, setActivationDay] = useState(null);
    const [invoiceType, setInvoiceType] = useState(false);
    const [activationHour, setActivationHour] = useState(8);
    const { enqueueSnackbar } = useSnackbar();
    let list = [];
    for (let i = 0; i <= 23; i++) {
        list.push(i);
    }


    const createCompany = async () => {
        let date = moment(activationDay, 'YYYY-MM-DD', true);
        if(name.length > 2 && date.isValid() && date.diff(moment().format('YYYY-MM-DD')) > 0){
            const resources = {
                name: name,
                activationDay: activationDay,
                activationHour: activationHour,
                invoiceType: invoiceType ? 1 : 0
            }
            await CompanyService.createCompany(resources).then((res) => {
                enqueueSnackbar("Operation successful", {
                    variant: 'success'
                });
            });
            props.update();
            props.handleClose();
        }else{
            enqueueSnackbar("Wrong parameters", {
                variant: 'warning'
            });
        }
    }


    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value);
                break;
            case 'invoiceType':
                setInvoiceType(e.target.checked);
                break;
            case 'activationHour':
                setActivationHour(e.target.value);
                break;
        }
    }
    return(
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Create a company</DialogTitle>
            <Divider/>
            <DialogContent>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Company name</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Company name"
                                    name="name"
                                    autoComplete="given-name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Activation day</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <LocalizationProvider dateAdapter={DateAdapter} locale={'fr'}>
                                    <DatePicker
                                        disablePast
                                        label="Activation day"
                                        value={activationDay}
                                        onChange={(newValue) => {
                                            setActivationDay(moment(newValue).format('YYYY-MM-DD'));
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Activation Hour</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Hour</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={activationHour}
                                        label="Hour"
                                        name={"activationHour"}
                                        onChange={handleChange}
                                    >
                                        {list.map((x) => {
                                            return(
                                                <MenuItem key={x} value={x}>{x}:00</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Invoice type</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>Monthly</Typography>
                                    <Switch value={invoiceType} onChange={handleChange} name={"invoiceType"}  inputProps={{ 'aria-label': 'ant design' }} />
                                    <Typography>Yearly</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={() => createCompany()}>Create</Button>
            </DialogActions>
        </Dialog>
    )

}
export default CreateCompany;