import React from 'react';
import Link from 'next/link';

import Slider from 'react-slick';

const homeCategoriesDisplay = [
    {
        link: '/shop?product_categories.slug=indoor-plant',
        image: '/static/img/home-categories/indoorplants.jpg',
        name: 'Indoor Plants',
    },
    {
        link: '/shop?procuct-category.slug=outdoor-plant',
        image: '/static/img/home-categories/outdoor.jpg',
        name: 'Outdoor Plants',
    },
    {
        link: '/shop?product_categories.slug=flower-plant',
        image: '/static/img/home-categories/flowerplants.jpg',
        name: 'Flower Plants',
    },
    {
        link: '/shop?product_categories.slug=gifts',
        image: '/static/img/home-categories/giftplant.jpg',
        name: 'Gifts',
    },
    {
        link: '/shop?product_categories.slug=pots',
        image: '/static/img/home-categories/pots.jpg',
        name: 'Pots',
    },
    {
        link: '/shop?product_categories.slug=garden-tools',
        image: '/static/img/home-categories/gardentools.jpg',
        name: 'Garden Tools',
    },
];

var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
};
const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Top categories of the month</h3>
            <div className="" style={{ width: '100%' }}>
                <Slider {...settings}>
                    {homeCategoriesDisplay.map((single) => {
                        return (
                            <div key={single.name} style={{ width: 200 }}>
                                <div className="ps-block--category ml-5 ">
                                    <Link href={single.link}>
                                        <a className="ps-block__overlay"></a>
                                    </Link>
                                    <img src={single.image} alt={single.name} />
                                    <p>{single.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
