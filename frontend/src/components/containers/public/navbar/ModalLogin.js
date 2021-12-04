import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useTranslation} from "react-i18next";
import {Divider, TextField} from '@mui/material';
import { Button } from '@mui/material';
import ModalGeneric from "../../generic/ModalGeneric";
import Grid from "@mui/material/Grid";
import GoogleIcon from "../../../molecules/icons/GoogleIcon";
import MicrosoftIcon from "../../../molecules/icons/MicrosoftIcon";
import SlackIcon from "../../../molecules/icons/SlackIcon";
import UserService from "../../../../services/admin/user.service";

function ModalLogin(props){
    const { t } = useTranslation();

    const getAllUsers = async () => {
        console.log(await UserService.getAllUsers());
    }

    const createDefaultUser = async () => {
        console.log(await UserService.createUser());
    }

    return(
        <ModalGeneric open={props.open} handleClose={props.handleClose} title={t('public:navbar:connect_modal.title')} fullWidth={true} maxWidth={"sm"}>
            <div>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item xs={12}>
                        <Button variant="outlined" style={{width:'100%'}} onClick={getAllUsers}>
                            <GoogleIcon/>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            {t('public:navbar:connect_modal.google')}
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Button variant="outlined" style={{width:'100%'}} onClick={createDefaultUser}>
                                <MicrosoftIcon/>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                {t('public:navbar:connect_modal.teams')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Button variant="outlined" style={{width:'100%'}}>
                                <SlackIcon/>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                {t('public:navbar:connect_modal.slack')}
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