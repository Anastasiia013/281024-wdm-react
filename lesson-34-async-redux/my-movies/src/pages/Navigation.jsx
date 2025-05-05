import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import MyFilmsPage from "./MyFilmsPage/MyFilmsPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<MyFilmsPage />} />
        </Routes>
    )
}

export default Navigation;