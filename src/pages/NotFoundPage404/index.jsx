import React from 'react'
import imageNotFound from "./imageNotFound/image 12.png";
import s from "./index.module.css";
import SocialMediaContainer from '../../components/SocialMediaContainer';

export default function NotFoundPage() {
  return (
    <div>
        <div className={s.imageNotFound}>
            <img src={imageNotFound} alt="" />
        </div>

        <SocialMediaContainer/>
    </div>
  )
}
