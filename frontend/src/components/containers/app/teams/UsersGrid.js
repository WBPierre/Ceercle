import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';


function UsersGrid(props) {

    let navigate = useNavigate();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

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
                return <Avatar src={params.row.avatar} sx={{ width: 35, height: 35 }} />
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
                        onClick={() => props.handleDeleteUser(params.row.id)}
                        icon={<DeleteIcon />}
                        variant="outlined"
                    />
                )
            }
        }
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={props.listTeams} columns={columns} disableColumnSelector={true} disableColumnMen={true} disableSelectionOnClick hideFooterPagination />
        </div>
    )
}

export default UsersGrid;