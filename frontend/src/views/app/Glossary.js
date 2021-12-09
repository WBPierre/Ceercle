import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CustomContainer from "../../components/containers/app/CustomContainer";
import Autocomplete from '@mui/material/Autocomplete';

export default function Glossary(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"row"} spacing={2} style={{ backgroundColor: theme.palette.background.paper, height: '100vh' }}>
                <Grid item md={5} style={{ backgroundColor: '#000000' }}>
                    <Grid container direction="column" height="100%">
                        <Grid item md={3} style={{ backgroundColor: '#FFFFFF' }}>
                            <Typography variant="h4" fontWeight={600}>
                                Annuaire
                            </Typography>
                            <Typography variant="body" fontWeight={300} fontSize={20}>
                                Rechercher parmi les 1399 employés
                            </Typography>
                        </Grid>
                        <Grid item md={9}>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={7} style={{ backgroundColor: '#FAF611' }}>

                </Grid>
            </Grid>
        </CustomContainer>

    );
}