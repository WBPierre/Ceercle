import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {Chip, InputBase, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import moment from "moment";

function FilterBar(props) {

    const [team, setTeam] = useState(0);
    const [type, setType] = useState(-1);
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setTeam(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.handleFilters({ search: search, team: team, type: type });
    }, [search, team, type]);


    if(props.week.length === 0){
        return (<div/>)
    }
    return (
        <Grid container direction={"row"} justifyContent={"space-around"}>
            <Grid item xs={3}>
                <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                    <FormControl sx={{ width: 150, borderBottom: 'none' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <InputBase id="input-with-sx" placeholder={"Recherche"} variant="standard" onChange={handleChangeSearch} fullWidth value={search} />
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </Box>
                    </FormControl>
                } />
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{color:'#1F4E79'}}>Equipe</Typography>
                    </Grid>
                    <Grid item>
                        <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                            <FormControl fullWidth sx={{ width: 150 }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={team}
                                    onChange={handleChange}
                                    disabled={false}
                                    variant={"standard"}
                                    input={<InputBase />}
                                >
                                    <MenuItem value={0}>Toutes les équipes</MenuItem>
                                    <MenuItem value={1}>RH</MenuItem>
                                    <MenuItem value={2}>Comptabilité</MenuItem>
                                    <MenuItem value={3}>Tech</MenuItem>
                                    <MenuItem value={4}>Opérations</MenuItem>
                                </Select>
                            </FormControl>
                        } />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{color:'#1F4E79'}}>Statut</Typography>
                    </Grid>
                    <Grid item>
                        <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                            <FormControl fullWidth sx={{ width: 150 }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    onChange={handleChangeType}
                                    input={<InputBase />}
                                >
                                    <MenuItem value={-1}>Partout</MenuItem>
                                    <MenuItem value={1}>Au bureau</MenuItem>
                                    <MenuItem value={2}>Télétravail</MenuItem>
                                    <MenuItem value={3}>En déplacement</MenuItem>
                                    <MenuItem value={4}>Off</MenuItem>
                                    <MenuItem value={0}>Non déclaré</MenuItem>
                                </Select>
                            </FormControl>
                        } />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{color:'#1F4E79'}}>Semaine</Typography>
                    </Grid>
                    <Grid item>
                        <Paper style={{padding:5}} elevation={0}>
                            {`${moment(props.week[0].day).date()} ${moment(props.week[0].day).locale('fr').format('MMMM')} - ${moment(props.week[4].day).date()} ${moment(props.week[4].day).locale('fr').format('MMMM')}`}
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </Grid >

    )
}

export default FilterBar;