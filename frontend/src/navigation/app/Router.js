import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import * as App_Routes from "./Routes";
import Dashboard from "../../views/app/Dashboard";
import Glossary from "../../views/app/Glossary";
import Login from "../../views/app/Login";
import ProtectedRoute from "./ProtectedRoute";

function Rooter() {
    return (
        <Routes>
            <Route exact path={App_Routes.LOGIN} element={<Login/>}/>
            <Route exact path={App_Routes.DASHBOARD} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route exact path={App_Routes.GLOSSARY} element={<ProtectedRoute><Glossary /></ProtectedRoute>} />
        </Routes>
    )
}

export default Rooter;