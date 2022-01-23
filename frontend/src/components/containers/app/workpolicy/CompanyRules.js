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
import { Divider } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CompanyService from '../../../../services/app/company.service';



import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function CompanyRules() {

    const { t } = useTranslation();

    const daysWorked = [0, 1, 2, 3, 4, 5]
    const statuses = ["Libre", "Au bureau", "En télétravail", "En déplacement", "Off"]

    const [officeMinimum, setOfficeMinimum] = React.useState(null);
    const handleOfficeMinimum = (event) => {
        setOfficeMinimum(event.target.value);
    };

    const [officeMaximum, setOfficeMaximum] = React.useState(0);
    const handleOfficeMaximum = (event) => {
        setOfficeMaximum(event.target.value);
    };

    const [mondayMandatoryStatus, setMondayMandatoryStatus] = React.useState(0);
    const handleChangeMondayStatusCompany = (event) => {
        setMondayMandatoryStatus(event.target.value);
    };

    const [tuesdayMandatoryStatus, setTuesdayMandatoryStatus] = React.useState(0);
    const handleChangeTuesdayStatusCompany = (event) => {
        setTuesdayMandatoryStatus(event.target.value);
    };

    const [wednesdayMandatoryStatus, setWednesdayMandatoryStatus] = React.useState(0);
    const handleChangeWednesdayStatusCompany = (event) => {
        setWednesdayMandatoryStatus(event.target.value);
    };

    const [thursdayMandatoryStatus, setThursdayMandatoryStatus] = React.useState(0);
    const handleChangeThursdayStatusCompany = (event) => {
        setThursdayMandatoryStatus(event.target.value);
    };

    const [fridayMandatoryStatus, setFridayMandatoryStatus] = React.useState(0);
    const handleChangeFridayStatusCompany = (event) => {
        setFridayMandatoryStatus(event.target.value);
    };


    async function getHRRules() {
        const res = await CompanyService.getHRRules();
        setOfficeMinimum(res.data.officeMinimum);
        setOfficeMaximum(res.data.officeMaximum);
        setMondayMandatoryStatus(res.data.mondayMandatoryStatus);
        setTuesdayMandatoryStatus(res.data.tuesdayMandatoryStatus);
        setWednesdayMandatoryStatus(res.data.wednesdayMandatoryStatus);
        setThursdayMandatoryStatus(res.data.thursdayMandatoryStatus);
        setFridayMandatoryStatus(res.data.fridayMandatoryStatus);
    }

    useEffect(() => {
        getHRRules();
    }, []);


    const { enqueueSnackbar } = useSnackbar();

    const validateHRRules = () => {
        if (officeMinimum > officeMaximum) return false;
        return true;
    }

    const saveHRRules = async () => {
        if (validateHRRules()) {
            const resources = {
                officeMinimum: officeMinimum,
                officeMaximum: officeMaximum,
                mondayMandatoryStatus: mondayMandatoryStatus,
                tuesdayMandatoryStatus: tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: wednesdayMandatoryStatus,
                thursdayMandatoryStatus: thursdayMandatoryStatus,
                fridayMandatoryStatus: fridayMandatoryStatus
            };
            await CompanyService.updateHRRules(resources).then(async (res) => {
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
            enqueueSnackbar('Attention, le nombre de jours travaillés minimum est supérieur au nombre de jours travaillés maximum.', {
                variant: 'warning'
            });
        }
    }

    const cancel = () => {
        enqueueSnackbar('Annulé', {
            variant: 'cancel'
        });
        getHRRules();
    }

    if (officeMinimum === null) {
        return (< SettingSectionTemplate title="Règles de travail hybride" description="Définissez vos règles de travail hybride, à l'échelle de l'entreprise ou des équipes." />)
    }
    return (
        <SettingSectionTemplate title="Règles de travail hybride" description="Définissez vos règles de travail hybride, à l'échelle de l'entreprise ou des équipes.">
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#2A2828' }}>
                        Pour l'entreprise
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body" fontWeight={400} fontSize={14} style={{ color: '#2A2828' }}>
                        Attention, ces réglages remplaceront les règles spécifiques à chaque équipe.
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
                            <FormControl sx={{ m: 1, width: 70 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">Minimum</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={officeMinimum}
                                    onChange={handleOfficeMinimum}
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
                            <FormControl sx={{ m: 1, width: 70 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">Maximum</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={officeMaximum}
                                    onChange={handleOfficeMaximum}
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
                                    value={mondayMandatoryStatus}
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
                                    value={tuesdayMandatoryStatus}
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
                                    value={wednesdayMandatoryStatus}
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
                                    value={thursdayMandatoryStatus}
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
                                    value={fridayMandatoryStatus}
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
                                    onClick={saveHRRules}
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
