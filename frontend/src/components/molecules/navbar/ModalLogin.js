import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useTranslation} from "react-i18next";
import {Divider, TextField} from '@mui/material';
import { Button } from '@mui/material';
import ModalGeneric from "../../containers/generic/ModalGeneric";
import Grid from "@mui/material/Grid";
import GoogleIcon from "../icons/GoogleIcon";
import MicrosoftIcon from "../icons/MicrosoftIcon";
import SlackIcon from "../icons/SlackIcon";

function ModalLogin(props){
    const { t } = useTranslation();
    return(
        <ModalGeneric open={props.open} handleClose={props.handleClose} title={t('navbar:connect_modal.title')} fullWidth={true} maxWidth={"sm"}>
            <div>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item xs={12}>
                        <Button variant="outlined" style={{width:'100%'}}>
                            <GoogleIcon/>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            {t('navbar:connect_modal.google')}
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Button variant="outlined" style={{width:'100%'}}>
                                <MicrosoftIcon/>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                {t('navbar:connect_modal.teams')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Button variant="outlined" style={{width:'100%'}}>
                                <SlackIcon/>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                {t('navbar:connect_modal.slack')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            id="name"
                            label={ t('generic:email') }
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            id="name"
                            label={ t('generic:password') }
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button variant="text" onClick={props.confirm}>{ t('generic:login') }</Button>
                </DialogActions>
            </div>
        </ModalGeneric>
    )
}

export default ModalLogin;