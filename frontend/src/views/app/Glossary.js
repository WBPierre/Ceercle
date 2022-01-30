import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CustomContainer from "../../components/containers/app/CustomContainer";
import SearchGlossary from "../../components/containers/app/glossary/SearchGlossary";
import InfoByUser from "../../components/containers/app/glossary/InfoByUser";

export default function Glossary() {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    const [userToDisplay, setUserToDisplay] = React.useState(0);
    const newUserToDisplay = (newUser) => {
        setUserToDisplay(newUser);
    };
    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"row"} style={{ height: '100%' }}>

                <Grid item md={4} mt={2} style={{ height: '100%' }}>
                    <SearchGlossary newUserToDisplay={(x) => newUserToDisplay(x)} />
                </Grid>

                <Grid item md={8}>
                    {userToDisplay !== 0 &&
                        <InfoByUser userToDisplay={userToDisplay} />
                    }
                </Grid>

            </Grid>
        </CustomContainer >

    );
}