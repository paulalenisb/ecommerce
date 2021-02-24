import * as actionTypes from "../shoppingTypes";
import axios from "axios";

export const addToCart = (itemID, qty) => async (dispatch, getState) => {

    const {data} = await axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')


    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data.id,
            title: data.title,
            image: data.image,
            units: data.units_sf,
            price: data.price_real,
            content: data.net_content,
            qty,

        }
    })
};

export const removeFromCart = (itemID) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
};

export const adjustQty = (itemID, value) => {
    return{
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
};


