import React from 'react';

const CheckOut = () => {
    return (
        <section className="checkout">
            <div className="container">
                <h2 className="cart__title">Оформление заказа</h2>
                <form action="" className="checkout__form">
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">Персональная информация</h3>
                        <div className="checkout__form-fields">
                            <span className="cart__card-author">Имя</span>
                            <input type="text" className="checkout__form-field"/>
                            <span className="cart__card-author">Фамилия</span>
                            <input type="text" className="checkout__form-field"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckOut;