import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import CustomContainer from "../../components/containers/app/CustomContainer";


import OfficeOccupancy from '../../components/containers/app/workpolicy/OfficeOccupancy';
import WorkRules from '../../components/containers/app/workpolicy/WorkRules';

export default function WorkPolicy(props) {

    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <CustomContainer>
            <Grid container direction="column" pl={10} pr={10} spacing={1}>

                <WorkRules />

                <Divider style={{ backgroundColor: "#D8D8D8" }} />

                <OfficeOccupancy />


            </Grid>
        </CustomContainer >

    );
}
