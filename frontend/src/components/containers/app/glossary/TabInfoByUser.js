import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { Chip } from "@mui/material";


export default function TabInfoByUser(props) {

    const { t } = useTranslation();

    return (
        <Grid container direction="column" spacing={5}>
            <Grid item>
                <Grid container direction="row">
                    <Grid item md={12}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    {t('app:glossary:position')}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.position}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row">
                    <Grid item md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    {t('generic:email')}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    {t('generic:phone')}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.phoneNumber}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {props.userToDisplay.teams.length !== 0 &&
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                {t('app:glossary:team(s)')}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                {props.userToDisplay.teams.map((team, index) => {
                                    return (
                                        <Chip label={team.name} style={{ margin: 1, backgroundColor: team.color, color: 'white', fontWeight: 500 }} />
                                    )
                                })}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }

        </Grid>
    )
}

