import React from 'react'
import s from "./index.module.css"
import { deleteCartAction, incrementCountAction, decrementCountAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';


export default function CartItem({id, title, price, description, image, discont_price, count }) {

  const discount = discont_price === null ? price : discont_price;

  const price_ware = discont_price === true ? discont_price : price;

  const dispatch = useDispatch();

  return (
    
    <div className={s.CartItem}>
      <div className={s.cartInfo}>
        <img src={`http://localhost:3333/${image}`} alt="" />
        <p>{title}</p>
        <p>{discount * count}€</p>
        <p>{price_ware}€</p>
        <span onClick={() => dispatch(deleteCartAction(id))}>X</span>


        <div className={s.BtnIncrementDescrement}>
          <p 
          onClick={() => dispatch(decrementCountAction(id))}>-</p>
          <p>{count}</p>
          <p onClick={() => dispatch(incrementCountAction(id))}
          >+</p>
        </div>
      </div>


    </div>
  )
}
