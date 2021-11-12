import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Public_Routes from "./public/Routes";
import Home from "../views/Home";
import Offers from "../views/Offers";
import Contact from "../views/Contact";
import Demo from "../views/Demo";


function Rooter(){
    return(
        <Router>
            <Routes>
                <Route exact path={Public_Routes.HOME} element={<Home/>} />
                <Route exact path={Public_Routes.OFFERS} element={<Offers/>}/>
                <Route exact path={Public_Routes.CONTACT} element={<Contact/>} />
                <Route exact path={Public_Routes.DEMO} element={<Demo/>}/>
            </Routes>
        </Router>
    )
}

export default Rooter;