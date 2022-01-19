import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import moment from 'moment-timezone';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import SettingSectionTemplate from './SettingSectionTemplate';

export default function PreferencesSection(props) {

    const timezone = moment.tz.names()
    const { t } = useTranslation();

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

    const [tz, setTz] = React.useState(461);
    const handleChangeTimezone = (event) => {
        setTz(event.target.value);
    };



    const statuses = ["En télétravail", "Au bureau", "En déplacement"]

    const [mondayStatus, setMondayStatus] = React.useState(0);
    const handleChangeMondayStatus = (event) => {
        setMondayStatus(event.target.value);
    };

    const [tuesdayStatus, setTuesdayStatus] = React.useState(1);
    const handleChangeTuesdayStatus = (event) => {
        setTuesdayStatus(event.target.value);
    };

    const [wednesdayStatus, setWednesdayStatus] = React.useState(1);
    const handleChangeWednesdayStatus = (event) => {
        setWednesdayStatus(event.target.value);
    };

    const [thursdayStatus, setThursdayStatus] = React.useState(1);
    const handleChangeThursdayStatus = (event) => {
        setThursdayStatus(event.target.value);
    };

    const [fridayStatus, setFridayStatus] = React.useState(0);
    const handleChangeFridayStatus = (event) => {
        setFridayStatus(event.target.value);
    };


    const languageOptions = ["Français", "English"]

    const [language, setLanguage] = React.useState(0);
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };


    const offices = ["Paris 1er", "Défense", "Bordeaux"]

    const [office, setOffice] = React.useState(2);
    const handleChangeOffice = (event) => {
        setOffice(event.target.value);
    };


    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();
    const save = () => {
        enqueueSnackbar('Paramètres enregistrés.', {
            variant: 'success'
        });
    }

    const cancel = () => {
        enqueueSnackbar('Annulé', {
            variant: 'cancel'
        });
    }

    return (
        <SettingSectionTemplate title="Mes préférences de compte" description="Définissez vos préférences de compte: heures de travail, statut par défaut, langage, timezone">
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
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
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
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
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


                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Langage
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <Select
                            id="demo-customized-select-native"
                            value={language}
                            onChange={handleChangeLanguage}
                        >
                            {languageOptions.map((lang, index) => {
                                return (
                                    <MenuItem value={index}>{lang}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Bureau
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <Select
                            id="demo-customized-select-native"
                            value={office}
                            onChange={handleChangeOffice}
                        >
                            {offices.map((off, index) => {
                                return (
                                    <MenuItem value={index}>{off}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>




                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Statuts par défaut
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Lundi</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={mondayStatus}
                            onChange={handleChangeMondayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Mardi</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={tuesdayStatus}
                            onChange={handleChangeTuesdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Mercredi</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={wednesdayStatus}
                            onChange={handleChangeWednesdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Jeudi</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={thursdayStatus}
                            onChange={handleChangeThursdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Vendredi</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={fridayStatus}
                            onChange={handleChangeFridayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Grid container direction="row">
                        <Grid item md={6} />

                        <Grid item md={6}>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="Annuler"
                                    sx={{
                                        borderColor: "#3C3B3D", color: "#3C3B3D", fontWeight: "bold"
                                    }}
                                    color="error"
                                    onClick={cancel}
                                    icon={<CancelIcon />}
                                    variant="outlined"
                                />
                                <Chip
                                    label="Enregistrer"
                                    sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                    color="error"
                                    onClick={save}
                                    icon={<CheckCircleIcon />}
                                    variant="outlined"
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>





            </Grid>
        </SettingSectionTemplate>
    )
};
