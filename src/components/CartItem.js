import React from 'react';
import "../style/shopCart.css"
import "../style/cartItem.css"
import { FiPlusCircle, FiTrash2, FiMinusCircle } from "react-icons/fi";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/actions/shoppingActions";

const CartItem = ({ item }) => {

    return (
        <div className="shop-product">
            <div className="detail-product">
                <div className="img-product">
                    <img src={item.image}
                        alt={item.title} />
                </div>

                <div className="text-product">
                    <p className="shop-item">{item.title}</p>
                    <p className="shop-unids">x{item.units_sf}unids {item.net_content}</p>
                    <p className="shop-brand"> {item.supplier}</p>
                </div>
            </div>

            <div className="qty-product">
                <FiMinusCircle className="qty-icon" />
                <p className="txt-p">1</p>
                <FiPlusCircle className="qty-icon" />
            </div>

            <div className="price-product">
                <p className="txt-p" ><span>$</span>{item.price_real}</p>
            </div>

            <FiTrash2 className="trash" />

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);