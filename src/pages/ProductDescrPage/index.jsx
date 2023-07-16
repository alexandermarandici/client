import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reqSingleProduct } from '../../request/prodRequest';
import { useParams } from 'react-router-dom';
import s from "./index.module.css";
import { addToCartAction } from '../../store/reducers/cartReducer';
import SocialMediaContainer from "../../components/SocialMediaContainer";


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

  let numberNull

  const discountPrice = discont_price === null? price : discont_price;
  const sumDiscount = `${discountPrice / price * 100 - 100}`;
  const realPrice = discont_price ? price : numberNull


  return (
    <div className={s.ProductDescrPageItem}>

      <div className={s.productDescrItem}>

      <h1>{title}</h1>

      <img src={`http://localhost:3333/${image}`} alt={title} />   
      </div>

      

          <div className={s.cartItem}>
            
             <p>{discountPrice}€</p>
             <p>{realPrice}</p>
             <p className={s.sumDiscount}>{Math.round(sumDiscount) ? Math.round(sumDiscount) : " "}</p>
             <div onClick={addToCard}
             >To cart</div>
             <p>Description:</p>
             <p>{description}</p>
          </div>

          <SocialMediaContainer/>

    </div>
  )
}
