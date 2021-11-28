import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PublicRooter from "./public/Router";
import AdminRooter from "./admin/Router";
import AppRooter from "./app/Router";

function Rooter(){
    return(
        <Router>
            <PublicRooter/>
            <AppRooter/>
            <AdminRooter/>
        </Router>
    )
}

export default Rooter;