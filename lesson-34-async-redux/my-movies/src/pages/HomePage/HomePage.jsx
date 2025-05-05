import PageLayout from "../../modules/layouts/PageLayout/PageLayout";

import MyMovies from "../../modules/MyMovies/MyMovies";

const HomePage = ()=> {
    return (
        <PageLayout title="My movies">
            <MyMovies />
        </PageLayout>
    )
}

export default HomePage;