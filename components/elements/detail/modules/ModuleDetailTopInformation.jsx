import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.price}</h4>;
    }
    return (
        <header>
            <h1>{product.title}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                    <Link href={`/shop/${product?.store.id}`}>
                        <a className="ml-2 text-capitalize">
                            {product?.store.user_data[0]?.store_name}
                        </a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating review={product.review} />
                    <span>({product.review} review)</span>
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
