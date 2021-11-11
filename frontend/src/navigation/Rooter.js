import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Public_Routes from "./public/Routes";
import Home from "../views/Home";
import Offers from "../views/Offers";


function Rooter(){
    return(
        <Router>
            <Routes>
                <Route exact path={Public_Routes.HOME} element={<Home/>} />
                <Route exact path={Public_Routes.OFFERS} element={<Offers/>}/>
            </Routes>
        </Router>
    )
}

export default Rooter;