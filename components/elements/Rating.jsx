import React from 'react'

// import { Rate } from 'antd';

const Rating = ({ value, review }) => (
    // <Rate value={value} defaultValue={value} disabled />
    <span className="ps-rating">
        {Array.from({ length: value || review }).map((i, index) => {
            return <i key={'ratting' + i + index} className="fa fa-star"></i>;
        })}
        {/* <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i> */}
    </span>
);

export default Rating;
