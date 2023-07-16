import React from 'react'
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from '../../store/reducers/cartReducer';
import { Link  } from 'react-router-dom';

export default function Product({id, title, price, image, discont_price}) {

  const dispatch = useDispatch();

  const addToCart = () => dispatch(addToCartAction({id, image, title, price, discont_price}));

  const routeToProduct = `/AllProducts/products/${id}`;

  let numberNull
  const discountPrice = discont_price === null? price : discont_price;
  const sumDiscount = `${discountPrice / price * 100 - 100}`;
  const realPrice = discont_price ? price : numberNull

  

  return (
    <div className={s.productClass}>

      <Link to={routeToProduct}>
      <div className={s.productItem}>
        <img src={`http://localhost:3333/${image}`} alt="" />

         <div className={s.priceItem}>
            <p>{discountPrice}€</p>
            <p>{realPrice}</p>
            <p>{Math.round(sumDiscount) ? Math.round(sumDiscount) : " "}</p>
         </div>
         {title}
        <button onClick={addToCart} className={s.addBtn}>Add to cart</button>
      </div>
      </Link>
    </div>
  )
}
