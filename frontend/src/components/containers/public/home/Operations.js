import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Avatar, Icon, useTheme} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {Fade} from "react-awesome-reveal";

function Operations({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <div style={{backgroundColor: '#2F5597', paddingBottom:'5%'}}>
                <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"}>
                    <Grid item xs={12} px={10} py={5} mb={2}>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item md={2}/>
                            <Grid item md={8} xs={12}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center" fontWeight={600} style={{color:'#FFFFFF'}}>
                                            { t('public:home:operations.title')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight={600} style={{color:'#B4C7E7'}}  align="center">
                                            { t('public:home:operations.subtitle')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction={"row"} spacing={1}>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container py={1} px={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#FFFFFF'}} fontSize={28} fontWeight={600}>{t('public:home:operations.card_1.title')}</Typography>
                                        </Grid>
                                        <Grid item mt={1}>
                                            <Avatar style={{ backgroundColor:'#2F5597'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#FFFFFF', fontSize:60}}>groups</Icon></Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#FFFFFF'}} fontSize={18}>{t('public:home:operations.card_1.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container py={1} px={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#FFFFFF'}} fontSize={28} fontWeight={600}>{t('public:home:operations.card_2.title')}</Typography>
                                        </Grid>
                                        <Grid item mt={1}>
                                            <Avatar style={{ backgroundColor:'#2F5597'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#FFFFFF', fontSize:60}}>manage_accounts</Icon></Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#FFFFFF'}} fontSize={18}>{t('public:home:operations.card_2.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container py={1} px={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#FFFFFF'}} fontSize={28} fontWeight={600}>{t('public:home:operations.card_3.title')}</Typography>
                                        </Grid>
                                        <Grid item mt={1}>
                                            <Avatar style={{ backgroundColor:'#2F5597'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#FFFFFF', fontSize:60}}>credit_card</Icon></Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#FFFFFF'}} fontSize={18}>{t('public:home:operations.card_3.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container py={1} px={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#FFFFFF'}} fontSize={28} fontWeight={600}>{t('public:home:operations.card_4.title')}</Typography>
                                        </Grid>
                                        <Grid item mt={1}>
                                            <Avatar style={{ backgroundColor:'#2F5597'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#FFFFFF', fontSize:60}}>health_and_safety</Icon></Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#FFFFFF'}} fontSize={18}>{t('public:home:operations.card_4.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    )

}

export default Operations;