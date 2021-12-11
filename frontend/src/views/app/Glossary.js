import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CustomContainer from "../../components/containers/app/CustomContainer";

import TeamGlossary from "../../components/containers/app/glossary/TeamGlossary";
import FavoriteGlossary from "../../components/containers/app/glossary/FavoriteGlossary";
import SearchGlossary from "../../components/containers/app/glossary/SearchGlossary";
import GridGlossary from "../../components/containers/app/glossary/GridGlossary";

export default function Glossary(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();


    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"row"} style={{ backgroundColor: theme.palette.background.paper, height: '100vh' }}>

                <Grid item md={5} style={{ backgroundColor: '#000000' }}>
                    <Grid container direction="column" height="100%">
                        <Grid item md={6} style={{ backgroundColor: '#FFFFFF' }}>
                        </Grid>
                        <Grid item md={6} style={{ backgroundColor: '#1126FA' }}>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={7} style={{ backgroundColor: '#FAF611' }}>
                    <SearchGlossary />
                    <GridGlossary />
                </Grid>

            </Grid>
        </CustomContainer >

    );
}