const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_SALE_PRODUCT = "ADD_SALE_PRODUCT";


export const loadProduct = payload => ({ type: ADD_PRODUCT, payload});
export const loadSaleProduct = payload => ({type : ADD_SALE_PRODUCT, payload});


export const prodReducer = ( state = [], action) => {
    if( action.type === ADD_PRODUCT) {
        return action.payload
    } else if ( action.type === ADD_SALE_PRODUCT){
      
   }
   return state 
}