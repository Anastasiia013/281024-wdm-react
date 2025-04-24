/** @jsxImportSource @emotion/react */

import {productCardWrapperStyle, productCardImageWrapperStyle, productCardImageStyle} from "./styles";

const ProductCard = ()=> {
    return (
        <div css={productCardWrapperStyle}>
            <div css={productCardImageWrapperStyle}>
                <img css={productCardImageStyle} src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/awjogtdnqxniqqk0wpgf/AIR%2BMAX%2B270.png" alt="" />
            </div>
            <p>Мужские Кроссовки Nike Air Zoom Pegasus </p>
            <div>
                <div>
                    <span>Цена:</span>
                    <span>180 €</span>
                </div>
                <span>+</span>
            </div>
        </div>
    )
}

export default ProductCard;