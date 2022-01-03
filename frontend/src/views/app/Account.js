import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CreateIcon from '@mui/icons-material/Create';
import Button from "@mui/material/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import PlanningElement from "../../components/containers/app/dashboard/PlanningElement";
import { Divider, dividerClasses, TextField } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Office from "../../components/containers/app/dashboard/Office";
import Container from "@mui/material/Container";
import Team from "../../components/containers/app/dashboard/Team";
import Favorites from "../../components/containers/app/dashboard/Favorites";
import CustomContainer from "../../components/containers/app/CustomContainer";

import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import example1 from "../../assets/images/example/1.jpg";
import banniere2 from "../../assets/images/app/banniere2.jpeg";

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import moment from 'moment-timezone';

export default function Account(props) {

    const timezone = moment.tz.names()
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const [hoursAM, setHoursAM] = React.useState(9);
    const handleChangeHoursAM = (event) => {
        setHoursAM(event.target.value);
    };

    const [minutesAM, setMinutesAM] = React.useState(0);
    const handleChangeMinutesAM = (event) => {
        setMinutesAM(event.target.value);
    };

    const [hoursPM, setHoursPM] = React.useState(5);
    const handleChangeHoursPM = (event) => {
        setHoursPM(event.target.value);
    };

    const [minutesPM, setMinutesPM] = React.useState(0);
    const handleChangeMinutesPM = (event) => {
        setMinutesPM(event.target.value);
    };

    const [tz, setTz] = React.useState(0);
    const handleChangeTimezone = (event) => {
        setTz(event.target.value);
    };

    return (
        <CustomContainer>
            <Grid container direction="column" pl={10} pr={10} spacing={1}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#414040' }}>
                        Mon compte
                    </Typography>
                </Grid>

                <Grid item mb={1}>
                    <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#7F7F7F' }}>
                        Paramètres de compte
                    </Typography>
                </Grid>

                <Divider style={{ backgroundColor: "#A4A3A3" }} />

                <Grid item mt={3} mb={2}>
                    <Grid container direction="row">
                        <Grid item md={4}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="h5" fontWeight={600} style={{ color: '#414040' }}>
                                        Avatar
                                    </Typography>
                                </Grid>
                                <Grid item mb={1}>
                                    <Typography variant="body" fontWeight={100} fontSize={15} style={{ color: '#7F7F7F' }}>
                                        Ces images apparaitront dans votre profil utilisateur et sont visibles par tous.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={8} pl={10}>
                            <Grid container direction="column" spacing={5} >
                                <Grid item>
                                    <Grid container direction="row">
                                        <Grid item md={5}>
                                            <Avatar src={example1} sx={{ width: 120, height: 120, border: "4px solid white" }} />
                                        </Grid>
                                        <Grid item md={7}>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item>
                                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                                        Avatar du profil
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="Modifier"
                                                        color="primary"
                                                        onClick={handleClick}
                                                        onDelete={handleDelete}
                                                        deleteIcon={<DoneIcon />}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="Supprimer"
                                                        color="error"
                                                        onClick={handleClick}
                                                        onDelete={handleDelete}
                                                        deleteIcon={<DeleteIcon />}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container direction="row">
                                        <Grid item md={5}>
                                            <img src={banniere2} style={{ height: '80%', width: '80%' }} />
                                        </Grid>
                                        <Grid item md={7}>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item>
                                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                                        Bannière
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="Modifier"
                                                        color="primary"
                                                        onClick={handleClick}
                                                        onDelete={handleDelete}
                                                        deleteIcon={<DoneIcon />}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="Supprimer"
                                                        color="error"
                                                        onClick={handleClick}
                                                        onDelete={handleDelete}
                                                        deleteIcon={<DeleteIcon />}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider style={{
                    backgroundColor: "#D8D8D8"
                }} />

                <Grid item mt={3}>
                    <Grid container direction="row">
                        <Grid item md={4}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="h5" fontWeight={600} style={{ color: '#414040' }}>
                                        Mes préférences de compte
                                    </Typography>
                                </Grid>
                                <Grid item mb={1}>
                                    <Typography variant="body" fontWeight={100} fontSize={15} style={{ color: '#7F7F7F' }}>
                                        Définissez vos préférences de compte: heures de travail, statut par défaut, langage, timezone
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={8} pl={10}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                                        Heures de travail par défaut
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item md={5}>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item>
                                                    <FormControl sx={{ m: 1 }} variant="standard">
                                                        <InputLabel htmlFor="demo-customized-select-native">Heure</InputLabel>
                                                        <Select
                                                            id="demo-customized-select-native"
                                                            value={hoursAM}
                                                            onChange={handleChangeHoursAM}
                                                        >
                                                            <MenuItem value={0}>00</MenuItem>
                                                            <MenuItem value={1}>01</MenuItem>
                                                            <MenuItem value={2}>02</MenuItem>
                                                            <MenuItem value={3}>03</MenuItem>
                                                            <MenuItem value={4}>04</MenuItem>
                                                            <MenuItem value={5}>05</MenuItem>
                                                            <MenuItem value={6}>06</MenuItem>
                                                            <MenuItem value={7}>07</MenuItem>
                                                            <MenuItem value={8}>08</MenuItem>
                                                            <MenuItem value={9}>09</MenuItem>
                                                            <MenuItem value={10}>10</MenuItem>
                                                            <MenuItem value={11}>11</MenuItem>
                                                            <MenuItem value={12}>12</MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item>
                                                    <FormControl sx={{ m: 1 }} variant="standard">
                                                        <InputLabel htmlFor="demo-customized-select-native">Minutes</InputLabel>
                                                        <Select
                                                            id="demo-customized-select-native"
                                                            value={minutesAM}
                                                            onChange={handleChangeMinutesAM}
                                                        >
                                                            <MenuItem value={0}>00</MenuItem>
                                                            <MenuItem value={15}>15</MenuItem>
                                                            <MenuItem value={30}>30</MenuItem>
                                                            <MenuItem value={45}>45</MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item mt={2}>
                                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#7F7F7F' }}>
                                                        AM
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item md={5}>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item>
                                                    <FormControl sx={{ m: 1 }} variant="standard">
                                                        <InputLabel htmlFor="demo-customized-select-native">Heure</InputLabel>
                                                        <Select
                                                            id="demo-customized-select-native"
                                                            value={hoursPM}
                                                            onChange={handleChangeHoursPM}
                                                        >
                                                            <MenuItem value={0}>00</MenuItem>
                                                            <MenuItem value={1}>01</MenuItem>
                                                            <MenuItem value={2}>02</MenuItem>
                                                            <MenuItem value={3}>03</MenuItem>
                                                            <MenuItem value={4}>04</MenuItem>
                                                            <MenuItem value={5}>05</MenuItem>
                                                            <MenuItem value={6}>06</MenuItem>
                                                            <MenuItem value={7}>07</MenuItem>
                                                            <MenuItem value={8}>08</MenuItem>
                                                            <MenuItem value={9}>09</MenuItem>
                                                            <MenuItem value={10}>10</MenuItem>
                                                            <MenuItem value={11}>11</MenuItem>
                                                            <MenuItem value={12}>12</MenuItem>

                                                        </Select>
                                                    </FormControl>

                                                </Grid>
                                                <Grid item>
                                                    <FormControl sx={{ m: 1 }} variant="standard">
                                                        <InputLabel htmlFor="demo-customized-select-native">Minutes</InputLabel>
                                                        <Select
                                                            id="demo-customized-select-native"
                                                            value={minutesPM}
                                                            onChange={handleChangeMinutesPM}
                                                        >
                                                            <MenuItem value={0}>00</MenuItem>
                                                            <MenuItem value={15}>15</MenuItem>
                                                            <MenuItem value={30}>30</MenuItem>
                                                            <MenuItem value={45}>45</MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item mt={2}>
                                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#7F7F7F' }}>
                                                        PM
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                                        Timezone
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <FormControl sx={{ width: 300 }} variant="standard">
                                        <Select
                                            id="demo-customized-select-native"
                                            value={tz}
                                            onChange={handleChangeTimezone}
                                        >
                                            {timezone.map((tz, index) => {
                                                return (
                                                    <MenuItem value={index}>{tz}</MenuItem>
                                                )
                                            }
                                            )}


                                        </Select>
                                    </FormControl>
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer >

    );
}
