import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PublicRooter from "./public/Router";
import AppRooter from "./app/Router";
import ScrollToTop from "./ScrollToTop";
import * as Public_Routes from "./public/Routes";
import * as App_Routes from "./app/Routes";

function Rooter(){
    if(!window.location.host.includes("ceercle")){
        return(
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path={Public_Routes.HOME+"*"} element={<PublicRooter/>} />
                        <Route path={App_Routes.DEFAULT+"/*"} element={<AppRooter/>} />
                    </Routes>
                </ScrollToTop>
            </Router>
        )
    }else{
        if(window.location.host.includes("app.ceercle")){
            return (
                <Router>
                    <ScrollToTop>
                        <Routes>
                            <Route path={"*"} element={<AppRooter/>} />
                        </Routes>
                    </ScrollToTop>
                </Router>
            )
        }else{
            return (
                <Router>
                    <ScrollToTop>
                        <Routes>
                            <Route path={Public_Routes.HOME+"*"} element={<PublicRooter/>} />
                        </Routes>
                    </ScrollToTop>
                </Router>
                )
        }
    }

}

export default Rooter;