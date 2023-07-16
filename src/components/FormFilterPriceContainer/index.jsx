import React from 'react'
import { useDispatch } from 'react-redux';
import s from "./index.module.css";
import { filterProductsByPrice } from '../../store/reducers/prodReducer';

export default function FormFilterPriceContainer() {

    const dispatch = useDispatch();

    const filter_price = event => {
        event.preventDefault();
        const { min, max } = event.target;
        const max_value = max.value || Infinity;
        const min_value = min.value || 0;
        dispatch(filterProductsByPrice({min_value, max_value}))
        event.target.reset();
    }


  return (
    <div className={s.formStyleContainer}>
        <form onSubmit={filter_price} className={s.FormStyle}>
            <span>Price</span>
            <input type="number" placeholder='min' name='min' />
            <input type="number" placeholder='max' name='max' />
            <button>Filter</button>
        </form>
    </div>
  )
}
