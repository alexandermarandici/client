import React from 'react'
import { useDispatch } from 'react-redux';
import { sortProductsAction } from '../../store/reducers/prodReducer';
import s from "./index.module.css";

export default function SortByPriceByTitleContainer() {

  const dispatch = useDispatch();

  const sort = event => dispatch(sortProductsAction(event.target.value));

  return (
    <div>
      <div>
        <label  className={s.SortByPriceByTitleContainer}>
          <span>Sorted</span>
          <select onInput={sort}>
            <option value="title">By title A-Z</option>
            <option value="titleZ">By title Z-A</option>
            <option value="price">By price ASC</option>
            <option value="priceZ">By price DESC</option>
            <option value="default">By default</option>
          </select>
        </label>
      </div>
    </div>
  )
}
