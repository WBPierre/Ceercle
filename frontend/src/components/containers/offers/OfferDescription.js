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
import {Fade, Zoom} from 'react-awesome-reveal';

function OfferDescription({props}){
    const { t } = useTranslation();
    const theme = useTheme();


    return(
        <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"} style={{backgroundColor: "#949698"}}>
            
            <Grid item xs={12} px={10} mb={10}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item md={2} xs={0}/>
                    <Grid item md={2} xs={0}/>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h2" align="center" fontWeight={600} style={{color:'#FFFFFF'}}>
                            Nos offres
                        </Typography>
                    </Grid>
                    <Grid item md={1} xs={0}/>
                </Grid>
            </Grid>
            
            <Grid item xs={8} px={10}>
                <Grid container direction={"row"} spacing={1}> 
                    
                    <Grid item md={4} xs={12}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Card sx={{ maxWidth: 450 }} style={{ border: '3px solid #0572F5', borderRadius: '5%'}}>
                                    <CardHeader disableTypography={false}
                                        title={<Typography style={{color: "#0572F5", fontWeight:50, fontSize: 40}} > 
                                        {t('offers:offer_1.title')}
                                        </Typography>}
                                        subheader={<Typography style={{color: "#0572F5"}} >
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
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_1')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_2')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_3')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_4')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_5')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('offers:offer_1.services.service_6')} />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
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
                                        <Button size="small" style={{backgroundColor:'#0572F5', color:"#FFFFFF", fontWeight:200, fontSize:15}}>{ t("generic:demo") }</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid> 
                    
                    <Grid item md={4} xs={12}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Card sx={{ maxWidth: 500 }} style={{ border: '3px solid #0572F5', borderRadius: '5%'}}>
                                    <CardHeader disableTypography={false}
                                        title={<Typography style={{color: "#FFFFFF", fontWeight:70, fontSize: 40}} > 
                                        Premium
                                        </Typography>}
                                        subheader={<Typography style={{color: "#FFFFFF"}} >
                                            <span style={{fontWeight:500, fontSize: 50}}> 6€ </span>
                                            <span style={{fontWeight:50, fontSize: 20}}> /mois par utilisateur </span>
                                        </Typography>}
                                        sx={{
                                            backgroundColor: "#0572F5"
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
                                                La solution phare incluant l’ensemble de nos solutions, du planning de présence à la réservation d’espaces de travail tiers. 
                                            </Typography>
                                        </Box>
                                        <List>
                                            <ListItem disablePadding alignItems="flex-start">
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="L’ensemble de l’offre Business" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Marketplace d’espace de travail tiers (postes de travail individuels, salles de réunion, bureaux privatisés)" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Définition sur-mesure de plafonds de dépenses en tiers-lieux pour les salariés " />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Réservation autonome de postes de travail et de salles de réunion" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Souscription à des offres forfaitaires de postes individuels et/ou de bureaux fermés " />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Demande de réservations en tiers-lieux centralisées sur le dashboard SpaceCorner"  />
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                            }}>
                                        <Button size="small" style={{backgroundColor:'#0572F5', color:"#FFFFFF", fontWeight:200, fontSize:15}}>{ t("generic:demo") }</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item md={4} xs={12}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Card sx={{ maxWidth: 450 }} style={{ border: '3px solid #0572F5', borderRadius: '5%'}}>
                                    <CardHeader disableTypography={false}
                                        title={<Typography style={{color: "#0572F5", fontWeight:50, fontSize: 40}} > 
                                        Sur-Mesure
                                        </Typography>}
                                        subheader={<Typography style={{color: "#0572F5"}} >
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
                                                La solution sur-mesure destinée aux grands comptes.
                                            </Typography>
                                        </Box>
                                        <List>
                                            <ListItem disablePadding alignItems="flex-start">
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Plus de 300 collaborateurs"/>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Personnalisation de la plateforme" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Support prioritaire dédié" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Single Sign-On (SSO) " />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{color: "#0572F5"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Tarification sur-mesure" />
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                            }}>
                                        <Button size="small" style={{backgroundColor:'#0572F5', color:"#FFFFFF", fontWeight:200, fontSize:15}}>{ t("generic:demo") }</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid> 

        
                </Grid>
            </Grid>

            <Grid item xs={8} px={10}></Grid>
        </Grid>
    )

}

export default OfferDescription;