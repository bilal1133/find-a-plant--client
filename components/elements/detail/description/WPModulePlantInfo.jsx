import React from 'react';
import Plant from 'public/static/img/icons/plant.svg';
import Resize from 'public/static/img/icons/resize.svg';
import Exposure from 'public/static/img/icons/exposure.svg';
import Pin from 'public/static/img/icons/pin.svg';
import Parsal from 'public/static/img/icons/parcel.svg';
import _ from 'lodash';
const plantInfo = [
    {
        icon: Resize,
        heading: 'Growth Rate',
        description: 'growth_rate',
    },
    {
        icon: Pin,
        heading: 'Climate Zone',
        description: 'climate_zone',
    },
    {
        icon: Plant,
        heading: 'Soil Requirenments',
        description: 'soil_requirenments',
    },
    // {
    //     icon: Plant,
    //     heading: 'Plant Features',
    //     description: 'plant_features',
    // },
    {
        icon: Exposure,
        heading: 'Sun Exposure',
        description: 'sun_exposure',
    },
    {
        icon: Parsal,
        heading: 'Ship As',
        description: 'ship_as',
    },
];
// 0: "climate_zone"
// 1: "pruning"
// 2: "flower_form"
// 3: "pot_size"
// 4: "soil_requirenments"
// 5: "planting_instructions"
// 6: "spread"
// 7: "ship_as"
// 8: "growth_rate"
// 9: "watering_instructions"
// 10: "sun_exposure"
// 11: "flowering_season"
// 12: "flower_color"
export default function WPModulePlantInfo({ attributes }) {
    if (!attributes) {
        return null;
    }
    return (
        <ul
            style={{
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                listStyle: 'none',
            }}>
            {plantInfo.map((single) => {
                if (!attributes[single.description]) {
                    return null;
                }
                return (
                    <SingleInfo
                        icon={single.icon}
                        heading={single.heading}
                        description={attributes[single.description]}
                    />
                );
            })}
        </ul>
    );
}

const SingleInfo = ({ icon, heading, description }) => {
    if (!description) {
        return null;
    }
    return (
        <li
            style={{
                maxWidth: 100,
                margin: 5,
                marginLeft: 10,
                marginRignt: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <img
                src={icon}
                alt="React Logo"
                width="30"
                style={{ marginBottom: 5 }}
            />
            <h6 style={{ margin: 0 }}> {heading}</h6>
            <p>{_.startCase(description)}</p>
        </li>
    );
};

const findFromArray = (array, key) => {
    return array.find((single) => {
        return single.key === key;
    });
};
