import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import * as Admin_Routes from "./Routes";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import useAuth from "../components/context/auth/AuthHelper";
import CompanyList from "../views/CompanyList";
import Company from "../views/Company";
import Office from "../components/containers/company/Office";
import OfficeElement from "../views/OfficeElement";
import ProtectedRoute from "./ProtectedRoute";
import {LOGIN} from "./Routes";

function Rooter(){
    return(
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path={Admin_Routes.LOGIN} element={<Login/>}/>
                    <Route exact path={Admin_Routes.DASHBOARD} element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                    <Route exact path={Admin_Routes.COMPANY_LIST} element={<ProtectedRoute><CompanyList/></ProtectedRoute>} />
                    <Route exact path={Admin_Routes.COMPANY_DETAILS} element={<ProtectedRoute><Company/></ProtectedRoute>} />
                    <Route exact path={Admin_Routes.OFFICE} element={<ProtectedRoute><Office/></ProtectedRoute>} />
                    <Route exact path={Admin_Routes.OFFICE_ELEMENT} element={<ProtectedRoute><OfficeElement/></ProtectedRoute>} />
                    <Route path={"*"} element={<Navigate to={Admin_Routes.LOGIN} />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default Rooter;