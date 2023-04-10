import React, { useState } from "react";
import styles from "./Inspire.module.css";
import Inspir from "../../assets/homepage/Inspire/inspire.jpg";
import Recognise from "../../assets/homepage/Inspire/recognise.jpg";
import Hunt from "../../assets/homepage/Inspire/hunt.jpg";
import Honour from "../../assets/homepage/Inspire/honour.jpg";
import Respect from "../../assets/homepage/Inspire/respect.jpg";
import Glory from "../../assets/homepage/Inspire/glory.jpg";
import Image from "next/image";
import InspireMob from "./InspireMob";

const data = [
  {
    id: 1,
    title: "Inspire",
    image: Inspir,
    head: "Inspire India",
    short: "A new sport to champion.",
    long: "We champion continual progress and believe every poker player has a chance to reach their maximum potential. The National Poker Series is about creating a culture and purpose for Indian Poker that leaves a lasting impression",
  },
  {
    id: 2,
    title: "Recognise",
    image: Recognise,
    head: "Recognise the game",
    short: "Our purpose is to move Poker forward.",
    long: "Every sport needs a podium, an arena that summons, and a title worth chasing. With the National Poker Series, we bring you the Olympics of Poker and the nation’s pride.",
  },
  {
    id: 3,
    title: "Hunt",
    image: Hunt,
    head: "Hunting for the next",
    short: "Every year a new star is born.",
    long: "Step up to the table and join India’s hunt for the next Poker Champion. Showcase your skills against the best players in India and climb the ranks to experience Poker Glory.",
  },
  {
    id: 4,
    title: "Honour",
    image: Honour,
    head: "The Honour of Gold",
    short: "The pinnacle of winning.",
    long: "A gold medal is a moment that will forever shine bright in a player's heart. This moment of honour is the epitome of excellence and a testament to the player's boundless potential.",
  },
  {
    id: 5,
    title: "Respect",
    image: Respect,
    head: "The Respect of the Podium",
    short: "A place to shine",
    long: "The podium is a sacred stage, where champions are crowned and legends are made. With heads held high, they stand tall, basking in the applause, and celebrating the moment they are immortalized as champions.",
  },
  {
    id: 6,
    title: "Glory",
    image: Glory,
    head: "Everlasting Glory",
    short: "The rise of new legends.",
    long: "Charged with inspiration, a new generation is born ready to leave a lasting legacy in the World of Poker. They will soon join the elite few, forever remembered as Poker Legends.",
  },
];

function Inspire() {
  const [selectedData, setSelectedData] = useState([data[0]]);

  const tabHandler = (i) => {
    let res = data?.filter((d) => d?.id === i);
    setSelectedData(res);
  };

  return (
    <div className={styles.inspire__wrapper}>
      <div className={styles.inspire__large}>
        <div className={styles.inspire__large__tags}>
          {data?.map((d, index) => (
            <div
              key={index}
              className={`${styles.inspire__large__mono__tag}   `}
              onClick={() => tabHandler(d?.id)}
            >
              <span>0{d?.id} </span>
              <h4
                className={`${
                  selectedData[0]?.id === d?.id ? styles.selected__font : null
                }`}
              >
                {d?.title}
              </h4>
            </div>
          ))}
        </div>

        <div className={styles.inspire__large__content}>
          <div className={styles.inspire__large__image}>
            <Image
              src={selectedData[0]?.image}
              fill="true"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className={styles.inspire__large__description}>
            <h5
              dangerouslySetInnerHTML={{
                __html: selectedData[0]?.head,
              }}
            ></h5>
            <p>{selectedData[0]?.long}</p>
          </div>
        </div>
      </div>

      <div className={styles.inspire__small}>
        <InspireMob data={data} />
      </div>
    </div>
  );
}

export default Inspire;
