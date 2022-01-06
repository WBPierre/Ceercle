import CustomContainer from "../components/containers/CustomContainer";
import {useEffect, useState} from "react";
import CompanyService from "../services/admin/company.service";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";

function CompanyList(){
    let navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(async () => {
        const res = await CompanyService.getAll();
        console.log(res.data);
        setList(res.data);
    }, [])




    if(list.length === 0) {
        return (<CustomContainer/>)
    }
    return(
        <CustomContainer>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nom</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    {list.length === 0 ? (
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    No data
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    ):(
                        <TableBody>

                            {list.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="center"><Button variant={"contained"} onClick={() => navigate('/company/'+row.id)}>Modify</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </CustomContainer>
    )
}

export default CompanyList;