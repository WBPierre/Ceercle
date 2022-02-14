import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SunIcon from "../../../molecules/icons/SunIcon";
import SunBehindCloudIcon from "../../../molecules/icons/SunBehindCloudIcon";
import SunBehindCloudRainIcon from "../../../molecules/icons/SunBehindCloudRainIcon";
import CloudWithRainIcon from "../../../molecules/icons/CloudWithRainIcon";
import { useEffect, useState } from "react";
import MoodService from "../../../../services/app/mood.service";
import { useSnackbar } from "notistack";

function Mood(props) {

    const { t } = useTranslation();

    const [mood, setMood] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        async function getMood() {
            const res = await MoodService.getMood(props.day);
            setMood(res.data);
        }
        getMood();
    }, []); //eslint-disable-line

    const updateMood = async (type) => {
        const resources = {
            day: props.day,
            type: type
        }
        await MoodService.setMood(resources);
        await MoodService.getMood(props.day).then((res) => {
            setMood(res.data);
        });
        enqueueSnackbar(t('app:dashboard:mood.snackbar_success'), {
            variant: 'success'
        });
    }



    return (
        <Grid container direction={"column"} spacing={2} py={2} px={2}>
            <Grid item xs={12}>
                <Typography variant={"h5"} fontWeight={500}>
                    {t('app:dashboard:mood.my_mood')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={"column"} py={2} spacing={4}>
                    <Grid item xs={12}>
                        <Typography fontWeight={400}>
                            {t('app:dashboard:mood.why_to_fill')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item>
                                <IconButton sx={{ mr: 2 }} onClick={() => updateMood(0)} style={{ border: mood !== null && mood.type === 0 ? '1px solid #2F5597' : 'none' }}>
                                    <SunIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ mr: 2 }} onClick={() => updateMood(1)} style={{ border: mood !== null && mood.type === 1 ? '1px solid #2F5597' : 'none' }}>
                                    <SunBehindCloudIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ mr: 2 }} onClick={() => updateMood(2)} style={{ border: mood !== null && mood.type === 2 ? '1px solid #2F5597' : 'none' }}>
                                    <SunBehindCloudRainIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ mr: 2 }} onClick={() => updateMood(3)} style={{ border: mood !== null && mood.type === 3 ? '1px solid #2F5597' : 'none' }}>
                                    <CloudWithRainIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mood;