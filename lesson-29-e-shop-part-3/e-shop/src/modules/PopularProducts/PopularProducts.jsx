import { useState, useEffect } from "react";

import Container from "../layouts/Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

import { getPopularProducts } from "../../shared/api/products-api";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      setLoading(true);
      const { data, error } = await getPopularProducts();
      setLoading(false);
      if (error) {
        return setError(error.response.data.message);
      }
      setProducts(data);
    };

    fetchPopularProducts();
  }, []);

  return (
    <Container>
      <SectionTitle title="Товары" />
    </Container>
  );
};

export default PopularProducts;
