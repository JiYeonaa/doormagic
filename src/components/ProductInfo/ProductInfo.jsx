import React from 'react';
import {Link} from 'react-router-dom'

const ProductInfo = ({product}) => {
    return (
        <div className="product__info">
            <div className="container">
                <div className="product__info-info">
                    <h2 className="product__info-title">
                        {product.title}
                    </h2>
                    <Link to={'/'} className="product__info-author">
                        {product.author}
                        (Автор)
                    </Link>

                    <ul className="product__info-ul">
                        <li className="product__info-li">Издательство: <span className="product__info-span">{product.public}</span></li>
                        <li className="product__info-li">Жанр: <span className="product__info-span">{product.category}</span></li>
                        <li className="product__info-li">Переплет: <span className="product__info-span">{product.book}</span></li>
                        <li className="product__info-li">Возрастное ограничение: <span className="product__info-span">{product.limit}</span></li>
                    </ul>

                    <div className="product__info-buy">
                        <form action="" className="product__info-form">
                            <span className="product__info-quantity">Quantity</span>
                            <input type="number" className="product__info-num" min={1} max={9}/>
                            <span className="product__info-sell">{product.price}</span>
                        </form>
                    </div>

                    <div className="product__info-btns">
                        <button className="product__info-btn">Добавить в Корзину</button>
                        <button className="product__info-btn">Отложить в Избранное</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductInfo;