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


function ProductPresentation({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <div style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container direction={"column"}>
                        <Grid item md={12} style={{backgroundColor:theme.palette.background.default}} px={10} pb={10}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item md={2}>
                                    <Grid container flexDirection={"column"} style={{height:'100%'}} justifyContent={"flex-start"} alignItems={"center"}>
                                        <Grid item>
                                            <img src={anaBranson} style={{width:'100%'}} alt="contact" />
                                        </Grid>
                                    </Grid>                        </Grid>
                                <Grid item md={8}>
                                    <Grid container direction={"column"} spacing={5}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" align="center">
                                                { t('home:description_list.catchphrase_1')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} align="center">
                                                { t('home:description_list.catchphrase_2')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} align="center" style={{color:'#4C82D3'}}>
                                                { t('home:description_list.simply')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={2}>
                                    <Grid container flexDirection={"column"} style={{height:'100%'}} justifyContent={"flex-end"} alignItems={"center"}>
                                        <Grid item>
                                            <Chip label='Réserver un siège le Mer. 8' color={"primary"} style={{color:'white', fontWeight:600}} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} style={{backgroundColor:theme.palette.background.paper}} px={10} mt={10}>
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item md={3}>
                                    <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"space-around"} alignItems={"center"}>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={3}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconCalendar} style={{width:'25%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="Renseigner son planning" style={{backgroundColor:'#F3C6C3', color:"#A45B58", fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={3}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconOffice} style={{width:'40%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="Réservation d'un bureau" style={{backgroundColor:'#D2EFFB', color:'#508CB1', fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6}>
                                    <img src={VisuelSAAS} style={{width:'100%'}} alt="contact" />
                                </Grid>
                                <Grid item md={3}>
                                    <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"space-around"} alignItems={"center"}>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconMeeting} style={{width:'50%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="Organiser vos réunions" style={{backgroundColor:'#FCE5B2', color:"#9A740D", fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconPpl} style={{width:'50%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="Activité des équipes" style={{backgroundColor:'#C3E4B6', color:'#6D8066', fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <div style={{backgroundColor: theme.palette.background.paper, height:'100vh'}}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12} style={{backgroundColor:theme.palette.background.default}} px={10} pb={10}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} spacing={5}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" align="center">
                                                { t('home:description_list.catchphrase_1')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} align="center">
                                                { t('home:description_list.catchphrase_2')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" fontWeight={600} align="center" style={{color:'#4C82D3'}}>
                                                { t('home:description_list.simply')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{backgroundColor:theme.palette.background.paper}} px={10} mt={10}>
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"space-around"} alignItems={"center"}>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={3}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconCalendar} style={{width:'25%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={t('home:description_list.chip_1')} style={{backgroundColor:'#F3C6C3', color:"#A45B58", fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={3}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconOffice} style={{width:'40%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={t('home:description_list.chip_2')} style={{backgroundColor:'#D2EFFB', color:'#508CB1', fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={12}>
                                    <img src={VisuelSAAS} style={{width:'100%'}} alt="contact" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction={"column"} style={{height:'100%'}} justifyContent={"space-around"} alignItems={"center"}>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconMeeting} style={{width:'50%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={t('home:description_list.chip_3')} style={{backgroundColor:'#FCE5B2', color:"#9A740D", fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <img src={iconPpl} style={{width:'50%'}} alt="contact" />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={t('home:description_list.chip_4')} style={{backgroundColor:'#C3E4B6', color:'#6D8066', fontWeight:600}} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>

    )

}

export default ProductPresentation;