import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import { siteName } from '~/constants/siteDetails';

const ShopBanner = () => {
    const carouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        autoplay: true,
        //   speed: 2000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
    };
    return (
        <div className="ps-shop-banner">
            <Slider {...carouselSetting} fade={true} className="ps-carousel">
                <img src="/static/img/slider/shop/shop1.jpg" alt={siteName} />
                {/* <img src="/static/img/slider/shop/shop2.jpg" alt={siteName} /> */}
                <img src="/static/img/slider/shop/shop3.jpg" alt={siteName} />
            </Slider>
        </div>
    );
};

export default ShopBanner;
