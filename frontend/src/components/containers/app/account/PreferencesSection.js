import * as React from 'react';
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment-timezone';
import { useSnackbar } from "notistack";

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import {Button, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import {Switch} from "@mui/material";

import UserService from "../../../../services/app/user.service";
import * as App_Routes from "../../../../navigation/app/Routes";
import ThirdPartyService from "../../../../services/app/thirdparty.service";
import SettingSectionTemplate from './SettingSectionTemplate';
import GoogleCalendarIcon from "../../../molecules/icons/GoogleCalendarIcon";
import OfficeModal from "../dashboard/OfficeBooking/OfficeModal";

export default function PreferencesSection(props) {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    let navigate = useNavigate();
    const timezones = moment.tz.names()

    const [hoursAM, setHoursAM] = React.useState(props.user.defaultWorkingMorningHour);
    const handleChangeHoursAM = (event) => {
        setHoursAM(event.target.value);
    };
    const [minutesAM, setMinutesAM] = React.useState(props.user.defaultWorkingMorningMinutes);
    const handleChangeMinutesAM = (event) => {
        setMinutesAM(event.target.value);
    };
    const [hoursPM, setHoursPM] = React.useState(props.user.defaultWorkingAfternoonHour);
    const handleChangeHoursPM = (event) => {
        setHoursPM(event.target.value);
    };
    const [minutesPM, setMinutesPM] = React.useState(props.user.defaultWorkingAfternoonMinutes);
    const handleChangeMinutesPM = (event) => {
        setMinutesPM(event.target.value);
    };

    const [tz, setTz] = React.useState(timezones.indexOf(props.user.timezone));
    const handleChangeTimezone = (event) => {
        setTz(event.target.value);
    };

    const statuses = [t('app:statuses:to_be_defined'), t('app:statuses:office'), t('app:statuses:home_working')]
    const [mondayStatus, setMondayStatus] = React.useState(props.user.mondayStatus);
    const handleChangeMondayStatus = (event) => {
        setMondayStatus(event.target.value);
    };
    const [tuesdayStatus, setTuesdayStatus] = React.useState(props.user.tuesdayStatus);
    const handleChangeTuesdayStatus = (event) => {
        setTuesdayStatus(event.target.value);
    };
    const [wednesdayStatus, setWednesdayStatus] = React.useState(props.user.wednesdayStatus);
    const handleChangeWednesdayStatus = (event) => {
        setWednesdayStatus(event.target.value);
    };
    const [thursdayStatus, setThursdayStatus] = React.useState(props.user.thursdayStatus);
    const handleChangeThursdayStatus = (event) => {
        setThursdayStatus(event.target.value);
    };
    const [fridayStatus, setFridayStatus] = React.useState(props.user.fridayStatus);
    const handleChangeFridayStatus = (event) => {
        setFridayStatus(event.target.value);
    };

    const [favoriteDesk, setFavoriteDesk] = React.useState(0);
    const [hasFavoriteDesk, setHasFavoriteDesk] = React.useState(false);
    const handleChangeHasFavoriteDesk = (event) => {
        const value = event.target.checked
        if(value){
            setOpenModal(true)
        } else {
            updateFavoriteDeskName(0)
            setFavoriteDesk(0)
        }
        setHasFavoriteDesk(event.target.checked);
    }
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = (deskId) => {
        if(deskId == 0 && favoriteDesk==0){
            setHasFavoriteDesk(false)
            updateFavoriteDeskName(0)
        } else if (deskId !=0) {
            updateFavoriteDeskName(deskId)
            setFavoriteDesk(deskId)
        }
        setOpenModal(false)
    }
    const [favoriteDeskName, setFavoriteDeskName] = React.useState("Pas de bureau favori");
    const updateFavoriteDeskName = (deskId) => {
        if (deskId != 0){
            //get parents of desk id
            // setFavoriteDeskName("Paris | Salle Eiffel")
            setFavoriteDeskName(deskId)
        } else {
            setFavoriteDeskName("Pas de bureau favori")
        }
    }

    const languageOptions = ["Français", "English"]
    const [language, setLanguage] = React.useState(languageOptions.indexOf(props.user.lang));
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    const [googleCalendarConnected, setGoogleCalendarConnected] = useState(false);
    const handleGoogleConnect = async () => {
        const res = await ThirdPartyService.getGoogleUrl();
        window.open(res.data.url, "_blank");
    }
    const handleRemoveGoogleConnect = async () => {
        await ThirdPartyService.removeGoogleCalendar();
        setGoogleCalendarConnected(false);
    }
    const handleGoogleTest = async () => {
        await ThirdPartyService.test();
    }
    useEffect(() => {
        async function verifyGoogleCalendar(){
            await ThirdPartyService.verifyGoogleCalendarConnection().then((res) => {
                if(res.data.connected){
                    setGoogleCalendarConnected(true);
                }else{
                    setGoogleCalendarConnected(false);
                }
            });
        }
        verifyGoogleCalendar();
    }, []);


    const { enqueueSnackbar } = useSnackbar();
    const validate = () => {
        return true;
    }
    const updateUserSettings = async () => {
        if (validate()) {
            const resources = {
                defaultWorkingMorningHour: hoursAM,
                defaultWorkingMorningMinutes: minutesAM,
                defaultWorkingAfternoonHour: hoursPM,
                defaultWorkingAfternoonMinutes: minutesPM,
                timezone: timezones[tz],
                lang: languageOptions[language],
                mondayStatus: mondayStatus,
                tuesdayStatus: tuesdayStatus,
                wednesdayStatus: wednesdayStatus,
                thursdayStatus: thursdayStatus,
                fridayStatus: fridayStatus,
                favoriteDesk: favoriteDesk
            };
            await UserService.updateUserSettings(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:account:preferences.snackbar_success'), {
                        variant: 'success'
                    });
                    if (language === 0) {
                        i18n.changeLanguage("fr");
                    } else {
                        i18n.changeLanguage("en");
                    }
                    navigate(App_Routes.ACCOUNT);
                } else {
                    enqueueSnackbar(t('app:snackbar:error'), {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar(t('app:account:preferences.snackbar_warning'), {
                variant: 'warning'
            });
        }
    }

    const cancel = () => {
        setHoursAM(props.user.defaultWorkingMorningHour);
        setMinutesAM(props.user.defaultWorkingMorningMinutes);
        setHoursPM(props.user.defaultWorkingAfternoonHour);
        setMinutesPM(props.user.defaultWorkingAfternoonMinutes);
        setTz(timezones.indexOf(props.user.timezone));
        setMondayStatus(props.user.mondayStatus);
        setTuesdayStatus(props.user.tuesdayStatus);
        setWednesdayStatus(props.user.wednesdayStatus);
        setThursdayStatus(props.user.thursdayStatus);
        setFridayStatus(props.user.fridayStatus);
        setLanguage(languageOptions.indexOf(props.user.lang));
    }

    return (
        <SettingSectionTemplate title={t('app:account:preferences.title')} description={t('app:account:preferences.subtitle')}>

            <OfficeModal open={openModal} favoriteDesk={favoriteDesk} day={moment().add(1001, 'days').format('YYYY-MM-DD')} booking={[]} handleClose={handleCloseModal}/>

            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:preferences.default_hours')}
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid container direction="row" alignItems="center">
                        <Grid item md={5}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">{t('app:account:preferences.hours')}</InputLabel>
                                        <Select
                                            id="demo-customized-select-native"
                                            value={hoursAM}
                                            onChange={handleChangeHoursAM}
                                        >
                                            <MenuItem value={0}>00</MenuItem>
                                            <MenuItem value={1}>01</MenuItem>
                                            <MenuItem value={2}>02</MenuItem>
                                            <MenuItem value={3}>03</MenuItem>
                                            <MenuItem value={4}>04</MenuItem>
                                            <MenuItem value={5}>05</MenuItem>
                                            <MenuItem value={6}>06</MenuItem>
                                            <MenuItem value={7}>07</MenuItem>
                                            <MenuItem value={8}>08</MenuItem>
                                            <MenuItem value={9}>09</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">{t('app:account:preferences.minutes')}</InputLabel>
                                        <Select
                                            id="demo-customized-select-native"
                                            value={minutesAM}
                                            onChange={handleChangeMinutesAM}
                                        >
                                            <MenuItem value={0}>00</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                            <MenuItem value={30}>30</MenuItem>
                                            <MenuItem value={45}>45</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                                        AM
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={5}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">{t('app:account:preferences.hours')}</InputLabel>
                                        <Select
                                            id="demo-customized-select-native"
                                            value={hoursPM}
                                            onChange={handleChangeHoursPM}
                                        >
                                            <MenuItem value={0}>00</MenuItem>
                                            <MenuItem value={1}>01</MenuItem>
                                            <MenuItem value={2}>02</MenuItem>
                                            <MenuItem value={3}>03</MenuItem>
                                            <MenuItem value={4}>04</MenuItem>
                                            <MenuItem value={5}>05</MenuItem>
                                            <MenuItem value={6}>06</MenuItem>
                                            <MenuItem value={7}>07</MenuItem>
                                            <MenuItem value={8}>08</MenuItem>
                                            <MenuItem value={9}>09</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>

                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">{t('app:account:preferences.minutes')}</InputLabel>
                                        <Select
                                            id="demo-customized-select-native"
                                            value={minutesPM}
                                            onChange={handleChangeMinutesPM}
                                        >
                                            <MenuItem value={0}>00</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                            <MenuItem value={30}>30</MenuItem>
                                            <MenuItem value={45}>45</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                                        PM
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Status par défaut
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={2}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements:Mon')}</InputLabel>
                                <Select
                                    id="demo-customized-select-native"
                                    value={mondayStatus}
                                    onChange={handleChangeMondayStatus}
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
                                    value={tuesdayStatus}
                                    onChange={handleChangeTuesdayStatus}
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
                                    value={wednesdayStatus}
                                    onChange={handleChangeWednesdayStatus}
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
                                    value={thursdayStatus}
                                    onChange={handleChangeThursdayStatus}
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
                                    value={fridayStatus}
                                    onChange={handleChangeFridayStatus}
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
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Bureau favori
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={4}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>{t('generic:no')}</Typography>
                                <Switch value={hasFavoriteDesk} checked={hasFavoriteDesk} onChange={handleChangeHasFavoriteDesk} name={"SwitchFavoriteDesk"} color='secondary' />
                                <Typography>{t('generic:yes')}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={5}>
                            { hasFavoriteDesk ? 
                                <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#000000' }}>
                                    {favoriteDeskName}
                                </Typography>
                                :
                                <Typography variant="body" fontWeight={300} fontSize={17} style={{ color: '#414040' }} fontStyle="italic">
                                    {favoriteDeskName}
                                </Typography>
                            } 
                        </Grid>
                        <Grid item xs={3}>
                            <Chip
                                disabled={!hasFavoriteDesk}
                                label={t('generic:update')}
                                sx={{ width: '100%', borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                color="error"
                                icon={<SettingsIcon />}
                                variant="outlined"
                                onClick={handleOpenModal}
                            />
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:preferences.timezone')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <Select
                            id="demo-customized-select-native"
                            value={tz}
                            onChange={handleChangeTimezone}
                        >
                            {timezones.map((tz, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{tz}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:preferences.language')}
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard">
                        <Select
                            id="demo-customized-select-native"
                            value={language}
                            onChange={handleChangeLanguage}
                        >
                            {languageOptions.map((lang, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{lang}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item mt={6}>
                    {!googleCalendarConnected ? (
                        <FormControl sx={{ width: 400 }} variant="standard">
                            <Button variant={"outlined"} startIcon={<GoogleCalendarIcon/>} color={"secondary"} onClick={() => handleGoogleConnect()}>{t('app:account:preferences.connect_my_google_calendar')}</Button>
                        </FormControl>
                    ):(
                        <List style={{maxWidth:'400px'}}>
                            <ListItem secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveGoogleConnect()}>
                                    <CancelIcon />
                                </IconButton>
                            }>
                                <ListItemAvatar>
                                    <GoogleCalendarIcon/>
                                </ListItemAvatar>
                                <ListItemText primary={t('app:account:preferences.google_calendar_connected')} primaryTypographyProps={{fontSize: 16, fontWeight:500, marginTop:0}}/>
                            </ListItem>
                        </List>
                    )}
                </Grid>




                <Grid item mt={6} hidden={true}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        {t('app:account:preferences.default_statuses')}
                    </Typography>
                </Grid>

                <Grid item hidden={true}>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements.Mon')}</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={mondayStatus}
                            onChange={handleChangeMondayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item hidden={true}>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements.Tue')}</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={tuesdayStatus}
                            onChange={handleChangeTuesdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item hidden={true}>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements.Wed')}</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={wednesdayStatus}
                            onChange={handleChangeWednesdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item hidden={true}>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements.Thu')}</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={thursdayStatus}
                            onChange={handleChangeThursdayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item hidden={true}>
                    <FormControl sx={{ width: 200 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">{t('app:date_elements.Fri')}</InputLabel>
                        <Select
                            id="demo-customized-select-native"
                            value={fridayStatus}
                            onChange={handleChangeFridayStatus}
                        >
                            {statuses.map((status, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{status}</MenuItem>
                                )
                            }
                            )}
                        </Select>
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
                                    onClick={updateUserSettings}
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
