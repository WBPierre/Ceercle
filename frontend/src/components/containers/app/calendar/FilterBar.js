import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

function FilterBar(props){

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
        props.handleFilters({search: search, team: team, type: type});
    }, [search, team, type]);



    return(
        <Paper>
            <Grid container direction={"row"} justifyContent={"space-around"} spacing={2}>
                <Grid item>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TextField id="input-with-sx" label="Recherche" variant="standard" onChange={handleChangeSearch} fullWidth value={search}/>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </Box>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-simple-select-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            label="Team"
                            onChange={handleChange}
                            disabled
                        >
                            <MenuItem value={0}>Toutes les équipes</MenuItem>
                            <MenuItem value={1}>RH</MenuItem>
                            <MenuItem value={2}>Comptabilité</MenuItem>
                            <MenuItem value={3}>Tech</MenuItem>
                            <MenuItem value={4}>Opérations</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-simple-select-label">Depuis</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Depuis"
                            onChange={handleChangeType}
                        >
                            <MenuItem value={-1}>Partout</MenuItem>
                            <MenuItem value={1}>Au bureau</MenuItem>
                            <MenuItem value={2}>Télétravail</MenuItem>
                            <MenuItem value={3}>En déplacement</MenuItem>
                            <MenuItem value={0}>Non déclaré</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default FilterBar;