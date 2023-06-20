import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategories } from '../../request/reqCategories';
import Categories from '../Categories';
import s from "./index.module.css"


export default function CategoriesContainer() {

    const dispatch = useDispatch();

    const categories_state = useSelector(state => state.cat);

    useEffect(() => {
        dispatch(addCategories)
    }, [])

  return (
    <div>

       <div className={s.categoriesCountainer}>
      
        {
          categories_state.map(el => <Categories key={el.id} {...el}/>)
        }
       </div>
    </div>
  )
}
