import axios from "axios";

export const FetchProducts = () => async dispatch => {
    try {
        dispatch({
            type: "PRODUCTS_LIST_LOADING"
        })

        const res = await axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')

        console.log(res);

        dispatch({
            type: "PRODUCTS_LIST_SUCCESS",
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: "PRODUCTS_LIST_FAIL"
        })
    }

}