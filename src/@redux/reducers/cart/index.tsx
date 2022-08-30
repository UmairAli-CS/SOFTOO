import { GET_ALL_PRODUCTS, GET_PRODUCT_CALCULATED_AMOUNT } from "../../../core/models/redux-constants";

const initialState = {
    listingproduct: [],
    totalamouncalculated: 0,
    status: false
}

const ReducerCart = (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_PRODUCTS:
            return { ...state, listingproduct: payload }
        case GET_PRODUCT_CALCULATED_AMOUNT: {
            let products: any[] = payload;
            let totalProductAmount: number[] = products?.map(product => product?.price * product?.quantity)
            var totalAmount = 0;
            for (var i in totalProductAmount) {
                totalAmount += totalProductAmount[i];
            }
            // let totalAmount = totalProductAmount?.reduce(function (acc, val) { return acc + val; }, 0)
            return { ...state, totalamouncalculated: totalAmount || 0 }
        }
        default:
            return { ...state }
    }
}

export default ReducerCart