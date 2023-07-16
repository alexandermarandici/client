import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { reqProduct } from '../../request/prodRequest';
import Product from "../Product";
import s from "./index.module.css"
import SortByPriceByTitleContainer from '../SortByPriceByTitleContainer';
import FormFilterPriceContainer from '../FormFilterPriceContainer';
import CheckBoxContainer from '../CheckBoxContainer';


export default function ProdContainer() {

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
       
      <FormFilterPriceContainer/> 
      <CheckBoxContainer/>
      <SortByPriceByTitleContainer />

      <div className={s.productContainer}>

        {
          product_state
          .filter(el => el.hide_price)
          .map(el => <Product key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
