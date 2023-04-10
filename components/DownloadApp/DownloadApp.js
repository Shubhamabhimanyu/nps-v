import Image from "next/image";
import React from "react";
import NPS from "../../assets/homepage/downloadNPS.png";
import Logo from "../../assets/homepage/Logo1.png";
import styles from "./DownloadApp.module.css";
const DownloadApp = () => {
  return (
    <div
      className={`${styles.downloadAppContainer} globalContainer`}
      id="downloadApp"
    >
      <div className={styles.downloadAppContainerImage}>
        <Image src={NPS} alt="Download App" fill center contain />
      </div>
      <div className={styles.downloadAppContainerText}>
        <h2 className="head__text">OFFICIAL HOST</h2>
        <div className={styles.downloadLogo}>
          <Image src={Logo} alt="logo" fill center contain />
        </div>
        <div className={styles.banner__btn__wrapper}>
          <div className={styles.banner__btn__overlay}></div>
          <a href={"https://pokerbaazi.app.link/NPS"} target={"_blank"}>
            DOWNLOAD THE APP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
