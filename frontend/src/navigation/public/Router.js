import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import * as Public_Routes from "./Routes";
import Home from "../../views/public/Home";
import Offers from "../../views/public/Offers";
import Demo from "../../views/public/Demo";
import Legal from "../../views/public/Legal";
import Cgu from "../../views/public/Cgu";


function Rooter(){
    return(
        <Routes>
            <Route exact path={Public_Routes.HOME} element={<Home/>} />
            <Route exact path={Public_Routes.OFFERS} element={<Offers/>}/>
            <Route exact path={Public_Routes.DEMO} element={<Demo/>}/>
            <Route exact path={Public_Routes.CGU} element={<Cgu/>}/>
            <Route exact path={Public_Routes.LEGAL} element={<Legal/>}/>
            <Route path={"*"} element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Rooter;