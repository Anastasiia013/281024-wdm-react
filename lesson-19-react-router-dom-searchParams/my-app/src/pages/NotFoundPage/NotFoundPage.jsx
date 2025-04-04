import { Link } from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <main>
            <h1>Not found page</h1>
            <Link to="/">To main page</Link>
        </main>
    )
}

export default NotFoundPage;