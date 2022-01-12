import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Chip, InputBase, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

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



    return (
        <Grid container direction={"row"} justifyContent={"space-around"} spacing={2}>
            <Grid item>
                <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                    <FormControl sx={{ width: 300, borderBottom: 'none' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <InputBase id="input-with-sx" placeholder={"Recherche"} variant="standard" onChange={handleChangeSearch} fullWidth value={search} />
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </Box>
                    </FormControl>
                } />
            </Grid>
            <Grid item>
                <Chip component={FormControl} style={{ backgroundColor: 'white', borderColor: '#3F07A8' }} variant={"outlined"} label={
                    <FormControl fullWidth sx={{ width: 300 }}>
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
            <Grid item>
                <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                    <FormControl fullWidth sx={{ width: 300 }}>
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
        </Grid >

    )
}

export default FilterBar;