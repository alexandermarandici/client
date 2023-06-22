import React from 'react'
import s from "./index.module.css"
import imgdata from "./imgdata/image 2.png"
import CategoriesContainer from '../../components/CatContainer'
import { Link } from 'react-router-dom'
import AddForm from '../../components/AddForm'



export default function MainPage({id}) {
  return (
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


          <CategoriesContainer/> 
          <AddForm/>
          
            
    </div>
  )
}
