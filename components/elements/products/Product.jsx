import React from 'react';
import Link from 'next/link';
import Rating from '../Rating';

import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                {badgeView}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link href={`/vendor/${product?.store?.store_name}`}>
                    <a className="ps-product__vendor">
                        Sold By: {product.store?.store_name}
                    </a>
                </Link>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating value={product.rating} />
                        <span>02</span>
                    </div>
                    {priceView}
                </div>
                <div className="ps-product__content hover">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    {priceView}
                </div>
            </div>
        </div>
    );
};

export default Product;
