import React, { useState } from 'react';
import "../style/shopCart.css"
import { FiChevronLeft, FiPlusCircle, FiTrash2, FiMinusCircle } from "react-icons/fi";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/actions/shoppingActions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {


    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

    
    return (
        <div className="shop-product">
            <div className="detail-product">
                <img src={item.image}
                    alt={item.title} />
                <div className="text-product">
                    <p>{item.title}</p>
                    <p>{item.units_sf}unids {item.net_content}</p>
                    <p> {item.supplier}</p>
                </div>

            </div>
            <div className="qty-product">
                <FiPlusCircle />
                <p>0</p>
                <FiMinusCircle />
            </div>
            <div className="price-product">
                <span>$</span>
                
                <p>{item.price_real}</p>
            </div>
            <FiTrash2 />
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