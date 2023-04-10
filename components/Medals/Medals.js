import Image from "next/image";
import React from "react";
import MedalsImg from "../../assets/homepage/medals/medalFront.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "./Medals.module.css";

export default function MedalsNPS() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 col-sm-12 m-auto py-3 my-3 z-index-5">
          <div className={styles.image__bggradient}>
            <Image
              src={MedalsImg}
              alt="Medals"
              className="d-block w-100 h-auto"
            />
          </div>
          <h2 className={styles.medal__title}>
            324 MEDALS
            <span className="d-block">TO CLAIM YOUR GLORY</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
