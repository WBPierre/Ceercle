import CustomContainer from "../../components/containers/app/CustomContainer";
import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';
import { blue, red, green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Teams() {

    let navigate = useNavigate();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const list = [{ 'id': '1', 'name': "Finances", 'size': 7, 'color': blue[300] },
    { 'id': '2', 'name': "Marketing", 'size': 11, 'color': red[300] },
    { 'id': '3', 'name': "Opérations", 'size': 27, 'color': green[300] }]


    const columns = [
        { field: 'id', headerName: '#ID', width: 100, headerAlign: 'center', align: "center" },
        { field: 'name', headerName: 'Nom', width: 200, headerAlign: 'center', align: "center" },
        {
            field: 'color', headerName: 'Couleur', width: 100, headerAlign: 'center', align: "center", renderCell: (params) => {
                return <CircleIcon sx={{ color: params.row.color }} />;
            }
        },
        { field: 'size', headerName: 'Nombre', width: 100, headerAlign: 'center', align: "center" },
        {
            field: 'action', headerName: '', width: 300, headerAlign: 'center', align: "left", renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={2}>
                        <EditIcon color="primary" onClick={() => navigate('/app/team-settings/' + params.row.id)} />
                        <DeleteIcon color="error" onClick={() => alert("clicked")} />
                    </Stack>)
            }
        }

    ];



    if (list.length === 0) {
        return (<CustomContainer />)
    }
    return (
        <CustomContainer>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={list} columns={columns} />
            </div>
        </CustomContainer>
    )
}

export default Teams;