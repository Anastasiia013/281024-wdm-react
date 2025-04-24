/** @jsxImportSource @emotion/react */

import { AddToCartIcon } from "../icons";

import {
  productCardWrapperStyle,
  productCardImageWrapperStyle,
  productCardImageStyle,
  productCardTitleStyle,
  productCardPriceNameStyle,
  productCardPriceStyle,
  productCardActionsStyle,
  productCardAddToCartIconStyle,
} from "./styles";

const ProductCard = () => {
  return (
    <div css={productCardWrapperStyle}>
      <div css={productCardImageWrapperStyle}>
        <img
          css={productCardImageStyle}
          src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/awjogtdnqxniqqk0wpgf/AIR%2BMAX%2B270.png"
          alt=""
        />
      </div>
      <p css={productCardTitleStyle}>Мужские Кроссовки Nike Air Zoom Pegasus</p>
      <div css={productCardActionsStyle}>
        <div>
          <span css={productCardPriceNameStyle}>Цена:</span>
          <span css={productCardPriceStyle}>180 €</span>
        </div>
        <span css={productCardAddToCartIconStyle}><AddToCartIcon /></span>
      </div>
    </div>
  );
};

export default ProductCard;
