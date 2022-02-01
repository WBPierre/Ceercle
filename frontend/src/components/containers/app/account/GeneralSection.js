import * as React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SettingSectionTemplate from './SettingSectionTemplate';
import UserService from "../../../../services/app/user.service";
import * as App_Routes from "../../../../navigation/app/Routes";

export default function GeneralSection(props) {

    const { t } = useTranslation();

    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();

    const cancel = () => {
        setPosition(props.user.position)
        setPhoneNumber(props.user.phoneNumber)
    }

    const display_teams_names = (teams_list) => {
        let wording = ""
        if (teams_list.length > 0) {
            wording += teams_list[0].name
            let i = 1
            while (i < teams_list.length) {
                wording += " ," + teams_list[i].name
                i += 1
            }
        }
        return wording
    }

    const [position, setPosition] = useState(props.user.position);
    const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);

    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const onChangePosition = (event) => {
        setPosition(event.target.value);
    }

    const validate = () => {
        if (position === '') return false;
        if (phoneNumber === '') return false;
        return true;
    }

    const updateUserInfo = async () => {
        if (validate()) {
            const resources = {
                position: position,
                phoneNumber: phoneNumber
            };
            await UserService.updateUserGeneral(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:account:general.snackbar_success'), {
                        variant: 'success'
                    });
                    navigate(App_Routes.ACCOUNT);
                } else {
                    enqueueSnackbar(t('app:snackbar:error'), {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar(t('app:account:general.snackbar_warning'), {
                variant: 'warning'
            });
        }
    }

    return (
        <SettingSectionTemplate title={t('app:account:general.title')} description={t('app:account:general.subtitle')}>
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('generic:name')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue={props.user.firstName + " " + props.user.lastName}
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:general.related_teams')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue={display_teams_names(props.user.teams)}
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('generic:position')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            id="filled-search"
                            value={position}
                            onChange={onChangePosition}
                            variant="standard"
                        />
                    </FormControl>
                </Grid>


                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('generic:email')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            name="email"
                            defaultValue={props.user.email}
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('generic:phone')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            id="filled-search"
                            onChange={onChangePhoneNumber}
                            value={phoneNumber}
                            variant="standard"
                            name="phone-number"
                        />
                    </FormControl>
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
                                    onClick={updateUserInfo}
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
