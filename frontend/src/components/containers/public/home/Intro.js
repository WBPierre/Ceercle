import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import TypingEffect from "../../../molecules/home/TypingEffect";
import {Fade} from 'react-awesome-reveal';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import VisuelSAAS from "../../../../assets/images/home/productPresentation/visuel_SAAS.png";
import * as Public_Routes from "../../../../navigation/public/Routes";


function Intro(){
    const { t } = useTranslation();
    let navigate = useNavigate();

    return(
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: '#FDF9F6' }}>
                <Container style={{height:'85vh', paddingLeft:'5%', paddingRight:'5%'}} maxWidth={true}>
                    <Grid container style={{height:'100%'}} spacing={3} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={12} md={6}>
                            <Fade direction={"left"} triggerOnce={true}>
                                <Grid container direction="column" style={{height:'100%'}} justifyContent={"flex-start"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontSize={48} fontWeight={600} style={{color:'#203864', textAlign:'left'}}>
                                            {t('public:home:intro.title')}
                                        </Typography>
                                        <Typography variant="h4" fontSize={48} fontWeight={600} style={{textAlign:'left'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" fontSize={24} fontWeight={400} style={{textAlign:'left', color:'#3B3838'}}>
                                            {t('public:home:intro.content')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'left'}}>
                                        <Button variant={"contained"} style={{textTransform:'none', backgroundColor:'#3F07A8', fontSize:24, borderRadius:'25px', fontWeight:500}} onClick={() => navigate(Public_Routes.DEMO)}>{t("generic:demo")}</Button>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Fade direction={"right"} triggerOnce={true}>
                                <img src={VisuelSAAS} style={{ width: '100%' }} alt="contact" />
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, backgroundColor: '#FDF9F6' }}>
                <Container style={{paddingLeft:'5%', marginTop:'5%'}} maxWidth={true}>
                    <Grid container style={{height:'100%'}} spacing={3} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={12} md={6}>
                            <Fade direction={"left"} triggerOnce={true}>
                                <Grid container direction="column" style={{height:'100%'}} justifyContent={"flex-start"} spacing={5}>
                                    <Grid item>
                                        <Typography variant="h4" fontSize={48} fontWeight={600} style={{color:'#203864', textAlign:'left'}}>
                                            {t('public:home:intro.title')}
                                        </Typography>
                                        <Typography variant="h4" fontSize={48} fontWeight={600} style={{textAlign:'left'}}>
                                            <TypingEffect/>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" fontSize={28} fontWeight={400} style={{textAlign:'left', color:'#3B3838'}}>
                                            {t('public:home:intro.content')}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign:'left'}}>
                                        <Button variant={"contained"} style={{textTransform:'none', backgroundColor:'#3F07A8', fontSize:24, borderRadius:'25px', fontWeight:500}} onClick={() => navigate(Public_Routes.DEMO)}>{t("generic:demo")}</Button>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Fade direction={"right"} triggerOnce={true}>
                                <img src={VisuelSAAS} style={{ width: '100%' }} alt="contact" />
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Intro;