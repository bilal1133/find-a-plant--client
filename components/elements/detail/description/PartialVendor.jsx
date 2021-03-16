import React from 'react';

const PartialVendor = ({ vendor }) => {
    console.log('VENDOR', vendor);
    return (
        <section>
            <h4>{`${vendor.first_name} ${vendor.last_name}`}</h4>
            <h4>{`${vendor.email}`} </h4>
            <h4>{`${vendor.phone}`} </h4>
            <p>{JSON.stringify(vendor.user_data[0].address)}</p>
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
