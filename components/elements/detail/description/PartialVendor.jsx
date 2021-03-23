import React from 'react';

const PartialVendor = ({ store }) => {
    console.log('store', store);
    return (
        <section>
            <p>{JSON.stringify(store.user_data[0].address)}</p>
            <h4>{`${store.first_name} ${store.last_name}`}</h4>
            <h4>{`${store.email}`} </h4>
            <h4>{`${store.phone}`} </h4>
            <a href="#">More Products from Gopro</a>
            {/* city: "lahore"
house_no: "ddk"
id: "602a2a03de9f8422a8c9e25e"
latitude: 25
longitude: 522
state: "punjab"
street_no: "kdmck" */}
        </section>
    );
};

export default PartialVendor;
