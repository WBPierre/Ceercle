import * as React from 'react';
import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography"
import {Chip, useTheme} from "@mui/material";
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
import {Check} from "@mui/icons-material";
import Divider from '@mui/material/Divider';
import {Fade} from 'react-awesome-reveal';
import {useNavigate} from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";



function OfferDescription({props}){
    const { t } = useTranslation();
    const theme = useTheme();
    
    let navigate = useNavigate();
    let params = useParams();
    
    const [alignment, setAlignment] = React.useState("yearly");
    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
      };


    return(
        <Grid container direction={"column"} style={{height:'100%'}} alignItems={"space-around"} style={{backgroundColor: theme.palette.background.default}}>
            
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
                            style={{ backgroundColor: "#FFFFFF", border: '1px solid #F2E7E0'}}
                            alignItems="center"
                        >
                            <ToggleButton value="monthly" disableRipple={true} style={{fontWeight: 600, fontSize: 17, color:"#2F5597"}}>{ t('public:offers:monthly') }</ToggleButton>
                            <ToggleButton value="yearly" disableRipple={true} style={{fontWeight: 600, fontSize: 17, color:"#2F5597"}}>{ t('public:offers:yearly') }</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                
            </Grid>
            
            <Grid item xs={12} px={10}>
                <Grid container direction={"row"} justifyContent={"space-around"} mb={7} alignItems="stretch"> 
                    
                    <Grid item md={5} xs={12} mt={7} style={{width:'100%'}}>
                        <Grid container direction={"row"}>
                            <Grid item md={12} xs={12}>
                                <Fade direction={"left"} triggerOnce={true}>
                                <Card style={{ border: '2px solid #548235', borderRadius: '5%', backgroundColor: "#FFFFFF"}}>
                                    <CardHeader disableTypography={false}
                                        title={
                                            <Grid container direction="column" alignItems="center"> 
                                                <Grid item md={12} mt={1}>
                                                    <Chip pt={5} style={{backgroundColor: "#F8FBF5", color: "#548235", fontWeight:500, fontSize: 40, height:'5%'}}
                                                    label={ t('public:offers:offer_1.title') }>
                                                    </Chip>
                                                </Grid>
                                            </Grid>}
                                        subheader={<Grid container direction="column" alignItems="center" spacing={0}> 
                                            <Grid item md={3} mt={2}>
                                                <span style={{fontWeight:500, fontSize: 50, color: "#2F5597"}} hidden={alignment!=="yearly"}> { t('public:offers:offer_1.price_yearly') } </span>
                                                <span style={{fontWeight:500, fontSize: 50, color: "#2F5597"}} hidden={alignment!=="monthly"}> { t('public:offers:offer_1.price_monthly') } </span>
                                                <span style={{fontWeight:300, fontSize: 25, color:"#5B5654"}}> { t('public:offers:offer_1.per_month') }</span>
                                            </Grid>
                                            <Grid item md={3} mt={-1}>
                                                <span style={{fontWeight:50, fontSize: 17, color:"#5B5654"}}>{ t('public:offers:offer_1.per_user') }</span>
                                            </Grid>
                                            <Grid item md={6} mt={2}>
                                                <Typography textAlign={"center"} style={{color:'#2F5597'}} fontSize={19} fontWeight={100}>
                                                    { t('public:offers:offer_1.description') }
                                                </Typography>
                                            </Grid>
                                        </Grid>}>
                                    </CardHeader>
                                    <Divider/>
                                    <CardContent sx={{
                                            backgroundColor: "#FEFCFD"
                                        }}>
                                        <List alignItems="flex-start">
                                            <ListItem disableGutters> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#548235"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_1.services.service_1') } />
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#548235"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_1.services.service_2') } />
                                            </ListItem>
                                            <ListItem disableGutters> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#548235"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_1.services.service_3') }/>
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#548235"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_1.services.service_4') } />
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#548235"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_1.services.max_users') } />
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                            backgroundColor: "#FEFCFD"
                                            }}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#2F5597', fontSize: 17, fontWeight: 400}} label={ t('public:offers:choose_this_offer') } onClick={() => navigate('/demo')}/>
                                    </CardActions>
                                </Card>
                                </Fade>
                            </Grid>

                        </Grid>
                    </Grid> 


                    <Grid item md={5} xs={12} mt={7} style={{width:'100%'}}>
                        <Grid container direction={"row"}>
                            <Grid item md={12} xs={12}>
                                <Fade direction={"right"} triggerOnce={true}>
                                <Card style={{ border: '2px solid #954F35', borderRadius: '5%', backgroundColor: "#FFFFFF"}}>
                                    <CardHeader disableTypography={false}
                                        title={
                                            <Grid container direction="column" alignItems="center"> 
                                                <Grid item md={12} mt={1}>
                                                    <Chip mb={5} style={{backgroundColor: "#F1E0EB", color: "#954F35", fontWeight:500, fontSize: 40, height:'5%'}}
                                                    label={ t('public:offers:offer_2.title') }>
                                                    </Chip>
                                                </Grid>
                                            </Grid>}
                                        subheader={<Grid container direction="column" alignItems="center"> 
                                            <Grid item md={3} mt={5}>
                                                <span style={{fontWeight:500, fontSize: 40, color: "#2F5597"}}> { t('public:offers:offer_2.contact_us') } </span>
                                            </Grid>
                                            <Grid item md={3}>
                                                <span style={{fontWeight:50, fontSize: 27, color:"#FFFFFF"}}></span>
                                            </Grid>
                                            <Grid item md={6} mt={3}>
                                                <Typography textAlign={"center"} style={{color:'#2F5597'}} fontSize={19} fontWeight={100}>
                                                    { t('public:offers:offer_2.description') }
                                                </Typography>
                                            </Grid>
                                        </Grid>}>
                                    </CardHeader>
                                    <Divider/>
                                    <CardContent sx={{
                                            backgroundColor: "#FEFCFD"
                                        }}>
                                        <List alignItems="flex-start">
                                            <ListItem disableGutters> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#954F35"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_2.services.service_1') } />
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#954F35"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_2.services.service_2') } />
                                            </ListItem>
                                            <ListItem disableGutters> 
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#954F35"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_2.services.service_3') }/>
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#954F35"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_2.services.service_4') } />
                                            </ListItem>
                                            <ListItem disableGutters>
                                                <ListItemIcon style={{minWidth: '30px'}}>
                                                    <Check sx={{color: "#954F35"}}/>
                                                </ListItemIcon>
                                                <ListItemText primaryTypographyProps={{fontSize:17, color:"#5B5654"}} primary={ t('public:offers:offer_2.services.max_users') } />
                                            </ListItem>
                                        </List> 
                                    </CardContent>
                                    <CardActions sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                            backgroundColor: "#FEFCFD"
                                            }}>
                                        <Chip variant="contained" style={{color:'white',backgroundColor:'#2F5597', fontSize: 17}} label={ t('public:offers:choose_this_offer') } onClick={() => navigate('/demo')}/>
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