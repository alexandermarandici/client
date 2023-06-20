const ADD_TO_CART = "[PRODUCT] ADD_TO_CART";
const DELETE_CART = "[CART_ITEM] DELETE_CART";
const INCEREMENT_CONT = "[CART_ITEM] INCREMENT_COUNT";
const DECREMENT_COUNT = "[CART_ITEM] DECREMENT_COUNT";

export const addToCartAction = payload => ({type : ADD_TO_CART, payload});
export const deleteCartAction = payload => ({type : DELETE_CART, payload});
export const incrementCountAction = payload => ({type: INCEREMENT_CONT, payload});
export const decrementCountAction = payload => ({type: DECREMENT_COUNT, payload});

const checkProductinCart = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}


export const cartReducer = (state = [], action) => {
    if(action.type === ADD_TO_CART){
        return checkProductinCart(state, action.payload)
    } else if (action.type === DELETE_CART){
      return  state.filter(el => el.id !== action.payload)
    } else if (action.type === INCEREMENT_CONT){
      state.find(el => el.id === action.payload).count++
      return [...state]
    } else if (action.type === DECREMENT_COUNT) {
      const target_card = state.find(el => el.id === action.payload);
      if(target_card.count === 1){
        return state.filter(el => el.id !== action.payload)
      } else {
        target_card.count--
        return [...state]
      }
    }
    return state
}
       