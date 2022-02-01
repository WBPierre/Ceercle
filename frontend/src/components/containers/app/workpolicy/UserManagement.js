import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import UserService from "../../../../services/app/user.service";
import { useEffect, useState } from "react";
import {Button, Chip, Grid, TextField} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useSnackbar} from "notistack";
import * as React from "react";

function UserManagement() {

    const { t } = useTranslation();

    const [users, setUsers] = useState([]);
    const [openDisable, setOpenDisable] = useState(false);
    const [openInvit, setOpenInvit] = useState(false);
    const [email, setEmail] = useState('');
    const [selectedUser, setSelectedUser] = useState(0);
    const { enqueueSnackbar } = useSnackbar();

    const handleClickOpenDisable = (id) => {
        setSelectedUser(id);
        setOpenDisable(true);
    };

    const handleCloseDisable = () => {
        setOpenDisable(false);
        setSelectedUser(0);
    };

    const handleClickOpenInvit = () => {
        setOpenInvit(true);
    };

    const handleCloseInvit = () => {
        setOpenInvit(false);
    };

    const columns = [
        { field: 'firstName', headerName: t('generic:firstname'), width: 130 },
        { field: 'lastName', headerName: t('generic:name'), width: 130 },
        {
            field: 'position',
            headerName: t('generic:position'),
            width: 130,
            resizable: false,
            sortable: false,
        },
        {
            field: 'email',
            headerName: t('generic:email'),
            width: 130
        },
        {
            field: 'actions',
            headerName: '',
            width: 130,
            headerAlign: 'center', align: "right", flex: 1, resizable: false,
            sortable: false,
            renderCell: (params) => {
                return <Chip
                    label={t('generic:delete')}
                    color="primary"
                    onClick={() => handleClickOpenDisable(params.id)}
                    sx={{ borderColor: "#3F07A8", color: "#3F07A8" }}
                    icon={<DeleteForeverIcon />}
                    variant="outlined"
                />;
            }
        }
    ];

    async function getUsers() {
        await UserService.getUsers().then((res) => {
            setUsers(res.data);
        })
    }

    useEffect(() => {
        getUsers();
    }, [])

    const disableUser = async () => {
        if(selectedUser !== 0){
            await UserService.disableUser(selectedUser);
            handleCloseDisable();
            await getUsers();
            enqueueSnackbar(t('app:dashboard:snackbar_success'), {
                variant: 'success'
            });
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const invitUser = async () => {
        if(email.length > 4){
            const resources = {
                email: email
            };
            await UserService.createInvitation(resources);
            handleCloseInvit();
            enqueueSnackbar(t('app:dashboard:snackbar_success'), {
                variant: 'success'
            });
        }
    }



    return (
        <div style={{ width: '100%' }}>
            <Dialog
                open={openDisable}
                onClose={handleCloseDisable}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('app:rh_parameters:users.delete_user_title')}
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('app:rh_parameters:users.delete_user')}
                    </DialogContentText>
                    {selectedUser !== 0 && users.length !== 0 &&
                    <DialogContentText id="alert-dialog-description" style={{color:'black', fontWeight:500, marginTop:'5%'}}>
                        {`${users.find(x => x.id === selectedUser).firstName} ${users.find(x => x.id === selectedUser).lastName}`}
                    </DialogContentText>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDisable}>{t('generic:cancel')}</Button>
                    <Button onClick={() => disableUser()} autoFocus>
                        {t('generic:delete')}
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openInvit}
                onClose={handleCloseInvit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('app:rh_parameters:users.create_link_user')}
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('app:rh_parameters:users.enter_email')}
                    </DialogContentText>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={t('generic:email')}
                        name="email"
                        type={"email"}
                        value={email}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseInvit}>{t('generic:cancel')}</Button>
                    <Button onClick={() => invitUser()} autoFocus>
                        {t('generic:create')}
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid container direction={"column"} spacing={1}>
                <Grid item xs={12} textAlign={"right"}>
                    <Button variant={"contained"} color={"secondary"} onClick={() => handleClickOpenInvit()}>{t('app:rh_parameters:users.add_user')}</Button>
                </Grid>
                <Grid item style={{ height: '60vh' }}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                        disableDensitySelector
                        disableColumnFilter
                    />
                </Grid>
            </Grid>

        </div>
    )
}
export default UserManagement;