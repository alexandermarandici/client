import React from 'react'
import CategoriesContainer from '../../components/CatContainer'
import s from "./index.module.css"

export default function CategoriesPage() {
  return (
    <div className={s.categoriesPage}>

      <div className={s.categoriesText}>
        <h1>Categories</h1>
      </div>

      <div className={s.categoriesContainerbyPage}>
           <CategoriesContainer/>
      </div>
    </div>
  )
}
