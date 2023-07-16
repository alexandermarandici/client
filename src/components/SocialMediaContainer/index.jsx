import React from 'react'
import s from "./index.module.css";
import imgCarta from "../imgData/imgCarta/image 11.png";
import insta from "../imgData/insta/Vector.png";
import whatsap from "../imgData/whatsap/Vector (1).png";


export default function SocialMediaContainer() {
  return (
    <div>
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
              <a href="http://"><img src={insta} alt="" /></a>
              <a href="http://"><img src={whatsap} alt="" /></a>
            </div>
        </div>

        <div className={s.imgCarta}>
          
          <img src={imgCarta} alt="" />
          
        </div>
    </div>
  )
}
