import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Avatar, Chip, useTheme} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { fontSize } from "@mui/system";


function OfferDescription({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"} style={{backgroundColor: theme.palette.background.paper}}>
            <Grid item xs={12} px={10}  mb={10}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item md={3} xs={0}/>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h4" align="center" fontWeight={600} style={{color:'#000000'}}>
                            Nos offres
                        </Typography>
                    </Grid>
                    <Grid item md={1} xs={0}/>
                </Grid>
            </Grid>
            <Grid item xs={8} px={10}>
                <Grid container direction={"row"} spacing={5}>

                    <Grid item md={5} xs={12}>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardHeader
                                title={ t('offers:offer_1.title') }
                                subheader="3€/mois par utilisateur"
                                titleTypographyProps={{ align: 'center', color: "#FFFFFF", fontWeight:600, fontSize: 30 }}
                                subheaderTypographyProps={{
                                    align: 'center',
                                    color: "#FFFFFF",
                                    fontWeight:600,
                                    fontSize: 20 
                                }}
                                sx={{
                                    backgroundColor: "#FA8072"
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                    mb: 2,
                                    }}
                                >
                                    <Typography textAlign={"left"} style={{color:'#000000'}} fontSize={18}>
                                        Les services essentiels pour la gestion du travail hybride au sein de votre organisation.
                                    </Typography>
                                </Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_1')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_2')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_3')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_4')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_5')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_6')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.max_users')} />
                                    </ListItem>
                                </List> 
                            </CardContent>
                            <CardActions sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                    mb: 2,
                                    }}>
                                <Button size="small" style={{backgroundColor:'#FA8072', color:"#FFFFFF", fontWeight:200, fontSize:15}}>{ t("generic:demo") }</Button>
                            </CardActions>
                        </Card>
                    </Grid> 
                    <Grid item md={3} xs={12} elevation={10}>
                        <Grid container epy={2} px={5} direction={"column"} style={{backgroundColor:'#EAF3FE', borderRadius: '5%'}} justifyContent={"center"} alignItems={"center"}>
                            <Grid item mt={2}>
                                <Chip label="Business" style={{backgroundColor:'#FA8072', color:"#FFFFFF", fontWeight:600, fontSize:30}}/>
                            </Grid>
                            <Grid item mt={2}>
                                <Typography textAlign={"center"} style={{color:'#000000'}} fontSize={18}>
                                    Les services essentiels pour la gestion du travail hybride au sein de votre organisation.
                                </Typography>
                            </Grid>
                            <Grid item mt={4}>
                                <Button size="small" style={{backgroundColor:'#FA8072', color:"#FFFFFF", fontWeight:200, fontSize:20}}>{ t("generic:demo") }</Button>
                            </Grid>
                            <Grid item my={5}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_1')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_2')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_3')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_4')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_5')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_6')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#FA8072"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.max_users')} />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
        
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OfferDescription;