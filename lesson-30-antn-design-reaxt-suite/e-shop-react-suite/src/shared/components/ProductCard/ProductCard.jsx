/** @jsxImportSource @emotion/react */
import { Card } from "rsuite";
import PlusIcon from '@rsuite/icons/Plus';

import { AddToCartIcon } from "../icons";

import {
  productCardWrapperStyle,
  productCardImageWrapperStyle,
  productCardImageStyle,
  productCardPriceNameStyle,
  productCardPriceStyle,
  productCardActionsStyle,
  productCardAddToCartIconStyle,
} from "./styles";

const ProductCard = ({ id, image, name, price, addToCart }) => {
  return (
    <Card shaded="hover" css={productCardWrapperStyle}>
      <div css={productCardImageWrapperStyle}>
        <img css={productCardImageStyle} src={image} alt={name} />
      </div>
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Footer css={productCardActionsStyle}>
        <div>
          <span css={productCardPriceNameStyle}>Цена:</span>
          <span css={productCardPriceStyle}>{price} €</span>
        </div>
        <span css={productCardAddToCartIconStyle} onClick={() => addToCart(id)}>
          <PlusIcon style={{fontSize: "2em"}} />
        </span>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
