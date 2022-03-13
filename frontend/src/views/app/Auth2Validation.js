import {useTranslation} from "react-i18next";
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import * as App_Routes from "../../navigation/app/Routes";
import ThirdPartyService from "../../services/app/thirdparty.service";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo/logo_2.png";
import Typography from "@mui/material/Typography";
import * as React from "react";
import LoadingIcons from 'react-loading-icons'
import {useLocation} from "react-router";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Auth2Validation(){
    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();
    let query = useQuery();

    useEffect(() => {
        async function verifySlack(){
            const code = query.get('code');
            const resources = {
                code: code
            }
            await ThirdPartyService.verifySlack(resources).then((res) => {
                console.log("Response", res);
            }).catch((err) => {
                console.log("error", err.response);
            });
            //navigate(App_Routes.WORKPOLICY);
        }
        verifySlack();
    }, []);

    return (
        <Container style={{ minHeight: '100vh', display: 'flex', minWidth: '100%', backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="sm">
                <Grid container direction="column" alignItems="center" >

                    <Grid item mt={7}>
                        <img src={logo} style={{ width: 50, height: 50 }} alt="contact" />
                    </Grid>

                    <Grid item mb={3}>

                        <Typography
                            variant="h6"
                            component="div"
                            color="#3F07A8"
                            style={{ fontWeight: 500 }}
                            fontSize={24}
                            textAlign={"center"}
                        >
                            {t('app:rh_parameters:integration.verify')}Slack{t('app:rh_parameters:integration.verify_next')}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <LoadingIcons.Puff height={50} stroke={"#3F07A8"}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Auth2Validation;