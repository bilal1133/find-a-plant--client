import React, { useState } from 'react';
import {
    GoogleMap,
    Marker,
    LoadScript,
    InfoWindow,
} from '@react-google-maps/api';

import { googleMapsApiKey } from '~/constants/siteDetails';
import { Divider } from 'antd';
import Rating from '../Rating';
const mapStyles = {
    height: '50vh',
    width: '100%',
};
const VendorMap = ({ name, location }) => {
    if (!location.lat) {
        location = { lat: 31.457954, lng: 74.441819 };
    }
    const [selected, setSelected] = useState({});
    const onSelect = (item) => {
        setSelected(item);
    };
    return (
        <div>
            <h1 className="near-you">
                Find<span> Us 🏳</span>
            </h1>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={location}>
                    <Marker
                        onClick={() => onSelect(name)}
                        position={location}
                    />
                    {selected && (
                        <InfoWindow
                            position={location}
                            clickable={true}
                            onCloseClick={() => setSelected(null)}>
                            <>
                                <strong>{name}</strong>
                                <br />
                                <Divider orientation="left"></Divider>
                                <Rating review={5} />
                            </>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};
export default VendorMap;
