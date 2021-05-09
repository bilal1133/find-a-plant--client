import React, { useState } from 'react';
// import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
// import { baseUrl } from '~/repositories/Repository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';
import bannerData from '~/public/static/data/homeBanner.json';
import promotionData from '~/public/static/data/homePromotion.json';
import { Carousel } from 'antd';
import Head from 'next/head';
// const [promotion1, setPromotion1] = useState(null);
// const [promotion2, setPromotion2] = useState(null);

async function getBannerItems() {
    const responseData = await MediaRepository.getBannersBySlug(
        'banner-home-fullwidth'
        );
        console.log('responseData', responseData);
        if (responseData) {
        setBannerItems(responseData);
    }
}

async function getPromotions() {
    const responseData = await MediaRepository.getPromotionsBySlug(
        'home_fullwidth_promotions'
        );
    if (responseData) {
        setPromotion1(getItemBySlug(responseData, 'main_1'));
        setPromotion2(getItemBySlug(responseData, 'main_2'));
    }
}
const carouselSetting = {
    dots: false,
    infinite: true,
    speed: 750,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};
// useEffect(() => {
    //     getBannerItems();
    //     getPromotions();
    // }, []);
    const HomeDefaultBanner = () => {
        const [bannerItems, setBannerItems] = useState(bannerData);
        // Views
    let mainCarouselView, myCarousel;
    if (bannerItems?.items) {
        const carouseItems = bannerItems.items.map((item) => (
            <div key={item.id}>
                <Link href="/shop">
                    <a
                        className="ps-banner-item--default"
                        style={{
                            backgroundImage: `url(${item.image.url})`,
                            backgroundSize: '100% 100%',
                        }}>
                        {/* "title": "Indoor Freshness",
            "desc": "Grow Plants in your Garden",
            "btn_text": "Shop Now",
            "text_on_top": "Fina Plant", */}
                        <div class="hdb-slide-content ">
                            <span className="m-sm-4 m-lg-3">
                                <h3 class="hd-slide__title">{item.title}</h3>
                                <div class="hdb-slide__text">{item.desc}</div>
                            </span>
                            <div class=" ">
                                <span class="hdb-slide__button ps-btn m-sm-4 m-lg-3 animate__animated animate__pulse animate__delay-2s animate__infinite p-2 p-sm-1 p-lg-3 p-md-3 ">
                                    {item.btn_text}
                                </span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        ));

        myCarousel = (
            <Carousel autoplay style={{ height: '100%' }}>
                {carouseItems}
            </Carousel>
        );
        // mainCarouselView = (
        //     <Slider {...carouselSetting} className="ps-carousel">

        //     </Slider>
        // );
    }

    return (
        <div className="ps-home-banner ps-home-banner--1">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <div className="ps-container">
                <div className="ps-section__left">{myCarousel}</div>
                <div className="ps-section__right">
                    {promotionData.map((single) => {
                        return (
                            <Promotion
                                key={single.id}
                                link={single.link}
                                img={single.image.url}
                            />
                        );
                    })}
                    {/* <Promotion
                        link="/shop"
                        image={promotion1 ? promotion1.image : null}
                    /> */}
                    {/* <Promotion
                        link="/shop"
                        image={promotion2 ? promotion2.image : null}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
/*connect(state => state.media)();*/
