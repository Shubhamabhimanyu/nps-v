import React from "react";
import styles from "./Banner.module.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
 
  return (
    <>
      <Slider {...settings}>
        <div className={styles.banner__container}>
          <div className={styles.banner__background}></div>
          <div className={styles.banner__content}>
            <h1>
              NATIONAL <br /> POKER SERIES
            <br/>
              <span className="head__text">25 CR+ GTD</span>
            </h1>
            <p>29th March - 16th April 23</p> 


            <div className={styles.banner__btn__wrapper}>
              <div className={styles.banner__btn__overlay}></div>
              <a href={"https://pokerbaazi.app.link/NPS"} target={"_blank"}>
                 REGISTER ON POKERBAAZI
              </a>
            
            </div>
          </div>
        </div>
        {/* <div className={styles.banner__container}>
          <div className={styles.banner__background_2}></div>
        </div> */}
      </Slider>
      
      {/* <div className={styles.banner__contentMobile}>
        <h2 className="banner_h1">
          NATIONAL <br /> POKER SERIES
        </h2>
        
        <h2 className="banner_h1">
          <span className="head__text">25 CR+ GTD</span>
        </h2>
        <p>29th March - 16th April'23</p>

        <div className={styles.banner__btn__wrapper}>
          <div className={styles.banner__btn__overlay}></div>
           <a href="#downloadApp">Registrations Open</a>
        </div> 
      </div> */}
    </>
  );
}

export default Banner;
