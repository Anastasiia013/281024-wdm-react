import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {selectIsAuthenticate} from "../../redux/autenticate/autenticate-selectors"

import Auth from "../../components/Auth/Auth";

import PageTitle from "../../components/PageTitle/PageTitle";

const LoginPage = ()=> {
    const isAuthenticate = useSelector(selectIsAuthenticate);

    if(isAuthenticate) {
        return <Navigate to="/" />
    }

    return (
        <main>
            <div className="container">
                <PageTitle>Login</PageTitle>
                <Auth />
            </div>
        </main>
    )
}

export default LoginPage;