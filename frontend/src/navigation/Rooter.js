import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Public_Routes from "./public/Routes";
import Home from "../views/Home";


function Rooter(){
    return(
        <Router>
            <Routes>
                <Route exact path={Public_Routes.HOME} element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default Rooter;