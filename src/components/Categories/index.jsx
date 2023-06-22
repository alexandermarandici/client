import React from 'react'
import s from "./index.module.css"
import { Link, useParams } from 'react-router-dom'

export default function Categories({id, title, image}) {

  return (

    
    <div className={s.Categories} >

      <Link to={`/categories/${id}`}>

      <div>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <p>{title}</p>
      </div>

      </Link>

    </div>

  )
}
