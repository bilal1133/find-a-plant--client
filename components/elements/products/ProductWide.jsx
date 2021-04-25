import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import ModuleProductWideActions from '~/components/elements/products/modules/ModuleProductWideActions';
import Rating from '../Rating';

const ProductWide = ({ product }) => {
    return (
        <div className="ps-product ps-product--wide">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
                <Rating value={5} />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <p className="ps-product__vendor">
                        Sold by:
                        <Link href="/shop">
                            <a>{product.store?.store_name}</a>
                        </Link>
                    </p>
                    <ul className="ps-product__desc">{product.description}</ul>
                </div>
                <ModuleProductWideActions product={product} />
            </div>
        </div>
    );
};

export default ProductWide;
