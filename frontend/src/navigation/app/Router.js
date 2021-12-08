import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import * as App_Routes from "./Routes";
import Saas from "../../views/app/Saas";

function Rooter() {
    return (
        <Routes>
            <Route exact path={App_Routes.SAAS} element={<Saas />} />
        </Routes>
    )
}

export default Rooter;