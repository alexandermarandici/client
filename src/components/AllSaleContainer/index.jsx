import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { reqSaleProduct } from '../../request/prodRequest';
import Product from '../Product';
import s from "./index.module.css";
import SortByPriceByTitleContainer from '../SortByPriceByTitleContainer';
import FormFilterPriceContainer from '../FormFilterPriceContainer';


export default function AllSalesContainer() {

  const dispatch = useDispatch();

  const sale_product = useSelector( state => state.prod )
 
  useEffect(() => {
    dispatch(reqSaleProduct)
  }, []);

  return (
    <div>

      <dir className={s.sale_prodcts}>
        <h1>Sale Products</h1>
      </dir>
      <FormFilterPriceContainer/>
      <SortByPriceByTitleContainer/>
         
        <div className={s.saleContainer}>
        {
            sale_product
            .filter(el => el.hide_price)
            .map(el => <Product key={el.id} {...el}/>)
        }
        </div>
    </div>
  )
}
