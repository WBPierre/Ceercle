import * as React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import CompanyService from '../../../../services/app/company.service';



import SettingSectionTemplate from '../account/SettingSectionTemplate';
import {Switch} from "@mui/material";

export default function CompanyRules() {

    const { t } = useTranslation();

    const daysWorked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const statuses = [t('app:statuses:free'), t('app:statuses:office'), t('app:statuses:home_working')]
    const scopes = [t('app:rh_parameters:company.week'), t('app:rh_parameters:company.month')]

    const [ruleScope, setRuleScope] = React.useState(0);
    const handleScope = (event) => {
        setRuleScope(event.target.value);
    };

    const [remoteMaximum, setRemoteMaximum] = React.useState(null);
    const handleRemoteMaximum = (event) => {
        setRemoteMaximum(event.target.value);
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

    const [restrictiveRules, setRestrictiveRules] = React.useState(false);
    const handleChangeRestrictiveRules = (event) => {
        setRestrictiveRules(event.target.checked);
    }


    async function getHRRules() {
        const res = await CompanyService.getHRRules();
        setRuleScope(res.data.ruleScope)
        setRemoteMaximum(res.data.remoteMaximum);
        setOfficeMaximum(res.data.officeMaximum);
        setRestrictiveRules(res.data.restrictiveRules);
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
        if (remoteMaximum > 5 && ruleScope == 0) return false;
        if (officeMaximum > 5 && ruleScope == 0) return false;
        if ((officeMaximum + remoteMaximum) < 5 && ruleScope == 0) return false;
        if ((officeMaximum + remoteMaximum) < 20 && ruleScope == 1) return false;
        return true;
    }

    const saveHRRules = async () => {
        if (validateHRRules()) {
            const resources = {
                ruleScope: ruleScope,
                remoteMaximum: remoteMaximum,
                officeMaximum: officeMaximum,
                restrictiveRules: restrictiveRules,
                mondayMandatoryStatus: mondayMandatoryStatus,
                tuesdayMandatoryStatus: tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: wednesdayMandatoryStatus,
                thursdayMandatoryStatus: thursdayMandatoryStatus,
                fridayMandatoryStatus: fridayMandatoryStatus
            };
            await CompanyService.updateHRRules(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:rh_parameters:company.snackbar_success'), {
                        variant: 'success'
                    });
                } else {
                    enqueueSnackbar(t('app:snackbar:error'), {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar(t('app:rh_parameters:company.snackbar_warning'), {
                variant: 'warning'
            });
        }
    }

    const cancel = () => {
        getHRRules();
    }

    if (remoteMaximum === null) {
        return (< SettingSectionTemplate title={t('app:rh_parameters:company.title')} description={t('app:rh_parameters:company.subtitle')} />)
    }
    return (
        <SettingSectionTemplate title={t('app:rh_parameters:company.title')} description={t('app:rh_parameters:company.subtitle')}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#2A2828' }}>
                        {t('app:rh_parameters:company.company_level_info')}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body" fontWeight={400} fontSize={14} style={{ color: '#2A2828' }}>
                        {t('app:rh_parameters:company.warning')}
                    </Typography>
                </Grid>

                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                        {t('app:rh_parameters:company.restrictive')}
                    </Typography>
                </Grid>

                <Grid item mt={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>{t('generic:no')}</Typography>
                        <Switch value={restrictiveRules} checked={restrictiveRules} onChange={handleChangeRestrictiveRules} name={"restrictiveRules"} />
                        <Typography>{t('generic:yes')}</Typography>
                    </Stack>
                </Grid>


                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040', fontStyle: "italic" }}>
                        {t('app:rh_parameters:company.max_days')}
                    </Typography>
                </Grid>

                <Grid item mt={1}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item md={3}>
                            <FormControl sx={{ m: 1, width: 100 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:rh_parameters:company:scope')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={ruleScope}
                                    onChange={handleScope}
                                >
                                    {scopes.map((scope, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{scope}</MenuItem>
                                        )
                                    }
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item md={3}>
                            <FormControl sx={{ m: 1, width: 70 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:statuses:home_working')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={remoteMaximum}
                                    onChange={handleRemoteMaximum}
                                >
                                    {daysWorked.filter((day, index) => (day < 6) || (day > 5 && ruleScope == 1)).map((day, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{day}</MenuItem>
                                        )
                                    }
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3}>
                            <FormControl sx={{ m: 1, width: 70 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:statuses:office')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={officeMaximum}
                                    onChange={handleOfficeMaximum}
                                >
                                    {daysWorked.filter((day, index) => (day < 6) || (day > 5 && ruleScope == 1)).map((day, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{day}</MenuItem>
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
                        {t('app:rh_parameters:company.set_up_by_day')}
                    </Typography>
                </Grid>

                <Grid item mt={1}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <FormControl sx={{ width: 200 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Mon')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={mondayMandatoryStatus}
                                    onChange={handleChangeMondayStatusCompany}
                                >
                                    {statuses.map((status, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{status}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl sx={{ width: 200 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Tue')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={tuesdayMandatoryStatus}
                                    onChange={handleChangeTuesdayStatusCompany}
                                >
                                    {statuses.map((status, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{status}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl sx={{ width: 200 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Wed')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={wednesdayMandatoryStatus}
                                    onChange={handleChangeWednesdayStatusCompany}
                                >
                                    {statuses.map((status, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{status}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl sx={{ width: 200 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Thu')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={thursdayMandatoryStatus}
                                    onChange={handleChangeThursdayStatusCompany}
                                >
                                    {statuses.map((status, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{status}</MenuItem>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl sx={{ width: 200 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Fri')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={fridayMandatoryStatus}
                                    onChange={handleChangeFridayStatusCompany}
                                >
                                    {statuses.map((status, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{status}</MenuItem>
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
