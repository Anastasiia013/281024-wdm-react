/** @jsxImportSource @emotion/react */

import {productCardWrapperStyle} from "./styles";

const ProductCard = ()=> {
    return (
        <div css={productCardWrapperStyle}>
            <div>
                <img src="" alt="" />
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