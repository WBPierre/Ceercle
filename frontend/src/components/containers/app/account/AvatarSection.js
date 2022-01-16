import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import example1 from "../../../../assets/images/example/1.jpg";
import banniere2 from "../../../../assets/images/app/banniere3.jpg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';

import SettingSectionTemplate from './SettingSectionTemplate';

export default function AvatarSection(props) {

    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();


    const { enqueueSnackbar } = useSnackbar();
    const save = () => {
        enqueueSnackbar('Image enregistrée.', {
            variant: 'success'
        });
    }

    const cancel = () => {
        enqueueSnackbar('Image supprimée', {
            variant: 'success'
        });
    }

    return (
        <SettingSectionTemplate title="Avatar" description="Ces images apparaitront dans votre profil utilisateur et sont visibles par tous.">
            <Grid container direction="column" spacing={5} >
                <Grid item>
                    <Grid container direction="row">

                        <Grid item md={5} pl={7}>
                            <Avatar src={example1} sx={{ width: 120, height: 120, border: "4px solid white" }} />
                        </Grid>
                        <Grid item md={7}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                        Avatar du profil
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Stack direction="column" spacing={1} width='40%'>
                                        <Chip
                                            label="Supprimer"
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
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        <Grid item md={5}>
                            <img src={banniere2} style={{ height: '80%', width: '80%' }} />
                        </Grid>
                        <Grid item md={7}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                        Bannière
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Stack direction="column" spacing={1} width='40%'>
                                        <Chip
                                            label="Supprimer"
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

                </Grid>
            </Grid >
        </SettingSectionTemplate >
    )
};
