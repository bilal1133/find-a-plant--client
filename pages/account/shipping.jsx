import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Shipping from '~/components/partials/account/Shipping';
import { getCart } from '~/store/cart/action';
import ContainerPage from '~/components/layouts/ContainerPage';

const ShippingPage = ({ auth, cart ,totalAmount}) => {
    const router = useRouter();
    const { user } = auth;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
            url: '/account/checkout',
        },
        {
            text: 'Shipping',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
        // setTimeout(() => {
        //     if (cart === 0) {
        //         router.push('/account/shopping-cart');
        //     }
        // }, 1000);
    }, [dispatch, cart]);
   
    return (
        <ContainerPage title="Shipping" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Shipping user={user} totalAmount={totalAmount} />
            </div>
        </ContainerPage>
    );
};

export default connect(({ auth, cart }) => {
    return { auth, cart: cart.cartItems.length,totalAmount:cart.amount };
})(ShippingPage);
