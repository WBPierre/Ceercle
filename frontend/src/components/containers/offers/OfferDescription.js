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
import Divider from '@mui/material/Divider';


function OfferDescription({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"} style={{backgroundColor: theme.palette.background.paper}}>
            <Grid item xs={12} px={10}  mb={10}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item md={2} xs={0}/>
                    <Grid item md={2} xs={0}/>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h2" align="center" fontWeight={600} style={{color:'#000000'}}>
                            Nos offres
                        </Typography>
                    </Grid>
                    <Grid item md={1} xs={0}/>
                </Grid>
            </Grid>
            <Grid item xs={8} px={10}>
                <Grid container direction={"row"} spacing={5}>
                    
                    <Grid item md={1} xs={12}/>
                    
                    <Grid item md={4} xs={12}>
                        <Card sx={{ maxWidth: 450 }} style={{ border: '1.5px solid #FA8072', borderRadius: '5%'}}>
                            <CardHeader disableTypography={false}
                                title={<Typography style={{color: "#FA8072", fontWeight:50, fontSize: 40}} > 
                                {t('offers:offer_1.title')}
                                </Typography>}
                                subheader={<Typography style={{color: "#FA8072"}} >
                                    <span style={{fontWeight:500, fontSize: 50}}> 3€ </span>
                                    <span style={{fontWeight:50, fontSize: 20}}> /mois par utilisateur </span>
                                </Typography>}
                                sx={{
                                    backgroundColor: "#FFFFFF"
                                }}>
                            </CardHeader>
                            <Divider/>
                            <CardContent sx={{
                                    backgroundColor: "#FFFFFF"
                                }}>
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
                                    <ListItem disablePadding alignItems="flex-start">
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

                    <Grid item md={2} xs={12}/>
                    
                    <Grid item md={5} xs={12}>
                        <Card sx={{ maxWidth: 450 }} style={{ border: '1.5px solid #26C00A', borderRadius: '5%'}}>
                            <CardHeader disableTypography={false}
                                title={<Typography style={{color: "#26C00A", fontWeight:50, fontSize: 40}} > 
                                {t('offers:offer_1.title')}
                                </Typography>}
                                subheader={<Typography style={{color: "#26C00A"}} >
                                    <span style={{fontWeight:500, fontSize: 50}}> 3€ </span>
                                    <span style={{fontWeight:50, fontSize: 20}}> /mois par utilisateur </span>
                                </Typography>}
                                sx={{
                                    backgroundColor: "#FFFFFF"
                                }}>
                            </CardHeader>
                            <Divider/>
                            <CardContent sx={{
                                    backgroundColor: "#FFFFFF"
                                }}>
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
                                    <ListItem disablePadding alignItems="flex-start">
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_1')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_2')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_3')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_4')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_5')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={t('offers:offer_1.services.service_6')} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircle sx={{color: "#26C00A"}}/>
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
                                <Button size="small" style={{backgroundColor:'#26C00A', color:"#FFFFFF", fontWeight:200, fontSize:15}}>{ t("generic:demo") }</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    <Grid item md={1} xs={12}/>

        
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OfferDescription;