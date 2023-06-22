import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { reqCategoriesId } from '../../request/reqCategories';
import Product from '../../components/Product';
import s from "./index.module.css";

export default function ProductByCategoriesPage() {

    const dispatch = useDispatch();

    const { category } = useParams();
    

    useEffect(() => {
       dispatch(reqCategoriesId(category))
    }, []);

    const products_by_category_state = useSelector(state => state.productsByCategory);


  return (
    <div className={s.ProductByCategoriesPage}>

      <div>
      {
        products_by_category_state.map(el => <Product key={el.id} {...el}/>)
      }
      </div>
    </div>
  )
}
