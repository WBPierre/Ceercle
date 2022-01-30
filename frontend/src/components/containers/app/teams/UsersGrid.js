import { useNavigate } from "react-router-dom";
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
import ProfileDefault from "../../../../assets/images/example/default.png";
import UserService from "../../../../services/app/user.service";

function UsersGrid(props) {



    let navigate = useNavigate();
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
                enqueueSnackbar('Utilisateur retiré de l\'équipe', {
                    variant: 'success'
                });
                props.updateTeam(props.teamId)
            } else {
                enqueueSnackbar('Une erreur est survenue', {
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
                    Nom
                </Typography>
            )
        },
        {
            field: 'position', width: 200, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    Rôle
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
                        label="Supprimer"
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
                    Supprimer de l'équipe ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteClose} sx={{ color: "#696A6C" }} >Annuler</Button>
                    <Button onClick={handleDeleteConfirmation} sx={{ color: "#D20303" }}> Supprimer </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UsersGrid;