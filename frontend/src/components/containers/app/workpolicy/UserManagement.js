import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import UserService from "../../../../services/app/user.service";
import { useEffect, useState } from "react";
import { Button, Chip, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


function UserManagement() {

    const { t } = useTranslation();

    const [users, setUsers] = useState([]);

    const columns = [
        { field: 'firstName', headerName: t('generic:firstname'), width: 130 },
        { field: 'lastName', headerName: t('generic:name'), width: 130 },
        {
            field: 'position',
            headerName: t('generic:position'),
            width: 130,
            resizable: false,
            sortable: false,
        },
        {
            field: 'email',
            headerName: t('generic:email'),
            width: 130
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
                    <Button variant={"contained"} color={"secondary"}>{t('app:rh_parameters:users.add_user')}</Button>
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