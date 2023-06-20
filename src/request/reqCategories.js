
import { loadCategories } from "../store/reducers/catReducer"
import { loadCategoriesIdAction } from "../store/reducers/productsByCategoriesReducer"

export const addCategories = (dispatch) => {
    fetch("http://localhost:3333/categories/all")
     .then(res => res.json())
     .then(json => dispatch(loadCategories(json)))
}


export const reqCategoriesId = category => {
    return dispatch => {
    fetch(`http://localhost:3333/categories/${category}`)
     .then(res => res.json())
     .then(json => dispatch(loadCategoriesIdAction(json.productsByCategory)))
    }
}





