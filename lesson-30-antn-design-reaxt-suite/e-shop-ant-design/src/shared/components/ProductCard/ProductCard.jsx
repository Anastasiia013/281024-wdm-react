/** @jsxImportSource @emotion/react */
import { Card, Flex } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import {
  productCardWrapperStyle,
  productCardPriceNameStyle,
  productCardPriceStyle,
  productCardAddToCartIconStyle,
} from "./styles";

const { Meta } = Card;

const ProductCard = ({ id, image, name, price, addToCart }) => {
  return (
    <Card
      hoverable
      css={productCardWrapperStyle}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={name} />
      <Flex justify="space-between" align="flex-end">
        <div>
          <span css={productCardPriceNameStyle}>Цена:</span>
          <span css={productCardPriceStyle}>{price} €</span>
        </div>
        <PlusCircleOutlined
          css={productCardAddToCartIconStyle}
          onClick={() => addToCart(id)}
        />
      </Flex>
    </Card>
  );
};

export default ProductCard;
