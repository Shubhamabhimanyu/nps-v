import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import image1 from "../../assets/night-of-glory/NPS-23-Web-Page main-card.png"
import image2 from "../../assets/night-of-glory/NPS-23-Web-Page 1.png"
import image3 from "../../assets/night-of-glory/NPS-23-Web-Page 2.png"
import image4 from "../../assets/night-of-glory/NPS-23-Web-Page 3.png"
import React from 'react'
import Image from "next/image";
export default function index() {
  return (
   <>
   <div className={styles.mt_100}>
    <div className={`${styles.container} container`}>

   <Image src={image1} alt=""  class={`${styles.img_border} img-fluid w-100 h-auto mb-4`} />
   <Image src={image2} alt=""  class={`${styles.img_border} img-fluid w-100 h-auto mb-4`}/>
   <Image src={image3} alt="" class={`${styles.img_border} img-fluid w-100 h-auto mb-4`}/>
   <Image src={image4} alt=""  class={`${styles.img_border} img-fluid w-100 h-auto mb-4`}/>
    </div>
        </div>

   </>
  )
}
