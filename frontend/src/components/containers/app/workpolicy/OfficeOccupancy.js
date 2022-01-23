import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import OfficeService from '../../../../services/app/office.service';
import { useEffect, useState } from "react";

import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function OfficeOccupancy(props) {

    const occupancies = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
    const occupancy_0_1 = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

    const offices = [{ "name": "Salle Mozart", "seats": 12, "occupancy": "80%" },
    { "name": "Salle Chopin", "seats": 16, "occupancy": "100%" },
    { "name": "Salle Vivaldi", "seats": 20, "occupancy": "60%" }]

    const [office, setOffice] = React.useState(0);
    const [occupancy, setOccupancy] = React.useState(occupancies.indexOf(offices[0].occupancy, 0));
    const handleChangeOffice = (event) => {
        setOffice(event.target.value);
        setOccupancy(occupancies.indexOf(offices[event.target.value].occupancy, 0));
    };

    const handleChangeOccupancy = (event) => {
        setOccupancy(event.target.value);
    };

    const [officesList, setOfficesList] = React.useState(null);

    async function listOffices() {
        const res = await OfficeService.listOffices();
        setOfficesList(res.data)
        console.log(res.data);
    }

    useEffect(() => {
        listOffices();
    }, []);

    const { enqueueSnackbar } = useSnackbar();

    const save = () => {
        enqueueSnackbar('Paramètres enregistrés.', {
            variant: 'success'
        });
        const resources = {
            officeId: office,
            maxCapacity: occupancy * 10
        };
        console.log(resources)
    }

    const validateOccupancy = () => {
        return true;
    }

    const saveOccupancy = async () => {
        if (validateOccupancy()) {
            const resources = {
                officeId: office,
                maxCapacity: occupancies.indexOf(occupancy) * 100
            };
            console.log(resources)
            await OfficeService.updateUpdateOccupancy(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar('Paramètres enregistrés', {
                        variant: 'success'
                    });
                } else {
                    enqueueSnackbar('Une erreur est survenue', {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar('Veuillez remplir correctement les champs', {
                variant: 'warning'
            });
        }
        listOffices()
    }


    const cancel = () => {
        enqueueSnackbar('Annulé', {
            variant: 'cancel'
        });
        listOffices()
    }


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
                    <Grid container direction="row">
                        <Grid item>
                            <FormControl sx={{ width: 100 }} variant="standard">
                                <Select
                                    value={occupancy}
                                    variant="standard"
                                    onChange={handleChangeOccupancy}
                                >
                                    {occupancies.map((off, index) => {
                                        return (
                                            <MenuItem value={index}>{off}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item mt={1}>
                            <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                                ({Math.round(offices[office].seats * occupancy_0_1[occupancy])} places)
                            </Typography>
                        </Grid>
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
        </SettingSectionTemplate >
    )
};
