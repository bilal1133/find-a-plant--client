import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Link from 'next/link';
import { googleMapsApiKey } from '~/constants/siteDetails';
import React from 'react';

const ContactMap = () => (
    <div className="ps-contact-map">
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14049.340485982573!2d-0.12031301106485542!3d51.50228117351734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2s!4v1582441665587!5m2!1sen!2s"
            height={500}></iframe> */}
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={{
                    height: '50vh',
                    width: '100%',
                }}
                zoom={13}
                center={{
                    lat: 31.457954,
                    lng: 74.441819,
                }}>
                <Marker
                    position={{
                        lat: 31.457954,
                        lng: 74.441819,
                    }}
                />
            </GoogleMap>
        </LoadScript>
    </div>
);

export default ContactMap;

// <div>
// <h1 className="near-you">
//     Find us In<span> Lahore 🗺</span>
// </h1>
// </div>
