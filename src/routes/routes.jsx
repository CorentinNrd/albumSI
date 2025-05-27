import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from '../pages/home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}