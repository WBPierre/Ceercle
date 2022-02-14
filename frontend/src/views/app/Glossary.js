import * as React from 'react';
import Grid from "@mui/material/Grid";
import SearchGlossary from "../../components/containers/app/glossary/SearchGlossary";
import InfoByUser from "../../components/containers/app/glossary/InfoByUser";

export default function Glossary() {
    const [userToDisplay, setUserToDisplay] = React.useState(0);
    const newUserToDisplay = (newUser) => {
        setUserToDisplay(newUser);
    };
    return (
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
    );
}