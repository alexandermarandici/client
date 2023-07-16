import React from 'react'
import s from "./index.module.css"
import imgdata from "./imgdata/image 2.png"
import CategoriesContainer from '../../components/CatContainer'
import { Link } from 'react-router-dom'
import AddForm from '../../components/AddForm'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addCategories } from '../../request/reqCategories'
import Categories from '../../components/Categories'
import { reqSaleProduct } from '../../request/prodRequest'
import Product from '../../components/Product'
import SocialMediaContainer from '../../components/SocialMediaContainer'

export default function MainPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCategories)
  }, [])

  const categories = useSelector(state => state.cat)

  const new_state_categories = categories.slice(1, 5);

  const sale_product = useSelector(state => state.prod)

  useEffect(() => {
    dispatch(reqSaleProduct)
  }, []);

  const new_state_product = sale_product.slice(0, 3);

  return (
    <div>

      <div className={s.MainPage}>
        <div className={s.imgdata}>
          <img src={imgdata} alt="" />
        </div>

        <h1>Sale</h1>

        <h4>New season</h4>

        <Link to="/AllSales">Sale</Link>

        <div className={s.catalog}>
          <h2>Catalog</h2>
          <Link to="/CategoriesPage">All Categories</Link>
        </div>

      </div>


      <div className={s.new_categories_mainPage}>
        {
          new_state_categories.map(el => <Categories key={el.id} {...el} />)
        }
      </div>

      <AddForm />


      <div className={s.new_state_sale_product}>
        <h2>Sale</h2>
        {
          new_state_product.map(el => <Product key={el.id} {...el} />)
        }
      </div>

      <div>
        <SocialMediaContainer />
      </div>
    </div>
  )
}
