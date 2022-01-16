import { useNavigate } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import { Chip } from "@mui/material";
import Typography from '@mui/material/Typography';


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
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    Nom 🗣️
                </Typography>
            )
        },
        {
            field: 'color', width: 250, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    Couleur 🎨
                </Typography>
            ),
            renderCell: (params) => {
                return <CircleIcon sx={{ color: params.row.color }} />;
            }
        },
        {
            field: 'size', width: 300, headerAlign: 'center', align: "center",
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    Nombre de salariés 🔟
                </Typography>
            )
        },
        {
            field: 'action', headerName: '', minWidth: 200, headerAlign: 'center', align: "right", flex: 1, resizable: false,
            renderCell: (params) => {
                return (
                    <Chip
                        label="Modifier"
                        color="primary"
                        sx={{ borderColor: "#3F07A8", color: "#3F07A8" }}
                        onClick={() => navigate('/app/team-settings/' + params.row.id)}
                        icon={<EditIcon />}
                        variant="outlined"
                    />
                )
            }
        }

    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={props.listTeams} columns={columns} disableColumnSelector disableColumnMenu disableSelectionOnClick hideFooterPagination />
        </div>
    )
}

export default TeamsGrid;