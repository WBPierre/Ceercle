import * as React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
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
import UserService from "../../services/app/user.service";
import { useEffect, useState } from "react";
import * as App_Routes from "../../navigation/app/Routes";

export default function Account(props) {

    const { t } = useTranslation();

    let navigate = useNavigate();
    const context = useAuth();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    const handleLogOut = () => {
        removeCookie('token');
        context.updateAuth(false);
        context.updateUser(null);
        navigate(App_Routes.LOGIN);
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUserInfo() {
            const res = await UserService.getUserInfo();
            setUser(res.data);
        }
        getUserInfo();
    }, []);

    if (user === null) {
        return (<CustomContainer />)
    }

    return (
        <CustomContainer>
            <Grid container direction="column" pl={10} pr={10}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                        {t('app:account:title')}
                    </Typography>
                </Grid>

                <Grid item mb={1}>
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#414040' }}>
                                {t('app:account:subtitle')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant={"text"} onClick={() => handleLogOut()} sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                color="error">{t('app:account:disconnect')}</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider style={{ backgroundColor: "#A4A3A3" }} />

                <AvatarSection user={user} />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <PreferencesSection user={user} />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <GeneralSection user={user} />

                <Divider style={{ backgroundColor: "#E1D2FC" }} />

                <SecuritySection />

            </Grid>
        </CustomContainer >

    );
}
