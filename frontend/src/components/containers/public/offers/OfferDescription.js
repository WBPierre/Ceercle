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
import {CheckCircle, Check} from "@mui/icons-material";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import {Fade, Zoom} from 'react-awesome-reveal';



function OfferDescription({props}){
    const { t } = useTranslation();
    const theme = useTheme();

    return(
        <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"} style={{backgroundColor: theme.palette.background.default}}>
            
            <Grid item xs={12} px={10}>
                <Grid container direction={"row"} justifyContent={"space-around"} mb={7} alignItems="stretch"> 
                    
                    <Grid item md={4} xs={12} mt={7}>
                        <Grid container direction={"row"}>
                            
                            <Grid item md={11} xs={12}>
                                <Fade direction={"left"} triggerOnce={true}>
                                <Card style={{ border: '3px solid #5B5654', borderRadius: '5%', backgroundColor: "#FFFFFF"}}>
                                    <CardHeader disableTypography={false}
                                        title={<Typography style={{color: "#5B5654", fontWeight:50, fontSize: 30}} > 
                                        {t('offers:offer_1.title')}
                                        </Typography>}
                                        subheader={<Typography style={{color: "#5B5654"}} >
                                            <span style={{fontWeight:500, fontSize: 35}}> 3€ </span>
                                            <span style={{fontWeight:50, fontSize: 15}}> /mois par utilisateur </span>
                                        </Typography>}
                                        >
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
                                            <Typography textAlign={"left"} style={{color:'#000000'}} fontSize={14}>
                                                Les services essentiels pour la gestion du travail hybride au sein de votre organisation.
                                            </Typography>
                                        </Box>
                                        <List alignItems="flex-start">
                                            <ListItem disableGutters alignItems="flex-start"> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Déclaration de planning de présence et calendrier collaboratif" />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary={t('offers:offer_1.services.service_2')} />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start"> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Intégration avec votre SIRH et avec vos outils (Slack, Teams, ...)"/>
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary={t('offers:offer_1.services.service_6')} />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary={t('offers:offer_1.services.max_users')} />
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2
                                            }}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#5B5654', fontSize: 18}} label={ t("generic:demo") }/>
                                    </CardActions>
                                </Card>
                                </Fade>
                            </Grid>

                            <Grid item md={1} xs={0}/>
                        </Grid>
                    </Grid> 
                    
                    <Grid item md={4} xs={12}>
                        <Grid container direction={"row"}>
                                
                                <Grid item md={12} xs={12}>
                                    <Fade direction={"up"} triggerOnce={true}>
                                    <Card style={{ border: '3px solid #0572F5', borderRadius: '5%', backgroundColor: "#FFFFFF"}}>
                                        <CardHeader disableTypography={false}
                                            title={<Typography style={{color: "#FFFFFF", fontWeight:50, fontSize: 30}} > 
                                            Premium
                                            </Typography>}
                                            subheader={<Typography style={{color: "#FFFFFF"}} >
                                                <span style={{fontWeight:500, fontSize: 35}}> 6€ </span>
                                                <span style={{fontWeight:50, fontSize: 15}}> /mois par utilisateur </span>
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
                                                <Typography textAlign={"left"} style={{color:'#000000'}} fontSize={14}>
                                                    La solution phare incluant l’ensemble de nos solutions, du planning de présence à la réservation d’espaces de travail tiers. 
                                                </Typography>
                                            </Box>
                                            <List>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="L’ensemble de l’offre Business" />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="Marketplace d’espace de travail tiers (postes de travail individuels, salles de réunion, bureaux privatisés)" />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="Définition sur-mesure de plafonds de dépenses en tiers-lieux pour les salariés " />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="Réservation autonome de postes de travail et de salles de réunion" />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="Souscription à des offres forfaitaires de postes individuels et/ou de bureaux fermés " />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary="Demande de réservations en tiers-lieux centralisées sur le dashboard SpaceCorner"  />
                                                </ListItem>
                                                <ListItem disableGutters alignItems="flex-start">
                                                    <ListItemIcon style={{minWidth: '30px'}}>
                                                        <Check sx={{color: "#0572F5"}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{fontSize:13}} primary={t('offers:offer_1.services.max_users')} />
                                                </ListItem>
                                            </List> 
                                        </CardContent>
                                        <CardActions sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                                }}>
                                            <Chip variant="contained" style={{color:'white',backgroundColor:'#0572F5', fontSize: 18}} label={ t("generic:demo") }/>
                                        </CardActions>
                                    </Card>
                                    </Fade>
                                </Grid>

                            </Grid>
                    </Grid>
                    
                    <Grid item md={4} xs={12} mt={7}>
                        <Grid container direction={"row"}>
                            <Grid item md={1} xs={0}/>
                                
                            <Grid item md={11} xs={12}>
                                <Fade direction={"right"} triggerOnce={true}>
                                <Card style={{ border: '3px solid #5B5654', borderRadius: '5%', backgroundColor: "#FFFFFF"}}>
                                    <CardHeader disableTypography={false}
                                        title={<Typography style={{color: "#5B5654", fontWeight:50, fontSize: 30}} > 
                                        Sur-Mesure
                                        </Typography>}
                                        subheader={<Typography style={{color: "#5B5654"}} >
                                            <span style={{fontWeight:50, fontSize: 15}}> Pour connaître le prix, nous contacter.</span>
                                        </Typography>}
                                        >
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
                                            <Typography textAlign={"left"} style={{color:'#000000'}} fontSize={14}>
                                                La solution sur-mesure destinée aux grands comptes.
                                            </Typography>
                                        </Box>
                                        <List>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Personnalisation de la plateforme" />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Support prioritaire dédié" />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Single Sign-On (SSO) " />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Tarification sur-mesure" />
                                            </ListItem>
                                            <ListItem disableGutters alignItems="flex-start">
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#5B5654"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:13}} primary="Plus de 300 collaborateurs"/>
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                            }}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#5B5654', fontSize: 18}} label={ t("generic:demo") }/>
                                    </CardActions>
                                </Card>
                                </Fade>
                            </Grid>

                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OfferDescription;