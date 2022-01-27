import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import TeamService from "../../../../services/app/team.service";
import { useSnackbar } from "notistack";


function UsersGrid(props) {

    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickOnDelete = (userId) => {
        setOpenDelete(true)
        setUserToDelete(userId)
    };


    const [openDelete, setOpenDelete] = useState(false);
    const [userToDelete, setUserToDelete] = useState(0);


    const handleDeleteClose = () => {
        setOpenDelete(false);
        setUserToDelete(0)
    };

    const handleDeleteConfirmation = async () => {
        await TeamService.deleteUserFromTeam({ userId: userToDelete, teamId: parseInt(props.teamId) }).then(async (res) => {
            if (res.status === 200) {
                enqueueSnackbar(t('app:teams:personalize.user_removed'), {
                    variant: 'success'
                });
                props.updateTeam(props.teamId)
            } else {
                enqueueSnackbar(t('app:snackbar:error'), {
                    variant: 'error'
                });
            }
        })
        setOpenDelete(false);
    }

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
                return <Avatar src={params.row.avatar} sx={{ width: 35, height: 35 }} />
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
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={props.listUsers} columns={columns} disableColumnSelector={true} disableColumnMen={true} disableSelectionOnClick hideFooterPagination />

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
        </div>
    )
}

export default UsersGrid;