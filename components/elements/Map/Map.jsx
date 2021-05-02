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
            name: 'Location 1',
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
            name: 'Location 2',
            location: {
                lat: 31.4517,
                lng: 74.4449,
            },
        },
        {
            name: 'Location 3',
            location: {
                lat: 31.4573,
                lng: 74.4485,
            },
        },
        {
            name: 'Location 4',
            location: {
                lat: 31.4597,
                lng: 74.4482,
            },
        },
        {
            name: 'Location 5',
            location: {
                lat: 31.4555,
                lng: 74.4415,
            },
        },
    ];

    const onSelect = (item) => {
        setSelected(item);
    };
    return (
        <div>
            <h1 className="near-you">
                Nurseries In<span> Lahore</span>
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
                                <h1>{selected.name}</h1>
                                <Divider orientation="left">Large Size</Divider>
                                <h1>{selected.name}</h1>
                            </>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};
export default Map;
