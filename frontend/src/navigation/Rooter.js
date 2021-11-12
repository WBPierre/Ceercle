import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Public_Routes from "./public/Routes";
import Home from "../views/Home";
import Offers from "../views/Offers";
import Contact from "../views/Contact";


function Rooter(){
    return(
        <Router>
            <Routes>
                <Route exact path={Public_Routes.HOME} element={<Home/>} />
                <Route exact path={Public_Routes.OFFERS} element={<Offers/>}/>
                <Route exact path={Public_Routes.CONTACT} element={<Contact/>} />
            </Routes>
        </Router>
    )
}

export default Rooter;