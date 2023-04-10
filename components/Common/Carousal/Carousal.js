import React, { useState } from "react";
import styles from "./Carousal.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
import Image1 from "../../../assets/homepage/howToPlay/howToPlay.png";
import Image2 from "../../../assets/homepage/howToPlay/MakingAHandInPoker.png";
import Image3 from "../../../assets/homepage/howToPlay/HowToPlayTournaments.png";
import Image4 from "../../../assets/homepage/howToPlay/stagesOfPokerJourny.png";
import Image5 from "../../../assets/homepage/howToPlay/handVsHand.png";
import Image6 from "../../../assets/homepage/howToPlay/actionInPoker.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Play from "../../../assets/homepage/howToPlay/play.png";

const Card = ({ item, active }) => {
  const [video, setVideo] = useState(false);
  return (
    <>
      <div
        className={styles.cardContainer}
        id="cardId"
        style={{ transform: `translateX(-${103 * active + active * 1.8}%)` }}
      >
        <div className={styles.cardContainerImage}>
          <Image src={item.image} alt={item.text} contain fill />
        </div>
        <div className={styles.cardContainerHover}>
          <Image src={Play} alt="Play" onClick={() => setVideo(!video)} />
        </div>
      </div>
      {video && (
        <div
          className={styles.cardContainerVideoOuter}
          onClick={(e) => e.target.id !== "videoId" && setVideo(false)}
        >
          <div className={styles.cardContainerVideoInner} id="videoId">
            <AiOutlineClose onClick={() => setVideo(false)} />
            <iframe
              src={item.url}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

const Carousal = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      url: "https://www.youtube.com/embed/h_YPp3I0Oys",
      image: Image1,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker?",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/oqs8lwpd-wY",
      image: Image2,
      time: "14 SEP 2022 • Video",
      text: "Making a hand in poker",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/iaiBL_Ckljk",
      image: Image3,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker Tournaments?",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/q8hqZgaWW6Q",
      image: Image4,
      time: "14 SEP 2022 • Video",
      text: "Stages of a poker tournament",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/NzUdROQ1a7E",
      image: Image5,
      time: "14 SEP 2022 • Video",
      text: "Hand vs Hand comparison",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/1XgZP7zX4gs",
      image: Image6,
      time: "23 OCT 2022 • Video",
      text: "Actions at the poker table",
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/h_YPp3I0Oys",
      image: Image1,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker?",
    },
    {
      id: 8,
      url: "https://www.youtube.com/embed/oqs8lwpd-wY",
      image: Image2,
      time: "14 SEP 2022 • Video",
      text: "Making a hand in poker",
    },
    {
      id: 9,
      url: "https://www.youtube.com/embed/iaiBL_Ckljk",
      image: Image3,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker Tournaments?",
    },
    {
      id: 10,
      url: "https://www.youtube.com/embed/q8hqZgaWW6Q",
      image: Image4,
      time: "14 SEP 2022 • Video",
      text: "Stages of a poker tournament",
    },
    {
      id: 11,
      url: "https://www.youtube.com/embed/NzUdROQ1a7E",
      image: Image5,
      time: "14 SEP 2022 • Video",
      text: "Hand vs Hand comparison",
    },
    {
      id: 12,
      url: "https://www.youtube.com/embed/1XgZP7zX4gs",
      image: Image6,
      time: "23 OCT 2022 • Video",
      text: "Actions at the poker table",
    },
    {
      id: 13,
      url: "https://www.youtube.com/embed/h_YPp3I0Oys",
      image: Image1,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker?",
    },
    {
      id: 14,
      url: "https://www.youtube.com/embed/oqs8lwpd-wY",
      image: Image2,
      time: "14 SEP 2022 • Video",
      text: "Making a hand in poker",
    },
    {
      id: 15,
      url: "https://www.youtube.com/embed/iaiBL_Ckljk",
      image: Image3,
      time: "14 SEP 2022 • Video",
      text: "How to Play Poker Tournaments?",
    },
    {
      id: 16,
      url: "https://www.youtube.com/embed/q8hqZgaWW6Q",
      image: Image4,
      time: "14 SEP 2022 • Video",
      text: "Stages of a poker tournament",
    },
    {
      id: 17,
      url: "https://www.youtube.com/embed/NzUdROQ1a7E",
      image: Image5,
      time: "14 SEP 2022 • Video",
      text: "Hand vs Hand comparison",
    },
    {
      id: 18,
      url: "https://www.youtube.com/embed/1XgZP7zX4gs",
      image: Image6,
      time: "23 OCT 2022 • Video",
      text: "Actions at the poker table",
    },
  ]);

  const moveArrowLeft = () => {
    setActive((prev) => prev + 1);
    let removeItem = data;
    if (active > 3) {
      removeItem.push(removeItem[active - 3]);
      setData([...removeItem]);
    }
  };
  const moveArrowRight = () => {
    setActive((prev) => prev - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setActive((prev) => prev + 1),
    onSwipedRight: () => setActive((prev) => prev - 1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <div className={styles.carousalContainer} {...handlers}>
      {active > 0 && (
        <div className={styles.arrowLeft} onClick={() => moveArrowRight()}>
          <BsArrowLeft color="white" style={{ fontSize: 20 }} />
        </div>
      )}
      {data.map((item, i) => (
        <Card key={i} item={item} active={active} />
      ))}
      <div className={styles.arrowRight} onClick={() => moveArrowLeft()}>
        <BsArrowRight color="white" style={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default Carousal;
