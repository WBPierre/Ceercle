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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import * as App_Routes from "../../../../navigation/app/Routes";
import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function TeamRules(props) {


    const daysWorked = [0, 1, 2, 3, 4, 5]
    const statuses = ["Libre", "En télétravail", "Au bureau", "En déplacement"]


    const teams = [{ "name": "Finances", "min": 1, "max": 3, "mon": 0, "tue": 1, "wed": 2, "thu": 1, "fri": 0 },
        { "name": "Marketing", "min": 2, "max": 3, "mon": 1, "tue": 1, "wed": 2, "thu": 1, "fri": 0 },
        { "name": "Opérations", "min": 1, "max": 2, "mon": 0, "tue": 1, "wed": 2, "thu": 1, "fri": 1 }]

    const [team, setTeam] = React.useState(0);
    const handleTeam = (event) => {
        setTeam(event.target.value);
        setTeamMin(teams[event.target.value].min)
        setTeamMax(teams[event.target.value].max)
        setMondayStatusTeam(teams[event.target.value].mon)
        setTuesdayStatusTeam(teams[event.target.value].tue)
        setWednesdayStatusTeam(teams[event.target.value].wed)
        setThursdayStatusTeam(teams[event.target.value].thu)
        setFridayStatusTeam(teams[event.target.value].fri)
    };

    const [teamMin, setTeamMin] = React.useState(teams[team].min);
    const handleTeamMin = (event) => {
        setTeamMin(event.target.value);
    };

    const [teamMax, setTeamMax] = React.useState(teams[team].max);
    const handleTeamMax = (event) => {
        setTeamMax(event.target.value);
    };

    const [mondayStatusTeam, setMondayStatusTeam] = React.useState(teams[team].mon);
    const handleChangeMondayStatusTeam = (event) => {
        setMondayStatusTeam(event.target.value);
    };

    const [tuesdayStatusTeam, setTuesdayStatusTeam] = React.useState(teams[team].tue);
    const handleChangeTuesdayStatusTeam = (event) => {
        setTuesdayStatusTeam(event.target.value);
    };

    const [wednesdayStatusTeam, setWednesdayStatusTeam] = React.useState(teams[team].wed);
    const handleChangeWednesdayStatusTeam = (event) => {
        setWednesdayStatusTeam(event.target.value);
    };

    const [thursdayStatusTeam, setThursdayStatusTeam] = React.useState(teams[team].thu);
    const handleChangeThursdayStatusTeam = (event) => {
        setThursdayStatusTeam(event.target.value);
    };

    const [fridayStatusTeam, setFridayStatusTeam] = React.useState(teams[team].fri);
    const handleChangeFridayStatusTeam = (event) => {
        setFridayStatusTeam(event.target.value);
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
        navigate(App_Routes.WORKPOLICY);
    }

    return (
        <SettingSectionTemplate title="Règles de travail hybride" description="Définissez vos règles de travail hybride, à l'échelle de l'entreprise ou des équipes.">

            <Grid item mt={4}>
                <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#2A2828' }}>
                    Par équipe
                </Typography>
            </Grid>

            <Grid item>
                <FormControl sx={{ m: 1, width: 200 }} variant="standard">
                    <InputLabel htmlFor="demo-customized-select-native">Equipe</InputLabel>
                    <Select
                        id="demo-customized-select-native"
                        value={team}
                        onChange={handleTeam}
                    >
                        {teams.map((t, index) => {
                                return (
                                    <MenuItem value={index}>{t.name}</MenuItem>
                                )
                            }
                        )}

                    </Select>
                </FormControl>
            </Grid>


            <Grid item mt={3}>
                <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                    Nombre de jours travaillés au bureau
                </Typography>
            </Grid>

            <Grid item mt={1}>
                <Grid container direction="row" alignItems="center">
                    <Grid item md={3}>
                        <FormControl sx={{ m: 1, width: 100 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">Minimum</InputLabel>
                            <Select
                                id="demo-customized-select-native"
                                value={teamMin}
                                onChange={handleTeamMin}
                            >
                                {daysWorked.map((day, index) => {
                                        return (
                                            <MenuItem value={index}>{day}</MenuItem>
                                        )
                                    }
                                )}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3}>
                        <FormControl sx={{ m: 1, width: 100 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">Maximum</InputLabel>
                            <Select
                                id="demo-customized-select-native"
                                value={teamMax}
                                onChange={handleTeamMax}
                            >
                                {daysWorked.map((day, index) => {
                                        return (
                                            <MenuItem value={index}>{day}</MenuItem>
                                        )
                                    }
                                )}

                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item mt={3}>
                <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                    Spécification par jour
                </Typography>
            </Grid>

            <Grid item mt={1}>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <FormControl sx={{ width: 200 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">Lundi</InputLabel>
                            <Select
                                id="demo-customized-select-native"
                                value={mondayStatusTeam}
                                onChange={handleChangeMondayStatusTeam}
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
                                value={tuesdayStatusTeam}
                                onChange={handleChangeTuesdayStatusTeam}
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
                                value={wednesdayStatusTeam}
                                onChange={handleChangeWednesdayStatusTeam}
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
                                value={thursdayStatusTeam}
                                onChange={handleChangeThursdayStatusTeam}
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
                                value={fridayStatusTeam}
                                onChange={handleChangeFridayStatusTeam}
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
