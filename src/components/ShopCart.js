import React from 'react';
import "../style/shopCart.css"
import { connect } from "react-redux";
import CartItem from './CartItem';

const ShopCart = ({ cart }) => {

    return (
        <div className="shopping-card">
            <div className="title-shopcart">
                <p className="cart-shop">Carrito de compras</p>
                <div className="total-items">
                    <span>0</span> <p> items</p>
                </div>
            </div>
            <div className="description">
                <p>Item</p>
                <p className="txt">Cantidad</p>
                <p className="txt">Precio</p>
            </div>{
                cart.map(item => (
                    <CartItem
                        key={item.id} item={item} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.ProductList.cart
    }
}

export default connect(mapStateToProps)(ShopCart);