import * as React from "react";
import { useTranslation } from "react-i18next";
import TeamService from "../../../../services/app/team.service";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Chip, InputBase, Typography } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from "moment";

function FilterBar(props) {

    const { t } = useTranslation();

    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState([]);

    const [collaborator, setCollaborator] = useState(props.collaborator);
    const [team, setTeam] = useState(props.team);
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);

    const refreshCharts = () => {
        let filters = {
            collaborator: collaborator,
            team: team,
            startDate: startDate,
            endDate: endDate
        }
        props.refreshCharts(filters)
    }

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
        <Grid container direction={"row"} justifyContent={"space-around"}>
            <Grid item xs={3}>
                <Grid item>
                    <Typography fontWeight={500} style={{ color: 'scondary' }}>Equipes</Typography>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ width: 150 }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            onChange={(event, newTeam) => {
                                setTeam(newTeam);
                            }}
                            disabled={false}
                            variant={"standard"}
                            input={<InputBase />}
                        >
                            <MenuItem value={0}>Toutes les équipes</MenuItem>
                            {teams.map((team, index) => {
                                return (
                                    <MenuItem key={index} value={team.id}>{team.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid item>
                    <Typography fontWeight={500} style={{ color: 'secondary' }}>Collaborateur</Typography>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ width: 200 }}>
                        <Autocomplete
                            value={collaborator}
                            onChange={(event, newCollaborator) => {
                                setCollaborator(newCollaborator);
                            }}
                            disablePortal
                            id="combo-box-demo"
                            options={users}
                            sx={{ width: 200 }}
                            renderInput={(params) => <TextField {...params} label="Collaborateur" />}
                        />
                    </FormControl>
                </Grid>

            </Grid>

            <Grid item xs={3}>
                <Grid item>
                    <Typography fontWeight={500} style={{ color: 'secondary' }}>Dates</Typography>
                </Grid>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Début"
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} helperText={params?.inputProps?.placeholder} />
                            )}
                            format="YYYY-MM-DD"
                        />
                    </LocalizationProvider>
                    );
                </Grid>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Fin"
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} helperText={params?.inputProps?.placeholder} />
                            )}
                            format="YYYY-MM-DD"
                        />
                    </LocalizationProvider>
                    );
                </Grid>

            </Grid>
            <Grid item xs={3}>
                <Chip
                    label="Rafraîchir"
                    disabled={value == null}
                    sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                    color="error"
                    onClick={refreshCharts}
                    variant="outlined"
                />

            </Grid>
        </Grid >

    )
}

export default FilterBar;