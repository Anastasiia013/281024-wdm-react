import Container from "../../modules/layouts/Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

const MainPage = () => {
  return (
    <Container>
      <SectionTitle title="Товары" />
      <ProductCard
        img="https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/awjogtdnqxniqqk0wpgf/AIR%2BMAX%2B270.png"
        title="Мужские Кроссовки Nike Air Zoom Pegasus"
        price={180}
      />
    </Container>
  );
};

export default MainPage;
