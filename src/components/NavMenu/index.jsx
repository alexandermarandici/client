import React from 'react';
import { Link } from 'react-router-dom';
import s from "./index.module.css";
import imgdata from "./imgdata/image 1.png"
import cartImg from "./cartImg/Vector (2).png"


export default function NavMenu() {

  return (
    <div className={s.NavMenu1}>

        <div className={s.NavMenu}>

        <div className={s.navMenuLinkImg}>
          <img src={imgdata} alt="logo" />
           <Link to={"/CategoriesPage"}>Catalog</Link>
        </div>

        
        
        <Link to="/">Main Page</Link>
        <Link to="/AllProducts">All Products</Link>
        <Link to="/AllSales">All sales</Link>
        <Link to="/cartPage">
            <img src={cartImg} alt="" />
        </Link>
        </div>
        
    </div>
  )
}
