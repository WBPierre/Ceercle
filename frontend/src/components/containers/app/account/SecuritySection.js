import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import SettingSectionTemplate from './SettingSectionTemplate';
import { Button, Divider } from "@mui/material";

export default function SecuritySection(props) {


    const currentPassword = "password"

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
    const save = () => {
        enqueueSnackbar('Paramètres enregistrés.', {
            variant: 'success'
        });
    }

    const cancel = () => {
        enqueueSnackbar('Annulé', {
            variant: 'cancel'
        });
    }



    return (
        <SettingSectionTemplate title="Sécurité" description="Configurez vos identifiants de connextion">
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Ancien mot de passe
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



                <Grid item mt={5}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Nouveau mot de passe
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



                <Grid item mt={5}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Confirmer le mot de passe
                    </Typography>
                </Grid>

                <Grid item>
                    <div hidden={newPasswordConfirmed != newPassword && newPasswordConfirmed != ""}>
                        <FormControl sx={{ width: 300 }} variant="standard">
                            <TextField
                                id="new_confirmed-password"
                                type="password"
                                value={newPasswordConfirmed}
                                onChange={handleChangeNewPasswordConfirmed}
                            />
                        </FormControl>
                    </div>
                    <div hidden={newPasswordConfirmed == newPassword || newPasswordConfirmed == ""}>
                        <FormControl sx={{ width: 300 }} variant="standard">
                            <TextField
                                error
                                id="new_confirmed-password"
                                type="password"
                                value={newPasswordConfirmed}
                                onChange={handleChangeNewPasswordConfirmed}
                                helperText="Mot de passe incorrect"
                            />
                        </FormControl>
                    </div>
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
        </SettingSectionTemplate>
    )
};
