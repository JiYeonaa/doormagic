import React from 'react';

const Cart = () => {
    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <h2 className="cart__title">Корзина</h2>
                    <p className="cart__count">Удалить всё</p>
                    <span className="card__line"></span>
                </div>

                <div className="cart__row">
                    <div className="cart__card">
                        <img src="https://bookhouse.kg/media/galleryphoto/2023/4/797be0a4-7c0b-4918-8ceb-9d9b5fccb54a.jpg.600x780_q94.jpg" alt=""/>
                        <div className="cart__card-info">
                            <h3 className="cart__card-title">Каштановый человечек</h3>
                            <p className="cart__card-author">Сорен Свейструп</p>
                        </div>

                        <div className="cart__card-quantity">
                            <button className="cart__card-min">-</button>
                            <input type="text" className="cart__card-num" min={1} max={9} />
                            <button className="cart__card-max">+</button>
                        </div>

                        <div className="cart__card-price">600</div>

                        <button className="cart__card-deleted">X</button>
                    </div>
                </div>

                <div className="cart__bottom">
                    <p className="cart__bottom-count">
                        Итоговая стоимость: 600
                    </p>
                    <button className="cart__bottom-order">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;