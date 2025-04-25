/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";

import Container from "../layouts/Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

import { getPopularProducts } from "../../shared/api/products-api";

import {productListStyle} from "./styles";

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

  const elements = products.map(item => <ProductCard key={item.id} {...item} />);

  return (
    <Container>
      <SectionTitle title="Товары" />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div css={productListStyle}>
        {elements}
      </div>
    </Container>
  );
};

export default PopularProducts;
