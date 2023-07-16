import { checkBoxProductsAction, loadProduct, loadSaleProductAction } from "../store/reducers/prodReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";


export const reqProduct = (disptach) => {
    fetch(`http://localhost:3333/products/all`)
     .then(res => res.json())
     .then(json => {
        const new_json = json.map(el => ({
            ...el,
            hide_price: true,
            hide_sale: false
        }));
        disptach(loadProduct(new_json))
     })
};


export const reqSingleProduct = id => {
    return dispatch => {
    fetch(`http://localhost:3333/products/${id}`)
     .then(res => res.json())
     .then(json => dispatch(loadSingleProductAction(json)))
    }
}

export const reqSaleProduct = (dispatch) => {
    fetch(`http://localhost:3333/products/all`)
     .then(res => res.json())
     .then(json => {
        const new_json_sale = json.map(el => ({
            ...el,
            hide_price: true,
            hider_price: false
        }));
        dispatch(loadSaleProductAction(new_json_sale))
     })
}

