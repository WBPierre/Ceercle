import { useNavigate } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import { Chip } from "@mui/material";

function TeamsGrid(props) {

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
                    {'Nom '}
                    <span role="img" aria-label="enjoy">
                        🗣️
                    </span>
                </strong>
            )
        },
        {
            field: 'color', width: 200, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <strong>
                    {'Couleur '}
                    <span role="img" aria-label="enjoy">
                        🎨
                    </span>
                </strong>
            ),
            renderCell: (params) => {
                return <CircleIcon sx={{ color: params.row.color }} />;
            }
        },
        {
            field: 'size', width: 200, headerAlign: 'center', align: "center",
            renderHeader: () => (
                <strong>
                    {'Nombre de salariés '}
                    <span role="img" aria-label="enjoy">
                        🔟
                    </span>
                </strong>
            )
        },
        {
            field: 'action', headerName: '', minWidth: 200, headerAlign: 'center', align: "right", flex: 1, resizable: false,
            renderCell: (params) => {
                return (
                    <Chip
                        label="Modifier"
                        color="primary"
                        onClick={() => navigate('/app/team-settings/' + params.row.id)}
                        onDelete={handleDelete}
                        deleteIcon={<EditIcon />}
                        variant="outlined"
                    />
                )
            }
        }

    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={props.listTeams} columns={columns} rowsPerPageOptions={[8]} disableColumnSelector disableColumnMenu />
        </div>
    )
}

export default TeamsGrid;