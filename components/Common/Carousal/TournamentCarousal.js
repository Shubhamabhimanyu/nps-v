import React, { useState } from "react";
import styles from "./TournamentCarousal.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Image1 from "../../../assets/homepage/tournament/goldenRush.png";
import Image2 from "../../../assets/homepage/tournament/HighRoller.png";
import Image3 from "../../../assets/homepage/tournament/MainEvent.png";
import Image4 from "../../../assets/homepage/tournament/MiniMainEvent.png";
import Image5 from "../../../assets/homepage/tournament/NPSvalueMine.png";
import Image6 from "../../../assets/homepage/tournament/SuperHighRoller.png";
import Image7 from "../../../assets/homepage/tournament/Group 172.png";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const Card = ({ item, active }) => {
  return (
    <div
      className={styles.cardContainerTournament}
      id="cardId"
      style={{ transform: `translateX(-${103 * active + active * 2}%)` }}
    >
      <div className={styles.carousalContainerTournamentGlow}>
        <Image src={Image7} alt="test" fill />
      </div>
      <div className={styles.carousalContainerTournamentImage}>
        <Image src={item.url} alt={item.url} fill />
      </div>
    </div>
  );
};

const TournamentCarousal = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      url: Image1,
    },
    {
      id: 2,
      url: Image2,
    },
    {
      id: 3,
      url: Image3,
    },
    {
      id: 4,
      url: Image4,
    },
    {
      id: 5,
      url: Image5,
    },
    {
      id: 6,
      url: Image6,
    },
    {
      id: 7,
      url: Image1,
    },
    {
      id: 8,
      url: Image2,
    },
    {
      id: 9,
      url: Image3,
    },
    {
      id: 10,
      url: Image4,
    },
    {
      id: 11,
      url: Image5,
    },
    {
      id: 12,
      url: Image6,
    },
    {
      id: 13,
      url: Image1,
    },
    {
      id: 14,
      url: Image2,
    },
    {
      id: 15,
      url: Image3,
    },
    {
      id: 16,
      url: Image4,
    },
    {
      id: 17,
      url: Image5,
    },
    {
      id: 18,
      url: Image6,
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
    let removeItem = data;
    if (active > 1) {
      let remove = removeItem.pop();
      removeItem.unshift(remove);
      setData([...removeItem]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setActive((prev) => prev + 1),
    onSwipedRight: () => setActive((prev) => prev - 1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.carousalContainerTournament} {...handlers}>
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

export default TournamentCarousal;
