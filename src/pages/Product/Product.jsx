import React, {useEffect, useState} from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {useParams} from "react-router-dom"
import api from "../../config/api/api";

const Product = () => {

    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        api(`product/${params.id}`)
            .then((res) => setProduct(res))
    }, []);

    console.log(product);

    if ('id' in product) {
        return (
            <section className="product">
                <div className="container">
                    <div className="product__row">
                        <ProductSlider/>
                        <ProductInfo product={product}/>
                    </div>

                    <h2 className="product__info-titleDesc">Описание книги</h2>
                    <p className="product__info-desc">
                        {product.description}
                    </p>
                </div>
            </section>
        );
    } else {
        return <h2>Loading...</h2>
    }

};

export default Product;