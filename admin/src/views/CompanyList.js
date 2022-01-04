import CustomContainer from "../components/containers/CustomContainer";
import {useEffect, useState} from "react";
import CompanyService from "../services/admin/company.service";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function CompanyList(){
    let navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(async () => {
        const res = await CompanyService.getAll();
        console.log(res.data);
        setList(res.data);
    }, [])


    const columns: GridColDef[] = [
        { field: 'id', headerName: '#ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field:'action', headerName: 'Actions', width:150, renderCell: (params) => {
                return <Button onClick={() => navigate('/company/'+params.row.id)}>Gérer</Button>;
            }}
    ];



    if(list.length === 0) {
        return (<CustomContainer/>)
    }
    return(
        <CustomContainer>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={list} columns={columns} />
            </div>
        </CustomContainer>
    )
}

export default CompanyList;