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
import { useCookies } from "react-cookie";
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
            <Grid container direction="column" pl={10} pr={10}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                        Mon compte
                    </Typography>
                </Grid>

                <Grid item mb={1}>
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#414040' }}>
                                Paramètres de compte
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant={"text"} onClick={() => handleLogOut()} sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                color="error">Se déconnecter</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider style={{ backgroundColor: "#A4A3A3" }} />

                <AvatarSection />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <PreferencesSection />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <GeneralSection />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <SecuritySection />

            </Grid>
        </CustomContainer >

    );
}
