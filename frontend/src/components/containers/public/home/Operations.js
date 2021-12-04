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
            <div style={{backgroundColor: theme.palette.background.default, paddingBottom:'5%'}}>
                <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"}>
                    <Grid item xs={12} px={10} py={5} mb={10} style={{backgroundColor: '#FEF0EC'}}>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item md={2}/>
                            <Grid item md={8} xs={12}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center" fontWeight={600} style={{color:'#B5645E'}}>
                                            { t('public:home:operations.title')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight={600} style={{color:'#2F5597'}}  align="center">
                                            { t('public:home:operations.subtitle')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} px={10}>
                        <Grid container direction={"row"} spacing={5}>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container py={5} px={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item mt={2}>
                                            <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#002060', fontSize:36}}>groups</Icon></Avatar>
                                        </Grid>
                                        <Grid item my={5}>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontSize={28}>{t('public:home:operations.card_1.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('public:home:operations.card_1.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={5} py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item mt={2}>
                                            <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#002060', fontSize:36}}>manage_accounts</Icon></Avatar>
                                        </Grid>
                                        <Grid item my={5}>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontSize={28} fontWeight={500}>{t('public:home:operations.card_2.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('public:home:operations.card_2.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={5} py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item mt={2}>
                                            <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#002060', fontSize:36}}>credit_card</Icon></Avatar>
                                        </Grid>
                                        <Grid item my={5}>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontSize={28} fontWeight={500}>{t('public:home:operations.card_3.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('public:home:operations.card_3.text')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Fade direction={"up"} triggerOnce={true}>
                                    <Grid container px={5} py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                        <Grid item mt={2}>
                                            <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><Icon style={{color:'#002060', fontSize:36}}>health_and_safety</Icon></Avatar>
                                        </Grid>
                                        <Grid item my={5}>
                                            <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontSize={28} fontWeight={500}>{t('public:home:operations.card_4.title')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('public:home:operations.card_4.text')}</Typography>
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