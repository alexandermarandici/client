import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from "../CartItem"
import s from "./index.module.css"
import { Link } from "react-router-dom";
import insta from "../imgData/insta/Vector.png";
import whatsap from "../imgData/whatsap/Vector (1).png";
import imgCarta from "../imgData/imgCarta/image 11.png";


export default function CartContainer() {

  const state_cart = useSelector(state => state.cart);


  const total = state_cart.reduce((acc, { price, count }) => acc + price * count, 0);



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

          <p>{total}€</p> 

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



      <div className={s.contactItem}>
            <div className={s.contItem1}>
                <h2>Contact</h2>
                <a href="tel:+">+49 999 999 99 99</a>
            </div>

            <div className={s.contactItem2}>
                <p>Address:</p>
                <a href="https://tel-ran.de/ru">Linkstraße 2, 8 OG, 10785, Berlin</a>
                <p>Working Hours:</p>
                <p>24 hours a day</p>
            </div>
            <div className={s.socialMedia}>
              <a href="http://"><img src={insta} alt="" />instagram</a>
              <a href="http://"><img src={whatsap} alt="" />WhatsApp</a>
            </div>
      </div>

        <div className={s.imgCarta}>
          
          <img src={imgCarta} alt="" />
          
        </div>
      
    </div>
  )
}
