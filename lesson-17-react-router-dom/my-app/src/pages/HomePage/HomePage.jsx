import About from "../../components/About/About";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PostList from "../../components/PostList/PostList";

import styles from "./HomePage.module.css";

const HomePage = ()=> {
    return (
        <main>
            <h1>Home page</h1>
            <About />
            <RegisterForm />
        </main>
    )
}

export default HomePage;