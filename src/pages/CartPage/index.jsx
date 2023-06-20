import React from 'react'
import CartContainer from '../../components/CartContainer'
import s from "./index.module.css"

export default function CartPage() {
  return (
    <div className={s.cartPage}>
      <CartContainer/>
    </div>
  )
}
