import { loadProduct } from "../store/reducers/prodReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";


export const reqProduct = (disptach) => {
    fetch(`http://localhost:3333/products/all`)
     .then(res => res.json())
     .then(json => disptach(loadProduct(json)))
};


export const reqSingleProduct = id => {
    return dispatch => {
    fetch(`http://localhost:3333/products/${id}`)
     .then(res => res.json())
     .then(json => dispatch(loadSingleProductAction(json)))
    }
}