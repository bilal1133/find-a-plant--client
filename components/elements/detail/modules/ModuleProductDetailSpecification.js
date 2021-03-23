import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ categories = [], tags = [] }) => (
    <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>

        <p>
            <strong>SKU:</strong> SF1133569600-1
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            {categories.map((single) => {
                return (
                    <Link
                        key={single._id}
                        href={`/shop?product_categories.slug=${single.slug}`}>
                        <a>{single.name}</a>
                    </Link>
                );
            })}
        </p>
        <p className="tags">
            <strong> Tags</strong>

            {tags.map((single) => {
                return (
                    <Link
                        key={single._id}
                        href={`/shop?tags.name=${single.name}`}>
                        <a>{single.name}</a>
                    </Link>
                );
            })}
        </p>
    </div>
);

export default ModuleProductDetailSpecification;
