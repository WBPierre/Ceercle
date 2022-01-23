import CustomContainer from "../components/containers/CustomContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CompanyService from "../services/admin/company.service";
import Grid from "@mui/material/Grid";
import {
    Button, Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Select,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useSnackbar } from "notistack";

function Company() {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [activeOffice, setActiveOffice] = useState(false);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [minRemote, setMinRemote] = useState(0);
    const [maxRemote, setMaxRemote] = useState(5);
    const [monday, setMonday] = useState(0);
    const [tuesday, setTuesday] = useState(0);
    const [wednesday, setWednesday] = useState(0);
    const [thursday, setThursday] = useState(0);
    const [friday, setFriday] = useState(0);

    const handleChange = (event) => {
        switch (event.target.name) {
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
            case 'minRemote':
                setMinRemote(event.target.value);
                break;
            case 'maxRemote':
                setMaxRemote(event.target.value);
                break;
        }
    };


    const handleChangeSwitch = (event) => {
        setActiveOffice(event.target.checked);
    };

    useEffect(async () => {
        const res = await CompanyService.getCompany(id);
        setName(res.data[0].name);
        setActiveOffice(res.data[0].activeOfficeHandler);
        setMaxCapacity(res.data[0].maxCapacity);
        setMinRemote(res.data[0].remoteMinimum);
        setMaxRemote(res.data[0].remoteMaximum);
        setMonday(res.data[0].mondayMandatoryStatus);
        setTuesday(res.data[0].tuesdayMandatoryStatus);
        setWednesday(res.data[0].wednesdayMandatoryStatus);
        setThursday(res.data[0].thursdayMandatoryStatus);
        setFriday(res.data[0].fridayMandatoryStatus);
        setLoading(false);
    }, []);

    const updateCompany = async () => {
        if (validate()) {
            const resources = {
                name: name,
                activeOfficeHandler: activeOffice,
                maxCapacity: maxCapacity,
                officeMinimum: minRemote,
                officeMaximum: maxRemote,
                mondayMandatoryStatus: monday,
                tuesdayMandatoryStatus: tuesday,
                wednesdayMandatoryStatus: wednesday,
                thursdayMandatoryStatus: thursday,
                fridayMandatoryStatus: friday
            };
            console.log(resources);
            await CompanyService.updateCompany(id, resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar('Update saved.', {
                        variant: 'success'
                    });
                    navigate('/company');
                } else {
                    enqueueSnackbar('Server returned an error.', {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar('Please fill all fields', {
                variant: 'warning'
            });
        }
    }

    const validate = () => {
        if (maxCapacity === '' || maxCapacity < 0 || maxCapacity > 100) return false;
        if (minRemote === '' || minRemote < 0 || minRemote > 5) return false;
        if (maxRemote === '' || maxRemote < 0 || maxRemote > 5) return false;
        if (monday < 0 || monday > 2) return false;
        if (tuesday < 0 || tuesday > 2) return false;
        if (wednesday < 0 || wednesday > 2) return false;
        if (thursday < 0 || thursday > 2) return false;
        if (friday < 0 || friday > 2) return false;
        if (name.length === 0 || name.length < 2) return false;
        return true;
    }


    if (loading) {
        return (<CustomContainer />)
    }
    return (
        <CustomContainer>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Name</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <TextField fullWidth label="Name" id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Remote days</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"minRemote"} onChange={handleChange} label="Min" id="fullWidth" value={minRemote} aria-valuemin={0} aria-valuemax={5} />
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth name={"maxRemote"} onChange={handleChange} label="Max" id="fullWidth" value={maxRemote} aria-valuemin={0} aria-valuemax={5} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Daily rules</Typography>
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
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Office handler</Typography>
                        </Grid>
                        <Grid item md={10}>
                            <FormGroup>
                                <FormControlLabel control={<Switch checked={activeOffice} onChange={handleChangeSwitch} />} label={activeOffice ? 'on' : 'off'} />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
                {activeOffice &&
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item md={2} textAlign={"center"}>
                                <Typography variant={"h5"}>Max office capacity</Typography>
                            </Grid>
                            <Grid item md={10}>
                                <TextField fullWidth label="Capacity (%)" id="fullWidth" name={"maxCapacity"} value={maxCapacity} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </Grid>
                }
                {activeOffice &&
                    <Grid item >
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item md={2} textAlign={"center"}>
                                <Typography variant={"h5"}>Office management</Typography>
                            </Grid>
                            <Grid item md={10}>
                                <Typography>Please verify the office is well set before saving !</Typography>
                                <Button fullWidth variant={"contained"} onClick={() => navigate('/company/' + id + '/office')}>Go to office</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
                <Grid item>
                    <Button variant={"contained"} onClick={() => updateCompany()} fullWidth>Save</Button>
                </Grid>
            </Grid>

        </CustomContainer>
    )
}
export default Company;