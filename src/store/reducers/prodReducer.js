const ADD_PRODUCT = "ADD_PRODUCT";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const LOAD_SALE_PRODUCT = "LOAD_SALE_PRODUCT";
const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE";
const CHECK_PRODUCTS = "CHECK_PRODUCTS";

export const loadProduct = payload => ({ type: ADD_PRODUCT, payload});
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload});
export const loadSaleProductAction = payload => ({type: LOAD_SALE_PRODUCT, payload});
export const filterProductsByPrice = payload => ({type: FILTER_PRODUCTS_BY_PRICE, payload});
export const checkProductsAction = payload => ({type: CHECK_PRODUCTS, payload});


export const prodReducer = ( state = [], action) => {
    if( action.type === ADD_PRODUCT) {
        return action.payload
    } else if (action.type === SORT_PRODUCTS){
        if(action.payload === "title"){
            state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        } else if(action.payload === "price") {
            state.sort((a, b) => a[action.payload] - b[action.payload])
        } else if(action.payload === "titleZ"){
            state.sort((a, b) => b["title"].localeCompare(a["title"]))
        } else if(action.payload === "priceZ"){
            state.sort((a, b) => {
                const new_price_A = a["discont_price"] || a["price"];
                const new_price_B = b["discont_price"] || a["price"];
                return new_price_B - new_price_A;
            })
        } else if(action.payload === "default"){
            state.sort((a, b) => a.id - b.id)
        }
        return [...state]
    } else if (action.type === LOAD_SALE_PRODUCT){
     return action.payload.filter(el => el.discont_price > 0)
    } else if (action.type === FILTER_PRODUCTS_BY_PRICE){
        const { min_value, max_value } = action.payload;
        return state.map(el => {
            if(el.price >= min_value && el.price <= max_value){
                el.hide_price = true
            } else {
                el.hide_price = false
            }
            return el
        })
    } else if(action.type === CHECK_PRODUCTS){
       if(action.payload) {
        return state.map(el => {
            if(el.discont_price > 0){
                el.hide_price = true
            } else {
                el.hide_price = false
            }
          return el
        })
       } else {
        return state.map(el => {
            el.hide_price = true
            return el
        })
       }
    }
    return state
}
