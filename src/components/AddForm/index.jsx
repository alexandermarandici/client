import React from 'react'
import s from "./index.module.css"
import imgdata from "./imgdata/image 3.png"
import { useDispatch } from "react-redux";

export default function AddForm() {

    const disptach = useDispatch();

    const addNumber = event => {
        event.preventDefault();
        const { number } = event.target;
        const num = {
            id: Date.now(),
            number: number.value,
        } 
        console.log(num);
        event.target.reset();
    }
    
  return (
    <div className={s.AddForm}>


        <div className={s.img_data}>
            <div>
                <img src={imgdata} alt="" />
            </div>
        </div>

        
            <div className={s.textItem}>
                <p>
                    5% off 
                </p>
                <p>
                   on  the first order
                </p>
            </div>
        
            <form onSubmit={addNumber}>
                <input type="text" placeholder='+49' name='number' />
                <button>Get a discount</button>
            </form>
        
    </div>
  )}
