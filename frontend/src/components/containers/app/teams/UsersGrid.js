import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



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
                <strong>
                    {'Nom'}
                </strong>
            )
        },
        {
            field: 'position', width: 200, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <strong>
                    {'Rôle'}
                </strong>
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
                        color="error"
                        onClick={() => props.handleDeleteUser(params.row.id)}
                        onDelete={handleDelete}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                    />
                )
            }
        }
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={props.listTeams} columns={columns} rowsPerPageOptions={[10]} disableColumnSelector disableColumnMen />
        </div>
    )
}

export default UsersGrid;