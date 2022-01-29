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
import UserService from "../../../../services/app/user.service";
import SettingSectionTemplate from './SettingSectionTemplate';

export default function SecuritySection(props) {

    const { t } = useTranslation();

    const [currentTruePassword, setCurrentTruePassword] = React.useState("");
    const handleChangeCurrentTruePassword = (event) => {
        setCurrentTruePassword(event.target.value);
    };

    const [newPassword, setNewPassword] = React.useState("");
    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value);
    };

    const [newPasswordConfirmed, setNewPasswordConfirmed] = React.useState("");
    const handleChangeNewPasswordConfirmed = (event) => {
        setNewPasswordConfirmed(event.target.value);
    };

    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();

    const cancel = () => {
        setCurrentTruePassword("")
        setNewPassword("")
        setNewPasswordConfirmed("")

    }

    const validate = () => {
        if (newPasswordConfirmed !== newPassword) return false;
        return true;
    }

    const updateUserPassword = async () => {
        if (validate()) {
            console.log(currentTruePassword)
            console.log(newPasswordConfirmed)
            const resources = {
                oldPassword: currentTruePassword,
                newPassword: newPasswordConfirmed
            };
            await UserService.updateUserPassword(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:account:security.snackbar_success'), {
                        variant: 'success'
                    });
                    navigate('/app/myaccount');
                } else {
                    enqueueSnackbar(t('app:account:security.snackbar_error'), {
                        variant: 'error'
                    });
                }
            }).catch(error => {
                enqueueSnackbar(t('app:account:security.snackbar_error'), {
                    variant: 'error'
                });
            })
        } else {
            enqueueSnackbar(t('app:account:security.snackbar_warning'), {
                variant: 'warning'
            });
        }
        setCurrentTruePassword("")
        setNewPassword("")
        setNewPasswordConfirmed("")
    }


    return (
        <SettingSectionTemplate title={t('app:account:security.title')} description={t('app:account:security.subtitle')}>
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:security.old_password')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <TextField
                            id="old-password"
                            type="password"
                            value={currentTruePassword}
                            onChange={handleChangeCurrentTruePassword}
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:security.new_password')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <TextField
                            id="new-password"
                            type="password"
                            value={newPassword}
                            onChange={handleChangeNewPassword}
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={3}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:security.new_password_confirmed')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <TextField
                            error={newPasswordConfirmed !== newPassword && newPasswordConfirmed !== ""}
                            id="new_confirmed-password"
                            type="password"
                            value={newPasswordConfirmed}
                            onChange={handleChangeNewPasswordConfirmed}
                            helperText={newPasswordConfirmed !== newPassword && newPasswordConfirmed !== "" ? t('app:account:security.snackbar_error') : " "}
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
                                    onClick={updateUserPassword}
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
