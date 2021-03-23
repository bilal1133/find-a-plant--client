import { Rate } from 'antd';

const Rating = ({ review }) => (
    <Rate value={review} defaultValue={review} disabled />
    // <span className="ps-rating">
    //     <i className="fa fa-star"></i>
    //     <i className="fa fa-star"></i>
    //     <i className="fa fa-star"></i>
    //     <i className="fa fa-star"></i>
    //     <i className="fa fa-star-o"></i>
    // </span>
);

export default Rating;
