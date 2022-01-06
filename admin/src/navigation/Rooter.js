import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import * as Admin_Routes from "./Routes";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import useAuth from "../components/context/auth/AuthHelper";
import CompanyList from "../views/CompanyList";
import Company from "../views/Company";
import Office from "../views/Office";
import OfficeElement from "../views/OfficeElement";

function Rooter(){
    const context = useAuth();
    return(
        <Router>
            <ScrollToTop>
                <Routes>
                    {!context.isAuth ?(
                        <Route exact path={Admin_Routes.DEFAULT} element={<Login/>}/>
                    ):(
                        <Route exact path={Admin_Routes.DEFAULT}>
                            <Route exact path={Admin_Routes.DEFAULT} element={<Dashboard/>} />
                            <Route exact path={Admin_Routes.COMPANY_LIST} element={<CompanyList/>} />
                            <Route exact path={Admin_Routes.COMPANY_DETAILS} element={<Company/>} />
                            <Route exact path={Admin_Routes.OFFICE} element={<Office/>} />
                            <Route exact path={Admin_Routes.OFFICE_ELEMENT} element={<OfficeElement/>} />
                        </Route>
                    )}
                    <Route path={"*"} element={<Navigate to={Admin_Routes.DEFAULT} />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default Rooter;