import { getCurrentDate } from "../../utils/date-functions";

import "./Main.css";

const Main = ()=> {
    return (
        <div>
            <h1>Welcome to site. Today {getCurrentDate()}</h1>
        </div>
    )
}

export default Main;