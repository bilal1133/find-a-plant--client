import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <p>
            Sold By:
            <Link href="/shop">
                <a className="ml-2 text-capitalize">
                    {product?.store.user_data[0]?.store_name}
                </a>
                {/* <a>
                    <strong> {product.vendor}</strong>
                </a> */}
            </Link>
        </p>
        <p
            className="ps-list--dot"
            dangerouslySetInnerHTML={{
                __html: product?.store.user_data[0]?.store_name,
            }}>
            {/* // <li>Unrestrained and portable active stereo speaker</li>
            // <li> Free from the confines of wires and chords</li>
            // <li> 20 hours of portable capabilities</li>
            // <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li> */}
            {/* // <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li> */}
        </p>
    </div>
);

export default ModuleProductDetailDescription;
