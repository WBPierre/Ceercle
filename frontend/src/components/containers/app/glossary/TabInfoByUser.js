import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function TabInfoByUser(props) {

    return (
        <Grid container direction="column" spacing={5}>
            <Grid item>
                <Grid container direction="row">
                    <Grid item md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    Poste
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.position}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    Equipe
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.team}
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
                                    Bureau
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.office_location}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontSize={15} fontWeight={100} style={{ color: '#959494' }} noWrap>
                                    Desk
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.desk}
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
                                    Adresse mail
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
                                    Téléphone
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography fontSize={20} fontWeight={400} style={{ color: '#323232' }} noWrap>
                                    {props.userToDisplay.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

