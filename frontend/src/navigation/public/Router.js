import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Public_Routes from "./Routes";
import Home from "../../views/public/Home";
import Offers from "../../views/public/Offers";
import Demo from "../../views/public/Demo";
import Login from "../../views/public/Login";
import Legal from "../../views/public/Legal";


function Rooter(){
    return(
        <Routes>
            <Route exact path={Public_Routes.HOME} element={<Home/>} />
            <Route exact path={Public_Routes.OFFERS} element={<Offers/>}/>
            <Route exact path={Public_Routes.DEMO} element={<Demo/>}/>
            <Route exact path={Public_Routes.LOGIN} element={<Login/>}/>
            <Route exact path={Public_Routes.LEGAL} element={<Legal/>}/>
        </Routes>
    )
}

export default Rooter;