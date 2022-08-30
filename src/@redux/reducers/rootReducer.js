import { combineReducers } from "redux"
import ReducerCart from "./cart/index";

const rootReducer = combineReducers({
    cart: ReducerCart,
})

export default rootReducer