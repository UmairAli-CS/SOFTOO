import * as _productService from "../../../core/services/product";
import { GET_ALL_PRODUCTS, GET_PRODUCT_CALCULATED_AMOUNT } from "../../../core/models/redux-constants";

export const GetAllProducts = () => {
    return (dispatch: (arg: { type: string; payload: any }) => any) => {
        _productService.GetAllProducts().then(response => {
            response instanceof Array ? dispatch({
                type: GET_ALL_PRODUCTS,
                payload: response
            }) : dispatch({
                type: GET_ALL_PRODUCTS,
                payload: []
            })
        })
    }
}


export const GetCalculatedAmount = (products: any) => {
    return (dispatch: (arg: { type: string; payload: any }) => any) => {
        dispatch({
            type: GET_PRODUCT_CALCULATED_AMOUNT,
            payload: products
        })
    }
}