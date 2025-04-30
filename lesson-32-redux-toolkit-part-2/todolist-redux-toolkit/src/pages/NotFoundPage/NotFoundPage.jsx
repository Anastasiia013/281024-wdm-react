import { Link } from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <main>
            <h1>Page not found</h1>
            <Link to="/">to home page</Link>
        </main>
    )
}

export default NotFoundPage;