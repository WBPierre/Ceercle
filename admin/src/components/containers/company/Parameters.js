import CompanyService from "../../../services/admin/company.service";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {
    Button, Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel, Paper,
    Select, Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import moment, {Moment} from "moment";
import {Divide} from "hamburger-react";

function Parameters(props){

    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();


    const [name, setName] = useState('');
    const [activeOffice, setActiveOffice] = useState(false);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [minOffice, setMinOffice] = useState(0);
    const [maxOffice, setMaxOffice] = useState(5);
    const [minRemote, setMinRemote] = useState(0);
    const [maxRemote, setMaxRemote] = useState(5);
    const [ruleScope, setRuleScope] = useState(0);
    const [restrictiveRules, setRestrictiveRules] = useState(false);
    const [monday, setMonday] = useState(0);
    const [tuesday, setTuesday] = useState(0);
    const [wednesday, setWednesday] = useState(0);
    const [thursday, setThursday] = useState(0);
    const [friday, setFriday] = useState(0);
    const [activationDay, setActivationDay] = useState('');
    const [invoiceType, setInvoiceType] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(props.company !== null) {
            setName(props.company.name);
            setActiveOffice(props.company.activeOfficeHandler);
            setMaxCapacity(props.company.maxCapacity);
            setMinOffice(props.company.officeMinimum);
            setMaxOffice(props.company.officeMaximum);
            setMinRemote(props.company.remoteMinimum);
            setMaxRemote(props.company.remoteMaximum);
            setRestrictiveRules(props.company.restrictive_rules);
            setRuleScope(props.company.ruleScope);
            setMonday(props.company.mondayMandatoryStatus);
            setTuesday(props.company.tuesdayMandatoryStatus);
            setWednesday(props.company.wednesdayMandatoryStatus);
            setThursday(props.company.thursdayMandatoryStatus);
            setFriday(props.company.fridayMandatoryStatus);
            setActivationDay(props.company.activation_day);
            setActive(props.company.active);
            setInvoiceType(props.company.invoice_type);
        }
    }, [props.company]);

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'active':
                setActive(event.target.checked);
                break;
            case 'activeOffice':
                setActiveOffice(event.target.checked);
                break;
            case 'invoiceType':
                setInvoiceType(event.target.checked);
                break;
            case 'activationDay':
                setActivationDay(event.target.value);
                break;
            case 'restrictiveRules':
                setRestrictiveRules(event.target.checked);
                break;
            case 'ruleScope':
                setRuleScope(event.target.checked);
                break;
            case 'minRemote':
                setMinRemote(event.target.value);
                break;
            case 'maxRemote':
                setMaxRemote(event.target.value);
                break;
            case 'monday':
                setMonday(event.target.value);
                break;
            case 'tuesday':
                setTuesday(event.target.value);
                break;
            case 'wednesday':
                setWednesday(event.target.value);
                break;
            case 'thursday':
                setThursday(event.target.value);
                break;
            case 'friday':
                setFriday(event.target.value);
                break;
            case 'name':
                setName(event.target.value);
                break;
            case 'maxCapacity':
                setMaxCapacity(event.target.value);
                break;
            case 'minOffice':
                setMinOffice(event.target.value);
                break;
            case 'maxOffice':
                setMaxOffice(event.target.value);
                break;
        }
    };


    const handleChangeSwitch = (event) => {
        setActiveOffice(event.target.checked);
    };

    const updateCompany = async () => {
        if (validate()) {
            const resources = {
                name: name,
                maxCapacity: maxCapacity,
                officeMinimum: minOffice,
                officeMaximum: maxOffice,
                remoteMinimum: minRemote,
                remoteMaximum: maxRemote,
                mondayMandatoryStatus: monday,
                tuesdayMandatoryStatus: tuesday,
                wednesdayMandatoryStatus: wednesday,
                thursdayMandatoryStatus: thursday,
                fridayMandatoryStatus: friday,
                active: active,
                invoice_type: invoiceType,
                restrictive_rules: restrictiveRules,
                activation_day: activationDay,
                ruleScope: ruleScope ? 1: 0,
                activeOfficeHandler: activeOffice
            };
            console.log(resources);
            await CompanyService.updateCompany(props.company.id, resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar('Update saved.', {
                        variant: 'success'
                    });
                }
            }).catch((err) => {
                enqueueSnackbar('Server returned an error.', {
                    variant: 'error'
                });
            })
        } else {
            enqueueSnackbar('Please fill all fields', {
                variant: 'warning'
            });
        }
    }

    const validate = () => {
        if (maxCapacity === '' || maxCapacity < 0 || maxCapacity > 100) return false;
        if (monday < 0 || monday > 2) return false;
        if (tuesday < 0 || tuesday > 2) return false;
        if (wednesday < 0 || wednesday > 2) return false;
        if (thursday < 0 || thursday > 2) return false;
        if (friday < 0 || friday > 2) return false;
        if (name.length === 0 || name.length < 2) return false;
        let date = moment(activationDay, 'YYYY-MM-DD', true);
        if(!date.isValid() || date.diff(moment().format('YYYY-MM-DD')) <= 0) return false;
        return true;
    }

    return(
        <Paper style={{borderRadius: '25px', padding: '2%'}}>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Name</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <TextField fullWidth label="Name" id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Active</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>No</Typography>
                                <Switch value={active} checked={active} onChange={handleChange} name={"active"} />
                                <Typography>Yes</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Activation day</Typography>
                            <Typography style={{fontSize: 18}}>(Automatic)</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <TextField fullWidth name={"activationDay"} onChange={handleChange} label="Day" id="fullWidth" value={activationDay} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Invoice type</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>Monthly</Typography>
                                <Switch value={invoiceType} onChange={handleChange} name={"invoiceType"}  inputProps={{ 'aria-label': 'ant design' }} />
                                <Typography>Yearly</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Office Booking management</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>No</Typography>
                                <Switch value={activeOffice} checked={activeOffice} onChange={handleChange} name={"activeOffice"}  />
                                <Typography>Yes</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Max office capacity</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <TextField fullWidth label="Capacity (%)" id="fullWidth" name={"maxCapacity"} value={maxCapacity} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Restrictive Rules</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>No</Typography>
                                <Switch value={restrictiveRules} onChange={handleChange} name={"restrictiveRules"}  inputProps={{ 'aria-label': 'ant design' }} />
                                <Typography>Yes</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Rule Scope</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>Weekly</Typography>
                                <Switch value={ruleScope} onChange={handleChange} name={"ruleScope"}  inputProps={{ 'aria-label': 'ant design' }} />
                                <Typography>Monthly</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Office days</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"minOffice"} onChange={handleChange} label="Min (unused)" disabled id="fullWidth" value={minOffice}/>
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"maxOffice"} onChange={handleChange} label="Max" id="fullWidth" value={maxOffice}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Remote days</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"minRemote"} onChange={handleChange} label="Min (unused)" disabled id="fullWidth" value={minRemote}/>
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"maxRemote"} onChange={handleChange} label="Max" id="fullWidth" value={maxRemote}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}  spacing={5}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography style={{fontSize: 18}}>Daily rules</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Monday</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={monday}
                                    label="Monday"
                                    name={"monday"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Free</MenuItem>
                                    <MenuItem value={1}>Office</MenuItem>
                                    <MenuItem value={2}>Remote</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tuesday</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={tuesday}
                                    label="Tuesday"
                                    name={"tuesday"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Free</MenuItem>
                                    <MenuItem value={1}>Office</MenuItem>
                                    <MenuItem value={2}>Remote</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Wednesday</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={wednesday}
                                    label="Wednesday"
                                    name={"wednesday"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Free</MenuItem>
                                    <MenuItem value={1}>Office</MenuItem>
                                    <MenuItem value={2}>Remote</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Thursday</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={thursday}
                                    label="Thursday"
                                    name={"thursday"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Free</MenuItem>
                                    <MenuItem value={1}>Office</MenuItem>
                                    <MenuItem value={2}>Remote</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Friday</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={friday}
                                    label="Friday"
                                    name={"friday"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>Free</MenuItem>
                                    <MenuItem value={1}>Office</MenuItem>
                                    <MenuItem value={2}>Remote</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant={"contained"} onClick={() => updateCompany()} fullWidth>Save</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default Parameters;