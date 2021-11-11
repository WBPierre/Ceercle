import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useTranslation} from "react-i18next";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function DialogLogin(props){
    const { t } = useTranslation();
    return(
        <div>
            <DialogContent dividers>
                <DialogContentText>
                    { t('navbar:create_profile_dialog.content') }
                </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label={ t('generic:email') }
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label={ t('generic:password') }
                        type="password"
                        fullWidth
                        variant="standard"
                    />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={props.cancel}>{ t('generic:cancel') }</Button>
                <Button variant="text" onClick={props.confirm}>{ t('generic:login') }</Button>
            </DialogActions>
        </div>
    )
}

export default DialogLogin;