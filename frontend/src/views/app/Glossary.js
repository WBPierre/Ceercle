import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CustomContainer from "../../components/containers/app/CustomContainer";
import load_profile from "../../assets/images/app/load_profile.jpeg";
import load_profile_2 from "../../assets/images/app/load_profile_2.jpeg";
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
            <Grid wrap={"nowrap"} container direction={"row"} style={{ height: '100vh' }}>

                <Grid item md={4} mt={2}>
                    <SearchGlossary newUserToDisplay={(x) => newUserToDisplay(x)} />
                </Grid>

                <Grid item md={8}>
                    {userToDisplay !== 0 ?
                        <InfoByUser userToDisplay={userToDisplay} />
                        :
                        <img style={{
                            height: "80%", width: "100%"
                        }} src={load_profile_2} />}
                </Grid>

            </Grid>
        </CustomContainer >

    );
}