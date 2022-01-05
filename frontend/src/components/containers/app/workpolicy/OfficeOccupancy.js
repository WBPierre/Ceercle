import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function OfficeOccupancy(props) {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const offices = [{ "name": "Salle Mozart", "seats": 12, "occupancy": "80%" },
    { "name": "Salle Chopin", "seats": 16, "occupancy": "100%" },
    { "name": "Salle Vivaldi", "seats": 20, "occupancy": "60%" }]

    const [office, setOffice] = React.useState(0);
    const handleChangeOffice = (event) => {
        setOffice(event.target.value);
    };

    const occupancies = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]

    return (
        <SettingSectionTemplate title="Occupation des salles de travail" description="Paramétrez les taux d'occupation des espaces de travail et permettez à chaque employé de profiter d'un environnement de travail sain et organisé.">
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Salle de travail
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        <Grid item>
                            <FormControl sx={{ mr: 1, width: 200 }} variant="standard">
                                <Select
                                    id="demo-customized-select-native"
                                    value={office}
                                    onChange={handleChangeOffice}
                                >
                                    {offices.map((off, index) => {
                                        return (
                                            <MenuItem value={index}>{off.name}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item mt={1}>
                            <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                                ({offices[office].seats} places)
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Taux d'occupation
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 100 }} variant="standard" disabled>
                        <Autocomplete
                            disableClearable
                            id="tags-standard"
                            options={occupancies}
                            value={offices[office].occupancy}
                            renderInput={(params) => <TextField variant="standard" {...params} />}
                            variant="standard"
                        />
                    </FormControl>
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
