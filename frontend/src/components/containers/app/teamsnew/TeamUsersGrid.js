import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {
    Dialog, DialogActions, DialogTitle,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TeamService from "../../../../services/app/team.service";
import { useSnackbar } from "notistack";
import ProfileDefault from "../../../../assets/images/example/default.png";
import UserAddModal from "../teamsnew/UserAddModal";

function TeamUsersGrid(props) {

    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();
    const [listUsers, setListUsers] = useState([]);
    
    const [openDelete, setOpenDelete] = useState(false);
    const [userToDelete, setUserToDelete] = useState(0);
    const handleDeleteClose = () => {
        setOpenDelete(false);
        setUserToDelete(0)
    };
    const handleClickOnDelete = (userId) => {
        setOpenDelete(true)
        setUserToDelete(userId)
    };
    const handleDeleteConfirmation = async () => {
        await TeamService.deleteUserFromTeam({ userId: userToDelete, teamId: parseInt(props.teamId) }).then(async (res) => {
            if (res.status === 200) {
                enqueueSnackbar(t('app:teams:personalize.user_removed'), {
                    variant: 'success'
                });
                getTeam(props.teamId)
            } else {
                enqueueSnackbar(t('app:snackbar:error'), {
                    variant: 'error'
                });
            }
        })
        setOpenDelete(false);
    }

    const [openAddUser, setOpenAddUser] = useState(false);
    const handleAddUserOpen = () => {
        setOpenAddUser(true);
    };
    const handleAddUserClose = (reload) => {
        setOpenAddUser(false);
        if (reload) {
            getTeam(props.teamId);
        }
    };


    async function getTeam(index) {
        const res = await TeamService.getTeam(index);
        let listUsersTemp = []
        for (let i = 0; i < res.data.users.length; i++) {
            let object = {
                'id': res.data.users[i].id,
                'name': res.data.users[i].name,
                'position': res.data.users[i].position,
                'avatar': res.data.users[i].avatar
            }
            listUsersTemp.push(object);
        }
        setListUsers(listUsersTemp)
    }
    useEffect(() => {
        getTeam(props.teamId);
    }, [props.teamId]);

    const columns = [
        {
            field: 'name', width: 300, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    {t('app:teams:personalize.name')}
                </Typography>
            )
        },
        {
            field: 'position', width: 200, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    {t('app:teams:personalize.position')}
                </Typography>
            )
        },
        {
            field: 'avatar', width: 200, headerAlign: 'center', align: "center", resizable: false, headerName: "",
            renderCell: (params) => {
                return < Avatar src={params.row.avatar === null ? ProfileDefault : params.row.avatar} sx={{ width: 40, height: 40 }} />
            }
        },
        {
            field: 'action', headerName: '', minWidth: 200, headerAlign: 'center', align: "right", flex: 1, resizable: false,
            renderCell: (params) => {
                return (
                    <Chip
                        label={t('generic:delete')}
                        color="primary"
                        sx={{ borderColor: "#3C3B3D", color: "#3C3B3D" }}
                        onClick={() => handleClickOnDelete(params.row.id)}
                        icon={<DeleteIcon />}
                        variant="outlined"
                    />
                )
            }
        }
    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            
            <DataGrid rows={listUsers} columns={columns} disableColumnSelector={true} disableColumnMen={true} disableSelectionOnClick hideFooterPagination />
            
            <Grid container direction="column">
                <Grid item mt={5}>
                    <Chip
                        label={t('app:teams:personalize.add_user')}
                        sx={{
                            borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold"
                        }}
                        color="error"
                        icon={<AddCircleOutlineIcon />}
                        variant="outlined"
                        onClick={handleAddUserOpen}
                    />
                </Grid>
            </Grid>


            <Dialog
                open={openDelete}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t('app:teams:personalize.delete_from_team_ask')}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteClose} sx={{ color: "#696A6C" }} >{t('generic:cancel')}</Button>
                    <Button onClick={handleDeleteConfirmation} sx={{ color: "#D20303" }}> {t('generic:delete')} </Button>
                </DialogActions>
            </Dialog>

            <UserAddModal openModal={openAddUser} handleModalClose={handleAddUserClose} teamId={props.teamId} />
        </div>
    )
}

export default TeamUsersGrid;