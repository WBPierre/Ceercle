import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

function FilterBar(){
    const names = [
        'Toutes les équipes',
        'RH',
        'Comptabilité',
        'Marketing',
        'Tech'
    ];

    const types = [
        'Partout',
        'Au bureau',
        'En télétravail',
        'En déplacement'
    ]

    const [teamName, setTeamName] = useState(['Toutes les équipes']);
    const [typeName, setTypeName] = useState(['Partout']);

    const handleChangeTeam = (event) => {
        const {
            target: { value },
        } = event;
        setTeamName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeType = (event) => {
        const {
            target: { value },
        } = event;
        setTypeName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return(
        <Paper>
            <Grid container direction={"row"} justifyContent={"space-around"} spacing={2}>
                <Grid item>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TextField id="input-with-sx" label="Search" variant="standard" fullWidth/>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </Box>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Teams</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={teamName}
                            onChange={handleChangeTeam}
                            input={<OutlinedInput label="Teams" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={teamName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Depuis</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={typeName}
                            onChange={handleChangeType}
                            input={<OutlinedInput label="Teams" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {types.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={typeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default FilterBar;