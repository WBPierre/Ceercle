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
            <Route exact path={App_Routes.LOGIN} element={<Login />} />
            <Route exact path={App_Routes.DASHBOARD} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route exact path={App_Routes.GLOSSARY} element={<ProtectedRoute><Glossary /></ProtectedRoute>} />
            <Route exact path={App_Routes.CALENDAR} element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route exact path={App_Routes.ACCOUNT} element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route exact path={App_Routes.WORKPOLICY} element={<ProtectedRoute><WorkPolicy /></ProtectedRoute>} />
            <Route exact path={App_Routes.TEAMS} element={<ProtectedRoute><Teams /></ProtectedRoute>} />
            <Route exact path={App_Routes.TEAMSETTING} element={<ProtectedRoute><TeamSetting /></ProtectedRoute>} />
            <Route exact path={App_Routes.STATS} element={<ProtectedRoute><Stats /></ProtectedRoute>} />
            <Route path={"*"} element={<Navigate to={'/app' + App_Routes.LOGIN} />} />
        </Routes>
    )
}

export default Rooter;