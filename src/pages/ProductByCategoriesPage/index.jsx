import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCategoriesIdAction } from '../../store/reducers/productsByCategoriesReducer';

export default function ProductByCategoriesPage() {

    const dispatch = useDispatch();

    const { category } = useParams();
    

    useEffect(() => {
       dispatch(loadCategoriesIdAction(category))
    }, []);

    const products_by_category_state = useSelector(state => state.productsByCategory);

    console.log(products_by_category_state);

  return (
    <div>ProductByCategoriesPage</div>
  )
}
