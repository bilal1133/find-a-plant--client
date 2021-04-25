import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const ModulePaymentOrderSummary = ({ shipping,cart,currency }) => {
    
    const { amount, cartItems}=cart;
    let listItemsView, shippingView, totalView;
    if (cartItems && cartItems.length > 0) {
        listItemsView = cartItems.map(product => (
            <Link href="/" key={product.id}>
                <a>
                    <strong>
                        {product.title}
                        <span>X {product.quantity}</span>
                    </strong>
                    <small>{currency.symbol} {product.quantity * product.price}</small>
                </a>
            </Link>
        ));
    } else {
        listItemsView = <p>No Product.</p>;
    }
    if (shipping === true) {
        shippingView = (
            <figure>
                <figcaption>
                    <strong>Shipping Fee</strong>
                    <small>{currency.symbol} 200</small>
                </figcaption>
            </figure>
        );
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>{currency.symbol} {parseInt(amount) + 200}.00</strong>
                </h3>
            </figure>
        );
    } else {
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>{currency.symbol} {parseInt(amount)}.00</strong>
                </h3>
            </figure>
        );
    }
    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                <figure>
                    <figcaption>
                        <strong>Product</strong>
                        <strong>total</strong>
                    </figcaption>
                </figure>
                <figure className="ps-block__items">{listItemsView}</figure>
                <figure>
                    <figcaption>
                        <strong>Subtotal</strong>
                        <small>{currency.symbol} {amount}</small>
                    </figcaption>
                </figure>
                {shippingView}
                {totalView}
            </div>
        </div>
    );
};
export default connect(state => ({cart:state.cart,currency:state.setting.currency}))(ModulePaymentOrderSummary);
