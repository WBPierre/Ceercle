import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import CustomContainer from "../../components/containers/app/CustomContainer";


import AvatarSection from '../../components/containers/app/account/AvatarSection';
import PreferencesSection from '../../components/containers/app/account/PreferencesSection';
import GeneralSection from '../../components/containers/app/account/GeneralSection';
import SecuritySection from '../../components/containers/app/account/SecuritySection';
import Button from "@mui/material/Button";
import {useCookies} from "react-cookie";
import useAuth from "../../components/context/auth/AuthHelper";

export default function Account(props) {

    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const context = useAuth();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    const handleLogOut = () => {
        removeCookie('token');
        context.updateAuth(false);
        context.updateUser(null);
        navigate('/app/login');
    }

    return (
        <CustomContainer>
            <Grid container direction="column" pl={10} pr={10} spacing={1}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#414040' }}>
                        Mon compte
                    </Typography>
                </Grid>

                <Grid item mb={1}>
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#7F7F7F' }}>
                                Paramètres de compte
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant={"text"} onClick={() => handleLogOut()}>Se déconnecter</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider style={{ backgroundColor: "#A4A3A3" }} />

                <AvatarSection />

                <Divider style={{ backgroundColor: "#D8D8D8" }} />

                <PreferencesSection />

                <Divider style={{ backgroundColor: "#D8D8D8" }} />

                <GeneralSection />

                <Divider style={{ backgroundColor: "#D8D8D8" }} />

                <SecuritySection />

            </Grid>
        </CustomContainer >

    );
}
