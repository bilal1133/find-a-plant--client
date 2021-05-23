import React, { useState } from 'react';
import {
    GoogleMap,
    Marker,
    LoadScript,
    InfoWindow,
} from '@react-google-maps/api';

import { googleMapsApiKey } from '~/constants/siteDetails';
import { Divider } from 'antd';
const mapStyles = {
    height: '50vh',
    width: '100%',
};
const Map = () => {
    const [selected, setSelected] = useState({});
    const [currentPosition, setCurrentPosition] = useState({
        lat: 31.457954,
        lng: 74.441819,
    });
    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng });
    };

    const locations = [
        {
            name: 'DHA Nursery',
            location: {
                lat: 31.4554,
                lng: 74.442,
            },
            address: 'Dha Phase 5 Lahore',
            city: 'Lahore',
            id: '608510af5693643f9810216d',
            latitude: 55,
            longitude: 54,
            provence: 'Punjab',
        },
        {
            name: 'Ali Nursery',
            location: {
                lat: 31.4517,
                lng: 74.4449,
            },
        },
        {
            name: 'All Garden Nursery',
            location: {
                lat: 31.4573,
                lng: 74.4485,
            },
        },
    ];

    const onSelect = (item) => {
        setSelected(item);
    };
    return (
        <div>
            <h1 className="near-you">
                Find us In<span> Lahore 🗺</span>
            </h1>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={currentPosition}>
                    {currentPosition.lat ? (
                        <Marker
                            position={currentPosition}
                            onDragEnd={(e) => onMarkerDragEnd(e)}
                            draggable={true}
                        />
                    ) : null}
                    {locations.map((item) => {
                        return (
                            <Marker
                                key={item.name}
                                onClick={() => onSelect(item)}
                                position={item.location}
                            />
                        );
                    })}
                    {selected.location && (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}>
                            <>
                                <h3>{selected.name}</h3>
                                <Divider orientation="left"></Divider>
                            </>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};
export default Map;
