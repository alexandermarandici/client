const ADD_PRODUCT = "ADD_PRODUCT";


export const loadProduct = payload => ({ type: ADD_PRODUCT, payload});


export const prodReducer = ( state = [], action) => {
    if( action.type === ADD_PRODUCT) {
        return action.payload
    } else {
    return state 
   }
}