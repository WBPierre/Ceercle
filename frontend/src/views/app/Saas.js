import AppBar from "../../components/containers/app/navbar/AppBar";
import DrawerCustom from "../../components/containers/app/navbar/DrawerCustom";
import Dashboard from "../../components/containers/app/navbar/Dashboard";
import Box from "@mui/material/Box";

function Saas() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar />
            <DrawerCustom />
            <Dashboard />
        </Box>
    )
}

export default Saas;