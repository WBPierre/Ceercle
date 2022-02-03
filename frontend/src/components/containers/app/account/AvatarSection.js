import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material';
import ProfileDefault from "../../../../assets/images/example/default.png";
import BannerDefault from "../../../../assets/images/example/banner_default.jpg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import SettingSectionTemplate from './SettingSectionTemplate';
import { useState } from "react";
import UserService from "../../../../services/app/user.service";

export default function AvatarSection(props) {

    const { t } = useTranslation();

    const [profilePicture, setProfilePicture] = useState(props.user.profilePicturePath);
    const [bannerPicture, setBannerPicture] = useState(props.user.bannerPath);

    const changeHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        UserService.uploadProfile(formData).then((res) => {
            setProfilePicture(res.data.path);
        }).catch((err) => {
            enqueueSnackbar(t('app:errors:max_file'), {
                variant: 'warning'
            });
        })
    }

    const changeBannerHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        UserService.uploadBanner(formData).then((res) => {
            setBannerPicture(res.data.path);
        }).catch((err) => {
            enqueueSnackbar(t('app:errors:max_file'), {
                variant: 'warning'
            });
        })
    }

    const { enqueueSnackbar } = useSnackbar();
    const save = () => {
        enqueueSnackbar(t('app:account:avatar.snackbar_save'), {
            variant: 'success'
        });
    }

    const cancel = () => {
        enqueueSnackbar(t('app:account:avatar.snackbar_delete'), {
            variant: 'success'
        });
    }

    return (
        <SettingSectionTemplate title={t('app:account:avatar.title')} description={t('app:account:avatar.subtitle')}>
            <Grid container direction="column" spacing={5} >
                <Grid item>
                    <Grid container direction="row">
                        <Grid item md={5} pl={7}>
                            <Avatar src={profilePicture === null ? ProfileDefault : profilePicture} sx={{ width: 120, height: 120 }} />
                        </Grid>
                        <Grid item md={7}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                        {t('app:account:avatar.avatar_profile')}
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
                                                label={t('generic:update')}
                                                sx={{ width: '100%', borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                                color="error"
                                                icon={<CheckCircleIcon />}
                                                variant="outlined"
                                            />
                                        </label>
                                    </Stack>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        <Grid item md={5}>
                            <img src={bannerPicture === null ? BannerDefault : bannerPicture} style={{ height: '80%', width: '80%' }} />
                        </Grid>
                        <Grid item md={7}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="body" fontWeight={600} fontSize={15} style={{ color: '#414040' }}>
                                        {t('app:account:avatar.banner')}
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
                                                label={t('generic:update')}
                                                sx={{ width: '100%', borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                                color="error"
                                                icon={<CheckCircleIcon />}
                                                variant="outlined"
                                            />
                                        </label>
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
