import { Link } from "react-router-dom";
import { Heading } from "rsuite";

const NotFoundPage = ()=> {
    return (
        <main>
            <Heading level={1}>Page not found</Heading>
            <Link to="/">to home page</Link>
        </main>
    )
}

export default NotFoundPage;