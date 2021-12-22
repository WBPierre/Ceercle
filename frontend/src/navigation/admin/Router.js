import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import * as Admin_Routes from "./Routes";
import Dashboard from "../../views/admin/Dashboard";

function Rooter(){
    return(
        <Routes>
            <Route exact path={Admin_Routes.DASHBOARD} element={<Dashboard/>} />
            <Route path={"*"} element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Rooter;