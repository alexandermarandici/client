import { createStore, combineReducers, applyMiddleware } from "redux";
import { catReducer } from "./reducers/catReducer";
import thunk from "redux-thunk";
import { prodReducer } from "./reducers/prodReducer";
import { cartReducer } from "./reducers/cartReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { poductsByCategoriesReducer } from "./reducers/productsByCategoriesReducer";

const rootReducer = combineReducers({
    cat: catReducer,
    prod: prodReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
    productsByCategory: poductsByCategoriesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))