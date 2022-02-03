import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper, Stack, Switch,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import UserService from "../../../services/admin/user.service";
import {useSnackbar} from "notistack";
import Divider from "@mui/material/Divider";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import {DataGrid} from "@mui/x-data-grid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import moment from "moment";

function Users(props){
    const [users, setUsers] = useState([]);
    const [openDisable, setOpenDisable] = useState(false);
    const [openInvit, setOpenInvit] = useState(false);
    const [email, setEmail] = useState('');
    const [invitType, setInvitType] = useState(false);
    const [isHR, setIsHR] = useState(false);
    const [selectedUser, setSelectedUser] = useState(0);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(()=>{
        getAllUsersOfCompany();
    }, [])

    const getAllUsersOfCompany = async () => {
        await UserService.getAllUsersOfCompany(props.company.id).then((res) => {
            setUsers(res.data);
            console.log(res.data);
        })
    }

    const handleClickOpenDisable = (id) => {
        setSelectedUser(id);
        setOpenDisable(true);
    };

    const handleCloseDisable = () => {
        setOpenDisable(false);
        setSelectedUser(0);
    };

    const handleClickOpenInvit = () => {
        setIsHR(false);
        setInvitType(false);
        setOpenInvit(true);
    };

    const handleCloseInvit = () => {
        setOpenInvit(false);
    };

    const columns = [
        { field: 'firstName', headerName: "Firstname", width: 130 },
        { field: 'lastName', headerName: "Lastname", width: 130 },
        {
            field: 'position',
            headerName: "Position",
            width: 130,
            resizable: false,
            sortable: false,
        },
        {
            field: 'email',
            headerName: "Email",
            width: 130
        },
        {
            field: 'phoneNumber',
            headerName: "Phone",
            width: 130
        },
        {
            field: 'admin',
            headerName: '',
            width: 130,
            headerAlign: 'center', align: "center", resizable: false,
            sortable: false,
            renderCell: (params) => {
                if(params.row.isAdmin){
                    return <Chip
                        label={"ADMIN"}
                        color="primary"
                    />;
                }
            }
        },
        {
            field: 'status',
            headerName: '',
            width: 130,
            headerAlign: 'center', align: "center", resizable: false,
            sortable: false,
            renderCell: (params) => {
                return <Chip
                    label={params.row.isDeleted ? "Disabled" : params.row.active ? "Active" : 'Pending'}
                    color={params.row.isDeleted ? "error" : params.row.active ? "success" : 'warning'}
                />;
            }
        },
        {
            field: 'actions',
            headerName: '',
            width: 130,
            headerAlign: 'center', align: "right", flex: 1, resizable: false,
            sortable: false,
            renderCell: (params) => {
                if(params.row.active){
                    return <Chip
                        label="Disable"
                        color="primary"
                        onClick={() => handleClickOpenDisable(params.row.id)}
                        sx={{ borderColor: "#3F07A8", color: "#3F07A8" }}
                        icon={<DesktopAccessDisabledIcon />}
                        variant="outlined"
                    />;
                }
            }
        }
    ];

    const disableUser = async () => {
        if(selectedUser !== 0){
            await UserService.disableUser(selectedUser);
            handleCloseDisable();
            await getAllUsersOfCompany();
            enqueueSnackbar("Operation successful", {
                variant: 'success'
            });
        }
    }

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'isHR':
                setIsHR(e.target.checked);
                break;
            case 'invitType':
                setInvitType(e.target.checked);
                break;
            default: return;
        }
    }

    const invitUser = async () => {
        if(email.length > 4){
            const resources = {
                email: email,
                admin: isHR,
                type: invitType,
                companyId: props.company.id
            };
            if(!invitType){
                if(moment(props.company.activation_day, 'YYYY-MM-DD', true).diff(moment().format('YYYY-MM-DD')) <= 0){
                    enqueueSnackbar("Company activation is already done.", {
                        variant: 'warning'
                    });
                    return;
                }
            }
            await UserService.createInvitation(resources);
            handleCloseInvit();
            if(invitType){
                enqueueSnackbar("User has been invited", {
                    variant: 'success'
                });
            }else{
                enqueueSnackbar("User will be invited at company activation", {
                    variant: 'success'
                });
            }

        }
    }

    return(
        <Paper style={{borderRadius:'25px', padding: '2%', height:'100%'}}>
            <Dialog
                open={openDisable}
                onClose={handleCloseDisable}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Do you want to disable this user ?
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This user will be disabled, but not deleted. (WORK IN PROGRESS - Issue for invoice reporting).
                    </DialogContentText>
                    {selectedUser !== 0 && users.length !== 0 &&
                    <DialogContentText id="alert-dialog-description" style={{color:'black', fontWeight:500, marginTop:'5%'}}>
                        {`${users.find(x => x.id === selectedUser).firstName} ${users.find(x => x.id === selectedUser).lastName}`}
                    </DialogContentText>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDisable}>Cancel</Button>
                    <Button onClick={() => disableUser()} autoFocus>
                        Disable
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
                    Invit a user
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <Grid container direction={"column"} spacing={5}>
                        <Grid item>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type={"email"}
                                value={email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item>
                                    <Typography>Is HR ?</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>No</Typography>
                                    <Switch value={isHR} onChange={handleChange} name={"isHR"}  inputProps={{ 'aria-label': 'ant design' }} />
                                    <Typography>Yes</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item>
                                    <Typography>Invitation trigger</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>At company activation</Typography>
                                    <Switch value={invitType} onChange={handleChange} name={"invitType"}  inputProps={{ 'aria-label': 'ant design' }} />
                                    <Typography>Right now</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseInvit}>Cancel</Button>
                    <Button onClick={() => invitUser()} autoFocus>
                        Invit
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid container direction={"column"} spacing={1} style={{height:'100%'}}>
                <Grid item xs={12} textAlign={"right"}>
                    <Button variant={"contained"} color={"primary"} onClick={() => handleClickOpenInvit()}>Add a user</Button>
                </Grid>
                <Grid item style={{ height: '75vh' }}>
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

        </Paper>
    )
}


export default Users;