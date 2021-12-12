import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import { Avatar, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';
import example1 from "../../../../assets/images/example/1.jpg";
import example2 from "../../../../assets/images/example/2.jpg";
import example3 from "../../../../assets/images/example/3.jpg";
import example4 from "../../../../assets/images/example/4.jpg";


function test(children) {
    return (
        <Box display="flex">< Avatar src={children.avatar} /> {children.value.name} </Box>
    )
}

const columns = [
    {
        field: 'image',
        headerName: '',
        width: 250,
        editable: true,
        renderCell: (params) =>
            <Grid container direction="row">
                <Grid item md={4}>
                    <Avatar src={params.value.src} sx={{ width: 56, height: 56 }} />
                </Grid>
                <Grid item md={8}>
                    <Grid container column>
                        <Grid item>
                            <Typography color="black" style={{ fontWeight: 500, fontSize: 18 }}>
                                {params.value.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="grey" style={{ fontWeight: 300, fontSize: 15 }}>
                                {params.value.position}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    },
    {
        field: 'team',
        headerName: 'Equipe',
        width: 200,
        editable: false,
    },
    {
        field: "favorite",
        headerName: "Favori",
        sortable: false,
        renderCell: (params) => {
            const onClick = (e) => {
                e.stopPropagation(); // don't select this row after clicking

                const api: GridApi = params.api;
                const thisRow: Record<string, GridCellValue> = {};

                api
                    .getAllColumns()
                    .filter((c) => c.field !== "__check__" && !!c)
                    .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                    );

                return alert(JSON.stringify(thisRow, null, 4));
            };

            return <StarIcon sx={{ color: "#F0CC55" }} onClick={onClick} />
        }
    }
];

const rows = [
    { id: 1, image: { src: example1, name: "Louis Lacaille", position: "Chef de projet" }, team: "Operation" },
    { id: 2, image: { src: example2, name: "Martin Zigrid", position: "Responsable Marketing" }, team: "B2B" },
    { id: 3, image: { src: example3, name: "Clément Chauve", position: "Tech Lead" }, team: "Tech" },
    { id: 4, image: { src: example4, name: "Marie Lacombe", position: "Office Manager" }, team: "Admin" }
];

export default function GridGlorssary() {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            rowHeight={80}
            disableSelectionOnClick
        />
    );
}
