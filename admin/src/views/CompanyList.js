import CustomContainer from "../components/containers/CustomContainer";
import {useEffect, useState} from "react";
import CompanyService from "../services/admin/company.service";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateCompany from "../components/containers/company/CreateCompany";

function CompanyList(){
    let navigate = useNavigate();
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(async () => {
        companyGetAll();
    }, [])

    const companyGetAll = async () => {
        const res = await CompanyService.getAll();
        console.log(res.data);
        setList(res.data);
    }




    if(list.length === 0) {
        return (<CustomContainer/>)
    }
    return(
        <CustomContainer>
            <Grid container direction={"column"} spacing={5}>
                <Grid item>
                    <Paper>
                        <Grid container direction={"row"} p={3}>
                            <Grid item>
                                <Button color={"primary"} variant={"contained"} onClick={() => handleClickOpen()}>Add new client</Button>
                                <CreateCompany open={open} handleClose={handleClose} update={() => companyGetAll()}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Nom</TableCell>
                                    <TableCell align="center"></TableCell>
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
                                            <TableCell align="left"><Chip label={row.active ? 'Active':'Inactive'} color={row.active ? 'success':'warning'} style={{fontWeight: 500, fontSize: 16}}/></TableCell>
                                            <TableCell align="center"><Button variant={"contained"} onClick={() => navigate('/company/'+row.id)}>See company</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </CustomContainer>
    )
}

export default CompanyList;