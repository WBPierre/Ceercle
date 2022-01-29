import * as React from 'react';
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import OfficeService from '../../../../services/app/office.service';
import { useEffect } from "react";

import SettingSectionTemplate from '../account/SettingSectionTemplate';

export default function OfficeOccupancy() {

    const { t } = useTranslation();

    const occupancies = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
    const occupancy_0_1 = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

    const [office, setOffice] = React.useState(0);
    const [occupancy, setOccupancy] = React.useState(0);
    const handleChangeOffice = (event) => {
        setOffice(event.target.value);
        setOccupancy(parseInt(officesList[event.target.value].maxCapacity / 10));
    };

    const handleChangeOccupancy = (event) => {
        setOccupancy(event.target.value);
    };

    const [officesList, setOfficesList] = React.useState([{ "name": " ", "capacity": 10, "occupancy": "100%" }]);

    async function listOffices() {
        const res = await OfficeService.listOffices();
        setOfficesList(res.data)
        setOccupancy(parseInt(res.data[office].maxCapacity / 10))
    }

    useEffect(() => {
        listOffices();
    }, []);

    const { enqueueSnackbar } = useSnackbar();

    const validateOccupancy = () => {
        return true;
    }

    const saveOccupancy = async () => {
        if (validateOccupancy()) {
            const resources = {
                officeId: officesList[office].id,
                maxCapacity: occupancy * 10
            };
            await OfficeService.updateOccupancy(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:rh_parameters:offices.snackbar_success'), {
                        variant: 'success'
                    });
                } else {
                    enqueueSnackbar(t('app:snackbar:error'), {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar(t('app:rh_parameters:offices.snackbar_warning'), {
                variant: 'warning'
            });
        }
        listOffices()
    }


    const cancel = () => {
        listOffices()
    }

    if (officesList == null) {
        <SettingSectionTemplate title={t('app:rh_parameters:offices.title')} description={t('app:rh_parameters:offices.subtitle')}></SettingSectionTemplate>
    }

    return (
        <SettingSectionTemplate title={t('app:rh_parameters:offices.title')} description={t('app:rh_parameters:offices.subtitle')}>
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:rh_parameters:offices.room')}
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
                                    {officesList.map((off, index) => {
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
                                ({officesList[office].capacity} {t('app:rh_parameters:offices.seats')})
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:rh_parameters:offices.occupancy')}
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
                                ({Math.round(officesList[office].capacity * occupancy_0_1[occupancy])} {t('app:rh_parameters:offices.seats')})
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
                                    label={t('generic:cancel')}
                                    sx={{
                                        borderColor: "#3C3B3D", color: "#3C3B3D", fontWeight: "bold"
                                    }}
                                    color="error"
                                    onClick={cancel}
                                    icon={<CancelIcon />}
                                    variant="outlined"
                                />
                                <Chip
                                    label={t('generic:save')}
                                    sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                    color="error"
                                    onClick={saveOccupancy}
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
