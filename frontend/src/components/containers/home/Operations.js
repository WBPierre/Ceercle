import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import DescriptionElement from "../../molecules/home/DescriptionElement"
import VisuelSAAS from "../../../assets/images/home/visuel_SAAS.png";
import iconMeeting from "../../../assets/images/icons/iconMeeting.png";
import iconPpl from "../../../assets/images/icons/iconPpl.png";
import iconCalendar from "../../../assets/images/icons/iconCalendar.png";
import iconOffice from "../../../assets/images/icons/iconOffice.png";
import anaBranson from "../../../assets/images/home/anaBranson.png";
import GridModule from "./GridModule";
import Container from "@mui/material/Container";
import {Avatar, Chip, useTheme} from "@mui/material";
import {useRef} from "react";
import ContactImage from "../../../assets/images/contact/right.jpg";
import Box from "@mui/material/Box";
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Operations({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <div style={{backgroundColor: theme.palette.background.default}}>
                <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"}>
                    <Grid item xs={12} px={10}  mb={10}>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Grid container direction={"column"} spacing={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center" fontWeight={600}>
                                            { t('home:operations.title')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight={600} style={{color:'#D57670'}}  align="center">
                                            { t('home:operations.subtitle')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} px={10}>
                        <Grid container direction={"row"} spacing={5}>
                            <Grid item md={3} xs={12}>
                                <Grid container py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item mt={2}>
                                        <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><GroupsIcon style={{color:'#002060'}} fontSize={"large"}/></Avatar>
                                    </Grid>
                                    <Grid item my={5}>
                                        <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontWeight={500}>{t('home:operations.card_1.title')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('home:operations.card_1.text')}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Grid container py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item mt={2}>
                                        <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><PeopleIcon style={{color:'#002060'}} fontSize={"large"}/></Avatar>
                                    </Grid>
                                    <Grid item my={5}>
                                        <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontWeight={500}>{t('home:operations.card_2.title')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('home:operations.card_2.text')}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Grid container py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item mt={2}>
                                        <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><CreditCardIcon style={{color:'#002060'}} fontSize={"large"}/></Avatar>
                                    </Grid>
                                    <Grid item my={5}>
                                        <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontWeight={500}>{t('home:operations.card_3.title')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('home:operations.card_3.text')}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Grid container py={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item mt={2}>
                                        <Avatar size={"medium"} style={{ backgroundColor:'white'}} sx={{ width: 75, height: 75 }}><LightbulbIcon style={{color:'#002060'}} fontSize={"large"}/></Avatar>
                                    </Grid>
                                    <Grid item my={5}>
                                        <Typography textAlign={"center"} variant="h4" style={{color:'#2F5597'}} fontWeight={500}>{t('home:operations.card_4.title')}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography textAlign={"center"} style={{color:'#002060'}} fontSize={18}>{t('home:operations.card_4.text')}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    )

}

export default Operations;