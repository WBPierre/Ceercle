import { DataGrid } from '@mui/x-data-grid';
import UserService from "../../../../services/app/user.service";
import { useEffect, useState } from "react";
import { Button, Chip, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
    { field: 'firstName', headerName: 'Prénom', width: 130 },
    { field: 'lastName', headerName: 'Nom', width: 130 },
    {
        field: 'position',
        headerName: 'Position',
        width: 200,
        resizable: false,
        sortable: false,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200
    },
    {
        field: 'actions',
        headerName: '',
        width: 130,
        headerAlign: 'center', align: "right", flex: 1, resizable: false,
        sortable: false,
        renderCell: (params) => {
            return <Chip
                label="Modifier"
                color="primary"
                sx={{ borderColor: "#3F07A8", color: "#3F07A8" }}
                icon={<EditIcon />}
                variant="outlined"
            />;
        }
    }
];

function UserManagement(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            await UserService.getUsers().then((res) => {
                setUsers(res.data);
            })
        }
        getUsers();
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <Grid container direction={"column"} spacing={1}>
                <Grid item xs={12} textAlign={"right"}>
                    <Button variant={"contained"} color={"secondary"}>Ajouter un utilisateur</Button>
                </Grid>
                <Grid item style={{ height: '60vh' }}>
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

        </div>
    )
}
export default UserManagement;