import * as React from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';
import ProfileDefault from "../../assets/images/example/default.png";
import AvatarSection from '../../components/containers/app/account/AvatarSection';
import PreferencesSection from '../../components/containers/app/account/PreferencesSection';
import GeneralSection from '../../components/containers/app/account/GeneralSection';
import Chip from '@mui/material/Chip';
import SecuritySection from '../../components/containers/app/account/SecuritySection';
import Button from "@mui/material/Button";
import useAuth from "../../components/context/auth/AuthHelper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserService from "../../services/app/user.service";
import TokenService from "../../services/token.service";
import { useEffect, useState } from "react";
import * as App_Routes from "../../navigation/app/Routes";

export default function User() {

    const { t } = useTranslation();
    const {id} = useParams()
    let navigate = useNavigate();
    const context = useAuth();


    const handleLogOut = () => {
        TokenService.removeAccessToken();
        context.updateAuth(false);
        context.updateUser(null);
        navigate(App_Routes.LOGIN);
    }

    const [user, setUser] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        async function getUserInfo() {
            const res = await UserService.getUserInfo();
            setUser(res.data);
            setProfilePicture(res.data.profilePicturePath)
        }
        getUserInfo();
    }, []);

    if (user === null) {
        return (<div />)
    }

    return (
        <Grid container direction="column" pl={10} pr={10}>
            <Grid item>
                <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                    Paramètres utilisateur
                </Typography>
            </Grid>

            <Grid item mb={1}>
                <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item>
                        <Stack direction="row" spacing={1}>
                            <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#414040' }}>
                                {t('app:account:subtitle')}
                            </Typography>
                            <Avatar src={profilePicture === null ? ProfileDefault : profilePicture} sx={{ width: 40, height: 40 }} />
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Chip
                            label="Revenir à l'équipe"
                            sx={{
                                borderColor: "#777575", color: "#777575", fontWeight: "bold"
                            }}
                            color="error"
                            icon={<ArrowBackIcon />}
                            variant="outlined"
                            onClick={() => navigate(App_Routes.TEAMS)}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: "#A4A3A3" }} />

            <GeneralSection user={user} />

            <Divider style={{ backgroundColor: "#E1D2FC" }} />

        </Grid>
    );
}
