import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import * as App_Routes from "./Routes";
import Dashboard from "../../views/app/Dashboard";

function Rooter() {
    return (
        <Routes>
            <Route exact path={App_Routes.DASHBOARD} element={<Dashboard />} />
        </Routes>
    )
}

export default Rooter;