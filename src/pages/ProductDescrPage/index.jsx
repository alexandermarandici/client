import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reqSingleProduct } from '../../request/prodRequest';
import { useParams } from 'react-router-dom';
import s from "./index.module.css";
import { addToCartAction } from '../../store/reducers/cartReducer';
import insta from "../imgData/insta/Vector.png";
import whatsap from "../imgData/whatsap/Vector (1).png";
import imgCarta from "../imgData/imgCarta/image 11.png";


export default function ProductDescrPage() {

  const { id } = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reqSingleProduct(id))
  }, []);

  const product_state = useSelector(state => state.singleProduct);

  const [{ image, title, price,  discont_price, description }] = product_state;

  const addToCard = () => {
    dispatch(addToCartAction({ id: +id, image, title, price, discont_price}))
  };

  const discount = discont_price === null ? price : discont_price;

  const realPrice = price === price ? price : discont_price;

  const sumDiscount = `${discount / realPrice * 100 - 100}`
  
  return (
    <div className={s.ProductDescrPageItem}>

      <div className={s.productDescrItem}>

      <h1>{title}</h1>

      <img src={`http://localhost:3333/${image}`} alt={title} />   
      </div>

      

          <div className={s.cartItem}>
            
             <p>{discount}€</p>
             <p>{realPrice}€</p>
             <p className={s.sumDiscount}>{Math.round(sumDiscount)}%</p>
             <div onClick={addToCard}
             >To cart</div>
             <p>Description:</p>
             <p>{description}</p>
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
