import React from "react";
import TestimonialsCarousal from "../Common/Carousal/TestimonialsCarousal";
import styles from '../Banner/Banner.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
const Tournament = () => {
  const router = useRouter();
  return (
    <div className="container__testimonials" id="players_storiess">
      <h2 className="global_h1">Player stories</h2>
      {/* <p>
        The National Poker Series is India’s only national, poker-specific,
        celebratory championship.
      </p> */}
      <TestimonialsCarousal />

      <div className={styles.banner__btn__wrapper} style={{width:'12rem', height:'4.3rem'}}>
              <div className={styles.banner__btn__overlay}></div>
              {/* <a href={"/players-stories"}>
                 VIEW ALL
              </a> */}
            <Link href={"/players-stories"} 
             as={"/players-stories/index.html"}
             style={{
               color: router?.asPath === "/players-stories/index.html" && "#d79b49",
               textDecoration:
                 router?.asPath === "/players-stories/index.html" && "underline",
             }}
             >VIEW ALL</Link>
            </div>
    </div>
  );
};

export default Tournament;
