const LOAD_CATEGORIES_ID = "LOAD_CATEGORIES_ID";


export const loadCategoriesIdAction = payload => ({type: LOAD_CATEGORIES_ID, payload});


export const poductsByCategoriesReducer = ( state = [], action ) => {
   if(action.type === LOAD_CATEGORIES_ID){
    return action.payload
   } else {
    return state
   }
}