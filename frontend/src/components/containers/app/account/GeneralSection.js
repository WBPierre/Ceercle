import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import SettingSectionTemplate from './SettingSectionTemplate';

export default function GeneralSection(props) {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <SettingSectionTemplate title="Paramètres généraux" description="Définissez vos paramètres de compte">
            <Grid container direction="column" spacing={1}>

                <Grid item>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Nom complet
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="Louis Lacaille"
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Equipe associée
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="Finances"
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Position
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            id="filled-search"
                            defaultValue="Contrôleur de gestion"
                            variant="standard"
                        />
                    </FormControl>
                </Grid>


                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Adresse mail
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            name="email"
                            defaultValue="louis.lacaille@spacecorner.io"
                            variant="standard"
                        />
                    </FormControl>
                </Grid>



                <Grid item mt={6}>
                    <Typography variant="body" fontWeight={600} fontSize={17} style={{ color: '#414040' }}>
                        Numéro de téléphone
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl sx={{ width: 300 }} variant="standard" disabled>
                        <TextField
                            id="filled-search"
                            defaultValue="+33 6 74 49 76 33"
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
                                    label="Enregistrer"
                                    color="primary"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    deleteIcon={<DoneIcon />}
                                    variant="outlined"
                                />
                                <Chip
                                    label="Annuler"
                                    color="error"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    deleteIcon={<CancelIcon />}
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
