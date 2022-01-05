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
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function WorkRules(props) {

    const timezone = moment.tz.names()
    const theme = useTheme();
    const { t } = useTranslation();

    const daysWorked = [0, 1, 2, 3, 4, 5]
    const statuses = ["Libre", "En télétravail", "Au bureau", "En déplacement"]



    const [companyMin, setCompanyMin] = React.useState(1);
    const handleCompanyMin = (event) => {
        setCompanyMin(event.target.value);
    };

    const [companyMax, setCompanyMax] = React.useState(3);
    const handleCompanyMax = (event) => {
        setCompanyMax(event.target.value);
    };

    const [mondayStatusCompany, setMondayStatusCompany] = React.useState(0);
    const handleChangeMondayStatusCompany = (event) => {
        setMondayStatusCompany(event.target.value);
    };

    const [tuesdayStatusCompany, setTuesdayStatusCompany] = React.useState(1);
    const handleChangeTuesdayStatusCompany = (event) => {
        setTuesdayStatusCompany(event.target.value);
    };

    const [wednesdayStatusCompany, setWednesdayStatusCompany] = React.useState(2);
    const handleChangeWednesdayStatusCompany = (event) => {
        setWednesdayStatusCompany(event.target.value);
    };

    const [thursdayStatusCompany, setThursdayStatusCompany] = React.useState(1);
    const handleChangeThursdayStatusCompany = (event) => {
        setThursdayStatusCompany(event.target.value);
    };

    const [fridayStatusCompany, setFridayStatusCompany] = React.useState(0);
    const handleChangeFridayStatusCompany = (event) => {
        setFridayStatusCompany(event.target.value);
    };


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


    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <SettingSectionTemplate title="Règles de travail hybride" description="Définissez vos règles de travail hybride, à l'échelle de l'entreprise ou des équipes.">
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Pour l'entreprise
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body" fontWeight={400} fontSize={14} style={{ color: '#414040' }}>
                        Attention, ces réglages écraseront les règles spécifiques à chaque équipe.
                    </Typography>
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
                                    value={companyMin}
                                    onChange={handleCompanyMin}
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
                                    value={companyMax}
                                    onChange={handleCompanyMax}
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
                                    value={mondayStatusCompany}
                                    onChange={handleChangeMondayStatusCompany}
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
                                    value={tuesdayStatusCompany}
                                    onChange={handleChangeTuesdayStatusCompany}
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
                                    value={wednesdayStatusCompany}
                                    onChange={handleChangeWednesdayStatusCompany}
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
                                    value={thursdayStatusCompany}
                                    onChange={handleChangeThursdayStatusCompany}
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
                                    value={fridayStatusCompany}
                                    onChange={handleChangeFridayStatusCompany}
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
                </Grid>





                <Grid item mt={8}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
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
                </Grid>





                <Grid item mt={6}>
                    <Grid container direction="row">
                        <Grid item md={6} />

                        <Grid item md={6}>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="Enregistrer"
                                    color="primary"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    deleteIcon={<DoneIcon />}
                                    variant="outlined"
                                />
                                <Chip
                                    label="Annuler"
                                    color="error"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    deleteIcon={<CancelIcon />}
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
