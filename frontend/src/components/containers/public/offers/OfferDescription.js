import * as React from 'react';
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import * as Public_Routes from "../../../../navigation/public/Routes";

function OfferDescription({ props }) {
    const { t } = useTranslation();
    const theme = useTheme();

    let navigate = useNavigate();

    const [alignment, setAlignment] = React.useState("yearly");
    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };


    return (
        <Grid container direction={"column"} alignItems={"space-around"} style={{ backgroundColor: '#FDF9F6' }}>
            <Grid item xs={12} mb={5}>
                <Typography variant="h5" fontWeight={100} align="center" fontSize={30} style={{ color: '#3F07A8' }}>
                    {t('public:offers:main.content')}
                </Typography>
            </Grid>
            <Grid item xs={12} px={10}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        alignItems="center"
                    >
                        <ToggleButton value="monthly" disableRipple={true} style={{ fontWeight: 600, fontSize: 17, color: alignment === 'monthly' ? 'white' : '#3F07A8', backgroundColor: alignment === 'monthly' ? '#3F07A8' : 'white'}}>{t('public:offers:monthly')}</ToggleButton>
                        <ToggleButton value="yearly" disableRipple={true} style={{ fontWeight: 600, fontSize: 17, color: alignment === 'yearly' ? 'white' : '#3F07A8', backgroundColor: alignment === 'yearly' ? '#3F07A8' : 'white'}}>{t('public:offers:yearly')}</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            </Grid>

            <Grid item xs={12} px={10}>
                <Grid container direction={"row"} justifyContent={"space-around"} mb={7} alignItems="stretch">

                    <Grid item component={Card} md={4} xs={12} mt={7} style={{borderRadius:'25px', display: "flex",
                        flexDirection: "column", backgroundColor:theme.palette.background.default
                    }}>
                        <Fade direction={"left"} triggerOnce={true}>
                            <CardHeader disableTypography={false}
                                        style={{backgroundColor: theme.palette.background.paper, borderTopLeftRadius:'25px', borderTopRightRadius:'25px'}}
                                title={
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item md={12} mt={1}>
                                            <Chip pt={5} style={{ backgroundColor: "rgba(63,7,168,0.3)", color: "white", fontWeight: 500, fontSize: 35, height: '5%' }}
                                                  label={t('public:offers:offer_1.title')}>
                                            </Chip>
                                        </Grid>
                                    </Grid>}
                                subheader={<Grid container direction="column" alignItems="center" spacing={0}>
                                    <Grid item md={3} mt={2}>
                                        <span style={{ fontWeight: 500, fontSize: 40, color: "#3F07A8" }} hidden={alignment !== "yearly"}> {t('public:offers:offer_1.price_yearly')} </span>
                                        <span style={{ fontWeight: 500, fontSize: 40, color: "#3F07A8" }} hidden={alignment !== "monthly"}> {t('public:offers:offer_1.price_monthly')} </span>
                                        <span style={{ fontWeight: 300, fontSize: 20, color: "#5B5654" }}> {t('public:offers:offer_1.per_month')}</span>
                                    </Grid>
                                    <Grid item md={3} mt={-1}>
                                        <span style={{ fontWeight: 50, fontSize: 15, color: "#5B5654" }}>{t('public:offers:offer_1.per_user')}</span>
                                    </Grid>
                                    <Grid item md={6} mt={2}>
                                        <Typography textAlign={"center"} style={{ color: '#3F07A8' }} fontSize={17} fontWeight={100}>
                                            {t('public:offers:offer_1.description')}
                                        </Typography>
                                    </Grid>
                                </Grid>}>
                            </CardHeader>
                            <CardContent sx={{
                                backgroundColor: theme.palette.background.default
                            }}>
                                <Button fullWidth variant={"contained"} style={{backgroundColor:'#3F07A8'}}  onClick={() => navigate(Public_Routes.DEMO)}>{t('public:offers:choose_this_offer')}</Button>
                                <List alignItems="flex-start">
                                    <ListItem disablePadding alignItems="flex-start">
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_1.services.service_1')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 6 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_1.services.service_2')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 6 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_1.services.service_3')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 6 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_1.services.service_4')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 6 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_1.services.max_users')} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Fade>
                    </Grid>


                    <Grid item component={Card} md={4} xs={12} mt={7} style={{ borderRadius: '25px', display: "flex",
                        flexDirection: "column", backgroundColor: theme.palette.background.default
                    }}>
                        <Fade direction={"right"} triggerOnce={true}>
                            <CardHeader disableTypography={false}
                                        style={{backgroundColor: theme.palette.background.paper, borderTopLeftRadius:'25px', borderTopRightRadius:'25px'}}
                                title={
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item md={12} mt={1}>
                                            <Chip mb={5} style={{ backgroundColor: "rgba(63,7,168,0.6)", color: "white", fontWeight: 500, fontSize: 35, height: '5%' }}
                                                label={t('public:offers:offer_2.title')}>
                                            </Chip>
                                        </Grid>
                                    </Grid>}
                                subheader={<Grid container direction="column" alignItems="center">
                                    <Grid item md={3} mt={4}>
                                        <span style={{ fontWeight: 500, fontSize: 35, color: "#3F07A8" }}> {t('public:offers:offer_2.contact_us')} </span>
                                    </Grid>

                                    <Grid item md={6} mt={3}>
                                        <Typography textAlign={"center"} style={{ color: '#3F07A8' }} fontSize={17} fontWeight={100}>
                                            {t('public:offers:offer_2.description')}
                                        </Typography>
                                    </Grid>
                                </Grid>}>
                            </CardHeader>
                            <CardContent sx={{
                                backgroundColor: theme.palette.background.default,
                                borderRadius: '25px'
                            }}>
                                <Button fullWidth variant={"contained"} style={{backgroundColor:'#3F07A8'}}  onClick={() => navigate(Public_Routes.DEMO)}>{t('public:offers:choose_this_offer')}</Button>
                                <List alignItems="flex-start">
                                    <ListItem disablePadding alignItems="flex-start">
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_2.services.service_1')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 10 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_2.services.service_2')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 10 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_2.services.service_3')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 10 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_2.services.service_4')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 10 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: "#3F07A8" }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: "#5B5654" }} primary={t('public:offers:offer_2.services.max_users')} />
                                    </ListItem>
                                    <ListItem disablePadding alignItems="flex-start" style={{ marginTop: 10 }}>
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <Check sx={{ color: theme.palette.background.default }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16, color: theme.palette.background.default }} primary={t('public:offers:offer_2.services.max_users')} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OfferDescription;