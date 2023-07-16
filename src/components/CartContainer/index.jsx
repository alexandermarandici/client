import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from "../CartItem"
import s from "./index.module.css"
import { Link } from "react-router-dom";
import SocialMediaContainer from '../SocialMediaContainer';


export default function CartContainer() {

  const state_cart = useSelector(state => state.cart);
 
  const total_discont = state_cart.reduce((acc, { discont_price, count }) => acc + discont_price * count, 0);

  const total_price = state_cart.reduce((acc, { price, count }) => acc + price * count, 0);

  const realPrice = total_discont ? total_discont : total_price;
  const realPrice1 = total_price ? total_price : total_discont;

  return (
    <div >

      <div className={s.shoppingcartItem}>
        <h2>Shopping cart</h2>
        <Link to={"/AllProducts"}>Back to the store </Link>
      </div>

      <div>

      <div className={s.orderItem}>

          <h3>Order details</h3>

          <p>Total</p>

          <p>{realPrice && realPrice1}€</p> 

             <form className={s.formItem}>  
                <input type="text" placeholder='number' name='num' />
                  <div>Order</div>
              </form>

      </div>

      </div>

      <div className={s.CartContainer}>
      {
        state_cart.map(el => <CartItem key={el.id} {...el}/>)
      }
      </div>

      <SocialMediaContainer/>
      
    </div>
  )
}
