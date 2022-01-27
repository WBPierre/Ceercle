import { Routes, Route, Navigate } from 'react-router-dom';
import * as App_Routes from "./Routes";
import Dashboard from "../../views/app/Dashboard";
import Glossary from "../../views/app/Glossary";
import Login from "../../views/app/Login";
import ProtectedRoute from "./ProtectedRoute";
import Calendar from "../../views/app/Calendar";
import Account from '../../views/app/Account';
import WorkPolicy from '../../views/app/WorkPolicy';
import Teams from '../../views/app/Teams';
import TeamSetting from '../../views/app/TeamSetting';
import Stats from "../../views/app/Stats";

function Rooter() {
    return (
        <Routes>
            <Route exact path={"/"} element={<Login />} />
            <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route exact path={"/glossary"} element={<ProtectedRoute><Glossary /></ProtectedRoute>} />
            <Route exact path={"/calendar"} element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route exact path={"/myaccount"} element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route exact path={"/workpolicy"} element={<ProtectedRoute><WorkPolicy /></ProtectedRoute>} />
            <Route exact path={"/teams"} element={<ProtectedRoute><Teams /></ProtectedRoute>} />
            <Route exact path={"/team-settings/:id"} element={<ProtectedRoute><TeamSetting /></ProtectedRoute>} />
            <Route exact path={"/stats"} element={<ProtectedRoute><Stats /></ProtectedRoute>} />
            <Route path={"*"} element={<Navigate to={App_Routes.LOGIN} />} />
        </Routes>
    )
}

export default Rooter;