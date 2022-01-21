import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Button } from '@mui/material';
import example1 from "../../../../assets/images/example/1.jpg";
import banniere2 from "../../../../assets/images/app/banniere3.jpg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';

import SettingSectionTemplate from './SettingSectionTemplate';
import { useEffect, useState } from "react";
import UserService from "../../../../services/app/user.service";

export default function AvatarSection(props) {

    const [profilePicture, setProfilePicture] = useState('');
    const [bannerPicture, setBannerPicture] = useState('');

    const changeHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        UserService.uploadProfile(formData).then((res) => {
            setProfilePicture(res.data.path);
        })
    }

    const changeBannerHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        UserService.uploadBanner(formData).then((res) => {
            setBannerPicture(res.data.path);
        })
    }

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
                            <Avatar src={profilePicture === '' ? example1 : profilePicture} sx={{ width: 120, height: 120, border: "4px solid white" }} />
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
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            type="file"
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="raised-button-file">
                                            <Chip
                                                clickable={true}
                                                label="Modifier"
                                                sx={{ width: '100%', borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                                color="error"
                                                icon={<CheckCircleIcon />}
                                                variant="outlined"
                                            />
                                        </label>

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
                                    </Stack>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        <Grid item md={5}>
                            <img src={bannerPicture === '' ? banniere2 : bannerPicture} style={{ height: '80%', width: '80%' }} />
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
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="raised-button-file-two"
                                            type="file"
                                            onChange={changeBannerHandler}
                                        />
                                        <label htmlFor="raised-button-file-two">
                                            <Chip
                                                clickable={true}
                                                label="Modifier"
                                                sx={{ width: '100%', borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                                color="error"
                                                icon={<CheckCircleIcon />}
                                                variant="outlined"
                                            />
                                        </label>

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
