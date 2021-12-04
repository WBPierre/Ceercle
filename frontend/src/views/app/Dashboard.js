import Container from "@mui/material/Container";
import NavBar from "../../components/containers/app/navbar/NavBar";
import Box from "@mui/material/Box";

function Dashboard(){
    return(
        <Box sx={{display:'flex'}}>
            <NavBar/>
        </Box>
    )
}

export default Dashboard;