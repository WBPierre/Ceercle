import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PublicRooter from "./public/Router";
import AdminRooter from "./admin/Router";
import AppRooter from "./app/Router";
import ScrollToTop from "./ScrollToTop";

function Rooter(){
    return(
        <Router>
            <ScrollToTop>
                <PublicRooter/>
                <AppRooter/>
                <AdminRooter/>
            </ScrollToTop>
        </Router>
    )
}

export default Rooter;