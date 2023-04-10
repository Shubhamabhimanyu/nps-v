import React, { useState } from "react";
import styles from "./index.module.css";
import NPS2021first from "../../assets/golden/1NPS-2021.png";
import NPS2021second from "../../assets/golden/2NPS-2021.png";
import NPS2021third from "../../assets/golden/3NPS-2021.png";

import NPS2022first from "../../assets/golden/1NPS-2022.png";
import NPS2022second from "../../assets/golden/2NPS-2022.png";
import NPS2022third from "../../assets/golden/3NPS-2022.png";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
const GOlden = () => {
  const [clicked, setClicked] = useState(0);
  const schemaData = 
  {
    "@context":"http://schema.org",
    "@type":"WebPage",
    "@id":"https://nationalpokerseries.in/golden-book",
    "url":"https://nationalpokerseries.in/golden-book",
    "name":"NPS Golden Book – Check Greatest Players Details of Indian Poker History",
    "description":"NPS Golden Book is full of names that gave it their all and left mark in the pages of Indian Poker History. Play NPS 2023 on PokerBaazi and push yourself to achieve greatness.",
    "potentialAction":[{"@type":"ReadAction",
    "target":"https://nationalpokerseries.in/golden-book"
          }
          ]
  }
  return (
    <>
     <Head>
      <title>NPS Golden Book – Check Greatest Players Details of Indian Poker History
</title>
      <meta name="description" content="NPS Golden Book is full of names that gave it their all and left mark in the pages of Indian Poker History. Play NPS 2023 on PokerBaazi and push yourself to achieve greatness.
" />
<link rel="canonical" href="https://nationalpokerseries.in/golden-book" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>

    <div className={`${styles.goldenBookContainer} globalContainer`}>
      <h1 className="global_h1">NPS INDIA GOLDEN BOOK</h1>
      <p>
        When you dare to go big, you not only push yourself to achieve
        greatness, you also inspire others. The NPS Golden Book is full of names
        that gave it their all and left a mark in the pages of Indian poker
        history.
      </p>
      <div className={styles.goldenBookButtonContainer}>
        <div className={styles.banner__btn__wrapper}>
          <div className={styles.banner__btn__overlay}></div>
          <button
            style={
              clicked !== 0
                ? { background: "rgba(79, 79, 79, 1)", color: "white" }
                : {}
            }
            onClick={() => setClicked(0)}
          >
            2021
          </button>
        </div>

        {/* <button> */}
        {/* 2021 */}
        {/* <svg
            height="55"
            width="200"
            viewBox="35 0 166 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 1L1 18.1698V53H149.5L165 37.7925V1H18.5Z"
              stroke="white"
            />
          </svg> */}
        {/* </button> */}

        <div className={styles.banner__btn__wrapper}>
          <div className={styles.banner__btn__overlay}></div>
          <button
            onClick={() => setClicked(1)}
            style={
              clicked !== 1
                ? { background: "rgba(79, 79, 79, 1)", color: "white" }
                : {}
            }
          >
            2022
          </button>
        </div>
      </div>

      {clicked === 0 && (
        <div className={styles.goldenBookImageContainer}>
          <div className={styles.goldenBookImageContainerUpper}>
            <Image
              src={NPS2021first}
              alt="2021 player"
              contain
              center
              priority={true}
            />
          </div>
          <div className={styles.goldenBookImageContainerLower}>
            <div>
              <Image
                src={NPS2021second}
                alt="2021 player"
                contain
                center
                priority={true}
              />
            </div>
            <div>
              <Image
                src={NPS2021third}
                alt="2021 player"
                contain
                center
                priority={true}
              />
            </div>
          </div>
        </div>
      )}
      {clicked === 1 && (
        <div className={styles.goldenBookImageContainer}>
          <div className={styles.goldenBookImageContainerUpper}>
            <Image
              src={NPS2022first}
              alt="2022 player"
              contain
              center
              priority={true}
            />
          </div>
          <div className={styles.goldenBookImageContainerLower}>
            <div>
              <Image
                src={NPS2022second}
                alt="2022 player"
                contain
                center
                priority={true}
              />
            </div>
            <div>
              <Image
                src={NPS2022third}
                alt="2022 player"
                contain
                center
                priority={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default GOlden;
