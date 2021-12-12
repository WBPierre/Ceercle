import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import * as App_Routes from "./Routes";
import Dashboard from "../../views/app/Dashboard";
import Glossary from "../../views/app/Glossary";

function Rooter() {
    return (
        <Routes>
            <Route exact path={App_Routes.DASHBOARD} element={<Dashboard />} />
            <Route exact path={App_Routes.GLOSSARY} element={<Glossary />} />
        </Routes>
    )
}

export default Rooter;