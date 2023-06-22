import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { reqProduct } from '../../request/prodRequest';
import Product from "../Product";
import s from "./index.module.css"


export default function ProdContainer({discount_price, price}) {

    const dispatch = useDispatch();

    const product_state = useSelector(state => state.prod)

    useEffect(() => {
       dispatch(reqProduct)
    }, []);
  
  return (
    <div>

      <dir className={s.allProductsText}>
        <h1>All Products</h1>
      </dir>

      <div className={s.productContainer}>
        {
            product_state.map(el => <Product key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}
