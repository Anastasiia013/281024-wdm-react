import Container from "../../modules/layouts/Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

const MainPage = ()=> {
    return (
        <Container>
            <SectionTitle title="Товары" />
            <ProductCard />
        </Container>
    )
}

export default MainPage;