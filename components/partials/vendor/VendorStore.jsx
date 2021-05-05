import React from 'react';
import Slider from 'react-slick';
import { relatedProduct } from '../../../public/static/data/product';
import Product from '../../elements/products/Product';
import VendorProducts from './modules/VendorProducts';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Rating from '../../elements/Rating';
import { useRouter } from 'next/router';
import { carouselStandard } from '../../../utilities/carousel-helpers';
import ProductOffline from '../../elements/products/ProductOffline';
import productRepo from '~/repositories/ProductRepository';
import storeRepo from '~/repositories/StoreRepository';
import { useQuery } from 'react-query';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import VendorMap from '~/components/elements/Map/VedorMap';
import { baseUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
const VendorStore = () => {
    let storeView = null;
    const {
        query: { name },
    } = useRouter();
    const {
        isLoading: prodLoading,
        error: prodError,
        data: prodData,
    } = useQuery('prodData', () =>
        productRepo.getRecords({ 'store.store_name': name })
    );
    const {
        isLoading: storeLoading,
        error: storeError,
        data: storeData,
    } = useQuery('storeData', () => storeRepo.getStores({ store_name: name }));
    if (storeLoading || storeError) {
        storeView = <SkeletonProductDetail />;
    } else storeView = <VendorProfile data={storeData && storeData[0]} />;
    return (
        <div className="ps-vendor-store">
            <div className="container">
                <div className="ps-section__container-1">
                    <div className="row">
                        <div className="col-12 col-md-4">{storeView}</div>
                        <div className="col-12 col-md-8">
                            <div className="ps-block--vendor-filter">
                                <div className="ps-block__left">
                                    <ul>
                                        <li className="active">
                                            <a href="#">Products</a>
                                        </li>
                                        <li>
                                            <a href="#">Reviews</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ps-block__right">
                                    <form
                                        className="ps-form--search"
                                        action="/"
                                        method="get">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search in this shop"
                                        />
                                        <button>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <VendorProducts data={storeData} />
                        </div>
                    </div>
                </div>
            </div>
            {storeData && (
                <VendorMap
                    name={storeData[0].store_name}
                    location={{
                        lat: storeData[0].Address.latitude,
                        lng: storeData[0].Address.longitude,
                    }}
                />
            )}
        </div>
    );
};

export default VendorStore;

const VendorProfile = ({ data }) => {
    if (!data) return null;
    return (
        <div className="ps-block--vendor" style={{ backgroundColor: 'green' }}>
            <div className="ps-block__thumbnail">
                <LazyLoad>
                    <img
                        src={`${baseUrl}${data.profile_image.url}`}
                        alt={data.store_name}
                    />
                </LazyLoad>
                {/* <img
                    src="/static/img/vendor/vendor-store.jpg"
                    alt="martfury"
                    // src={}
                    // onError="this.onError=null;this.src='/static/img/vendor/vendor-store.jpg'"
                /> */}
            </div>
            <div className="ps-block__container">
                <div className="ps-block__header">
                    <h4>{data.store_name}</h4>
                    <Rating />
                    <p>
                        <strong>85% Positive</strong> (562 rating)
                    </p>
                </div>
                <div className="ps-block__divider"></div>
                <div className="ps-block__content">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.description,
                        }}></p>
                    <span className="ps-block__divider"></span>
                    <p>
                        <strong>Address</strong>
                        <br />
                        {data.Address.address}
                        {data.Address.city}
                        {data.Address.provence}
                    </p>
                    {data.social && (
                        <figure>
                            <figcaption>Folow us on social</figcaption>
                            <ul className="ps-list--social-color">
                                {Object.keys(data.social).map((key, i) => {
                                    console.log('key', data.social);
                                    return (
                                        <li key={key + i}>
                                            <a
                                                className={data}
                                                href={data.social[key]}>
                                                <i
                                                    className={`fa fa-${key}`}></i>
                                            </a>
                                        </li>
                                    );
                                })}
                                {/* 
                            <li>
                                <a className="twitter" href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a className="feed" href="#">
                                    <i className="fa fa-feed"></i>
                                </a>
                            </li> */}
                            </ul>
                        </figure>
                    )}{' '}
                </div>
                <div className="ps-block__footer">
                    <p>
                        Call us directly
                        <strong>(+053) 77-637-3300</strong>
                    </p>
                    <p>or Or if you have any question</p>
                    <a
                        className="ps-btn ps-btn--fullwidth"
                        href={`tel:${data.contact_no}`}>
                        Contact Seller{' '}
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

// <div
// className="ps-section__left-1"
// style={{ border: '2px solid red' }}>
// {storeView}
// </div>
// <div className="ps-section__right-1">

// {/* <div className="ps-vendor-best-seller">
//         <div className="ps-section__header">
//             <h3>Best Seller items</h3>
//             <div className="ps-section__nav">
//                 <a
//                     className="ps-carousel__prev"
//                     href="#vendor-bestseller">
//                     <i className="icon-chevron-left"></i>
//                 </a>
//                 <a
//                     className="ps-carousel__next"
//                     href="#vendor-bestseller">
//                     <i className="icon-chevron-right"></i>
//                 </a>
//             </div>
//         </div>
//         <div className="ps-section__content">
//             <Slider
//                 {...carouselStandard}
//                 className="ps-carousel">
//                 {relatedProduct &&
//                     relatedProduct.map((product) => (
//                         <ProductOffline
//                             product={product}
//                             key={product.id}
//                         />
//                     ))}
//             </Slider>
//         </div>
//     </div>
//     */}

// </div>
