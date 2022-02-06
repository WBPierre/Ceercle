import * as React from "react";
import { useTranslation } from "react-i18next";
import TeamService from "../../../../services/app/team.service";
import UserService from "../../../../services/app/user.service";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Chip, InputBase, Typography } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AdapterMoment from '@mui/lab/AdapterMoment';
import 'moment/locale/fr';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from "moment";

function FilterBar(props) {

    const { t } = useTranslation();

    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState([]);

    async function listUsers() {
        const res = await UserService.getUserForCompany();
        setUsers(res.data);
    }

    async function listTeams() {
        await TeamService.listAllTeams().then((res) => {
            setTeams(res.data);
        })
    }

    useEffect(() => {
        listUsers();
        listTeams();
    }, []);

    return (
        <Grid container direction={"row"}>

            <Grid item md={3}>
                <Grid container direction={"column"} justifyContent={"space-around"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: 'scondary' }}>{t('app:stats:attendance.teams')}</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth sx={{ width: 200, backgroundColor: 'white' }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.team}
                                onChange={(event, newTeam) => {
                                    props.setTeam(newTeam.props.value);
                                }}
                                disabled={false}
                            >
                                <MenuItem value={0}>{t('app:stats:attendance.all_teams')}</MenuItem>
                                {teams.map((team, index) => {
                                    return (
                                        <MenuItem key={index} value={team.id}>{team.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item md={3}>
                <Grid container direction={"column"} justifyContent={"space-around"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: 'secondary' }}>{t('app:stats:attendance.collaborators')}</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth sx={{ width: 200, backgroundColor: 'white' }}>
                            <Autocomplete
                                value={props.collaborator}
                                onChange={(event, newCollaborator) => {
                                    props.setCollaborator(newCollaborator);
                                }}
                                disablePortal
                                id="combo-box-demo"
                                options={users}
                                sx={{ width: 200 }}
                                renderInput={(params) => <TextField {...params} label={t('app:stats:attendance.search')} />}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item md={3}>
                <Grid container direction={"column"} justifyContent={"space-around"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: 'secondary' }}>Dates</Typography>
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterMoment} locale={'fr'}>
                            <DatePicker
                                label={t('app:stats:attendance.start')}
                                value={props.startDate}
                                onChange={(newValue) => {
                                    props.setStartDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={3}>
                <Grid container direction={"column"} justifyContent={"space-around"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: 'white' }}> a</Typography>
                    </Grid>

                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterMoment} locale={'fr'}>
                            <DatePicker
                                label={t('app:stats:attendance.end')}
                                value={props.endDate}
                                onChange={(newValue) => {
                                    props.setEndDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Grid>

        </Grid >

    )
}

export default FilterBar;