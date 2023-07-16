import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkProductsAction } from '../../store/reducers/prodReducer';
import s from "./index.module.css";

export default function CheckBoxContainer() {

    const dispatch = useDispatch();

    const [ checked, setChecked ] = useState(false);

    const handleChange = () => setChecked(!checked);

    const handleClick = event => dispatch(checkProductsAction(event.target.checked));


  return (
    <form className={s.check}>
        <p>Discountend items</p>
        <input type="checkbox" checked={checked} onChange={handleChange} onClick={handleClick} />
    </form>
  )
}
