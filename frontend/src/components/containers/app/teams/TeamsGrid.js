import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import { Chip } from "@mui/material";
import Typography from '@mui/material/Typography';

function TeamsGrid(props) {

    const { t } = useTranslation();
    let navigate = useNavigate();

    const columns = [
        {
            field: 'name', width: 300, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    {t('app:teams:main.name')}
                </Typography>
            )
        },
        {
            field: 'color', width: 250, headerAlign: 'center', align: "center", resizable: false,
            renderHeader: () => (
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    {t('app:teams:main.color')}
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
                    {t('app:teams:main.nb_salaries')}
                </Typography>
            )
        },
        {
            field: 'action', headerName: '', minWidth: 200, headerAlign: 'center', align: "right", flex: 1, resizable: false,
            renderCell: (params) => {
                return (
                    <Chip
                        label={t('generic:update')}
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