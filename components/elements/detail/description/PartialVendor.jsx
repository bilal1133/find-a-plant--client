import React from 'react';

const PartialVendor = ({ store }) => {
    return (
        <section>
            <h4>Name : {`${store?.store_name}`}</h4>
            <h4>
                Adress : {`${store?.Address.city} ${store?.Address?.address}`}
            </h4>
        </section>
    );
};

export default PartialVendor;
