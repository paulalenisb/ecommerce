import React, { useState, useEffect } from 'react';
import "../style/shopCart.css"
import { FiChevronLeft, FiPlusCircle, FiTrash2, FiMinusCircle } from "react-icons/fi";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToCart,  } from "../redux/actions/shoppingActions";
import CartItem from './CartItem';
import { FetchProducts } from "../redux/actions/productActions";

const ShopCart = ({ cart }) => {

    // const dispatch = useDispatch();
    // const productList = useSelector(state => state.ProductList);
    // console.log(productList.cart);

    // useEffect(() => {
    //     // FetchData();
    //     cartData();
        
    // }, [])

    // const cartData = () => {
    //     dispatch(addToCart())
    // }
    // const FetchData = () => {
    //     dispatch(FetchProducts())
    // }

    // console.log(cartData);

    return (
        <div>
            <div className="back-store">
                <FiChevronLeft />
                <p>Volver a la tienda</p>
            </div>
            <div className="title-shopcart">
                <h1>Carrito de compras</h1>
                <div>
                    <span>0</span> <p>items</p>
                </div>
            </div>
            <div className="description">
                <p>item</p>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>{
                cart.map(item => (
                    <CartItem
                    key={item.id} item={item}/>
                )
                )
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.ProductList.cart
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       adjustQty: (id, value) => dispatch(adjustQty(id, value)),
//       removeFromCart: (id) => dispatch(removeFromCart(id)),
//     };
//   };
  

export default connect(mapStateToProps)(ShopCart);