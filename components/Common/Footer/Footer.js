import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Facebook from "../../../assets/homepage/footer/facebook.png";
// import Twitter from "../../../assets/homepage/footer/twitter.png";
import Youtube from "../../../assets/homepage/footer/youtube.png";
import Instagram from "../../../assets/homepage/footer/instagram.png";
// import LinkedIn from "../../../assets/homepage/footer/linkedin.png";
import Logo from "../../../assets/homepage/logo/logo.png";
import Link from "next/link";

function Footer() {
  function downloadApp() {
    const userAgent = navigator.userAgent;
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("iphone") > -1) {
      window.location.href =
        "https://apps.apple.com/in/app/pokerbaazi-online-poker/id1369524104";
    } else if (/android/i.test(userAgent)) {
      window.location.href =
        "https://pb-app-download.sgp1.digitaloceanspaces.com/PokerBaazi.apk";
    } else if (/windows/i.test(userAgent)) {
      window.location.href =
        "https://pb-app-download.sgp1.digitaloceanspaces.com/PokerBaazi.exe";
    } else if (/mac/i.test(userAgent)) {
      window.location.href =
        "https://pb-app-download.sgp1.digitaloceanspaces.com/PokerBaazi.dmg";
    }
  }
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__icons__wrapper}>
        <a
          href="https://www.instagram.com/nationalpokerseries/"
          target="_blank"
          className={styles.footer__mono__icon}
        >
          <Image alt="instagram" src={Instagram} />
        </a>
        <a
          href="https://www.facebook.com/NationalPokerSeries"
          target="_blank"
          className={styles.footer__mono__icon}
        >
          <Image alt="facebook" src={Facebook} />
        </a>
        {/* <a className={styles.footer__mono__icon}>
          <Image alt="twitter" src={Twitter} />
        </a>
        <a className={styles.footer__mono__icon}>
          <Image alt="linkedin" src={LinkedIn} />
        </a> */}
        <a
          href="https://www.youtube.com/channel/UCSvasfLey_DpqGEI0OEbWug"
          target="_blank"
          className={styles.footer__mono__icon}
        >
          <Image alt="youtube" src={Youtube} />
        </a>
      </div>

      <div className={styles.footer__logo}>
        <Image src={Logo} fill="true" />
      </div>

      <div className={styles.footer__terms}>
        <a
          target="blank"
          href="https://www.pokerbaazi.com/privacy-policy"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        <a
          target="blank"
          href="https://www.pokerbaazi.com/faq"
          rel="noreferrer"
        >
          FAQs
        </a>
        <a
          target="blank"
          href="https://www.pokerbaazi.com/responsible-gaming"
          rel="noreferrer"
        >
          Responsible Gaming
        </a>
        <Link href="/terms-of-use"
           as={"/terms-of-use/index.html"}
        rel="noreferrer">
          Terms and Conditions
        </Link>
      </div>
      <p>© 2023 National Poker Series. All rights reserved.</p>
      <div className={styles.fixedbottomdsk}>
        <div className={styles.blankbutton}></div>
        <button
          className={`${styles.commanbutondsk} ${styles.mobilebuttondsk}`}
          onClick={downloadApp}
        >
          REGISTER ON POKERBAAZI
        </button>
      </div>
      <div className={styles.fixedbottom}>
        <div className={styles.blankbutton}></div>
        <a
          href={"https://pokerbaazi.app.link/NPS"}
          target={"_blank"}
          className={styles.mcta}
        >
          <button className={`${styles.commanbuton} ${styles.mobilebutton}`}>
            REGISTER ON POKERBAAZI
          </button>
        </a>
      </div>
    </div>
  );
}
export default Footer;
