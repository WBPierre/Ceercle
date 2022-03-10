import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from "react-i18next";
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Grid from "@mui/material/Grid";
import { Divider, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import UserService from "../../../../services/app/user.service";
import TeamService from "../../../../services/app/team.service";
import { useSnackbar } from "notistack";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function UserRulesModal(props) {
    const { t } = useTranslation();

    const daysWorked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const statuses = [t('app:statuses:free'), t('app:statuses:office'), t('app:statuses:home_working')]
    const scopes = [t('app:rh_parameters:company.week'), t('app:rh_parameters:company.month')]
    const [ruleScope, setRuleScope] = React.useState(0);
    const handleScope = (event) => {
        setRuleScope(event.target.value);
    };
    const [remoteMaximum, setRemoteMaximum] = React.useState(0);
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

    async function getUserRules(userId) {
        const res = await UserService.getUserRules(userId);
        setRuleScope(res.data.ruleScope);
        setRemoteMaximum(res.data.remoteMaximum);
        setOfficeMaximum(res.data.officeMaximum);
        setMondayMandatoryStatus(res.data.mondayMandatoryStatus);
        setTuesdayMandatoryStatus(res.data.tuesdayMandatoryStatus);
        setWednesdayMandatoryStatus(res.data.wednesdayMandatoryStatus);
        setThursdayMandatoryStatus(res.data.thursdayMandatoryStatus);
        setFridayMandatoryStatus(res.data.fridayMandatoryStatus);
    }

    useEffect(() => {
        getUserRules(props.userId);
    }, [props.userId, props.openModal]);


    const { enqueueSnackbar } = useSnackbar();

    const validateUserRules = () => {
        if (remoteMaximum > 5 && ruleScope === 0) return false;
        if (officeMaximum > 5 && ruleScope === 0) return false;
        if ((officeMaximum + remoteMaximum) < 5 && ruleScope === 0) return false;
        if ((officeMaximum + remoteMaximum) < 20 && ruleScope === 1) return false;
        return true;
    }

    const saveUserRules = async () => {
        if (validateUserRules()) {
            const resources = {
                userId: props.userId,
                ruleScope: ruleScope,
                remoteMaximum: remoteMaximum,
                officeMaximum: officeMaximum,
                mondayMandatoryStatus: mondayMandatoryStatus,
                tuesdayMandatoryStatus: tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: wednesdayMandatoryStatus,
                thursdayMandatoryStatus: thursdayMandatoryStatus,
                fridayMandatoryStatus: fridayMandatoryStatus
            };
            await UserService.updateRulesValue(resources).then(async (res) => {
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

    const confirmUpdateRules = async () => {
        await saveUserRules()
        props.handleModalClose(true)
    };

    const closeModal = () => {
        props.handleModalClose(false)
    };

    return (
        <Modal
            open={props.openModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container direction={"column"} spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={500} fontSize={20} style={{ color: '#383737'}}>
                        Règles spécifiques - {props.userName}
                    </Typography>
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
                            <FormControl sx={{ m: 1, width: 90 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:statuses:home_working')}</InputLabel>
                                <Select
                                    id="remoteMaximum"
                                    value={remoteMaximum}
                                    onChange={handleRemoteMaximum}
                                >
                                    {daysWorked.filter((day, index) => (day < 6) || (day > 5 && ruleScope === 1)).map((day, index) => {
                                        return (
                                            <MenuItem value={index} key={index}>{day}</MenuItem>
                                        )
                                    }
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3}>
                            <FormControl sx={{ m: 1, width: 90 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:statuses:office')}</InputLabel>
                                <Select
                                    id="officeMaximum"
                                    value={officeMaximum}
                                    onChange={handleOfficeMaximum}
                                >
                                    {daysWorked.filter((day, index) => (day < 6) || (day > 5 && ruleScope === 1)).map((day, index) => {
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
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={2}>
                            <FormControl variant="standard">
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

                        <Grid item xs={2}>
                            <FormControl variant="standard">
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

                        <Grid item xs={2}>
                            <FormControl variant="standard">
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

                        <Grid item xs={2}>
                            <FormControl variant="standard">
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

                        <Grid item xs={2}>
                            <FormControl variant="standard">
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

                    <Grid item mt={4}>

                        <Grid container direction="row">
                            <Grid item md={6}/>
                            <Grid item md={6}>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        label={t('generic:cancel')}
                                        sx={{
                                            borderColor: "#3C3B3D", color: "#3C3B3D", fontWeight: "bold"
                                        }}
                                        color="error"
                                        onClick={closeModal}
                                        icon={<CancelIcon />}
                                        variant="outlined"
                                    />
                                    <Chip
                                        label="Confirmer"
                                        sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                        color="error"
                                        onClick={confirmUpdateRules}
                                        icon={<CheckCircleIcon />}
                                        variant="outlined"
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
}

export default UserRulesModal;