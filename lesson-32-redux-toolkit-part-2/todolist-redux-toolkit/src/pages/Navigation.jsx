import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CompletedPage from "./CompletedPage/CompletedPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Navigation;