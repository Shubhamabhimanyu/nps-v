import React, { useState } from "react";
import styles from "./TestimonialsCarousal.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
// import Image1 from "../../../assets/homepage/testimonials/testimonial.png";
import Image1 from "../../../assets/homepage/testimonials/Image1.jpg";
import Image2 from "../../../assets/homepage/testimonials/Image2.jpg";
import Image3 from "../../../assets/homepage/testimonials/Image3.jpg";
import Image4 from "../../../assets/homepage/testimonials/Image4.jpg";
import Image5 from "../../../assets/homepage/testimonials/Image5.jpg";
import Image6 from "../../../assets/homepage/testimonials/Image6.jpg";
import Image7 from "../../../assets/homepage/testimonials/Image7.jpg";
import Image8 from "../../../assets/homepage/testimonials/advait-rajguru.jpg";
import Image9 from "../../../assets/homepage/testimonials/manash-kalita.jpg";
import Image10 from "../../../assets/homepage/testimonials/vinayak-bajaj.webp";
import Image11 from "../../../assets/homepage/testimonials/Yogiraj-Singh.jpg";
import Image12 from "../../../assets/homepage/testimonials/Gaurav-&-Gunisha.jpg";
import Image13 from "../../../assets/homepage/testimonials/Karan-Malhotra.jpg";
import Image14 from "../../../assets/homepage/testimonials/Neel-Joshi.jpg";
import Image15 from "../../../assets/homepage/testimonials/Saransh-Garg.jpg";
import Image16 from "../../../assets/homepage/testimonials/Shubham-Agarwal.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Play from "../../../assets/homepage/howToPlay/play.png";

const Card = ({ item, active }) => {
  const [video, setVideo] = useState(false);
  return (
    <>
      <div
        className={styles.cardContainerTestimonials}
        id="cardId"
        style={{ transform: `translateX(-${103 * active + active * 2}%)` }}
      >
        <div className={styles.playerImage}>
          <Image src={item.url} alt={item.player} fill contain center />
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
              src={item.video}
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

function TestimonialsCarousal() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      url: Image16,
      video: "https://www.youtube.com/embed/pkCshjbzqzo",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 2,
      url: Image15,
      video: "https://www.youtube.com/embed/7RL8y2IJRC4",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 3,
      url: Image14,
      video: "https://www.youtube.com/embed/4-nk7x1vVNI",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 4,
      url: Image13,
      video: "https://www.youtube.com/embed/aGxzNw2Wjgk",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 5,
      url: Image12,
      video: "https://www.youtube.com/embed/qgazyLxr9Qs",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 6,
      url: Image11,
      video: "https://www.youtube.com/embed/TRvwadVykYM",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 7,
      url: Image10,
      video: "https://www.youtube.com/embed/AweK-4ANVz8",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 8,
      url: Image8,
      video: "https://www.youtube.com/embed/idmcxUBlSMU",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
    },
    {
      id: 9,
      url: Image9,
      video: "https://www.youtube.com/embed/25ypMoBzKMc",
      content:
        "“The National Poker Series is India’s only national, poker-specific, celebratory championship.”",
      player: "~Mogambo",
      coins: "2Lac Winnings",
      medals: "4 Medals",
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
    // if (active < 0) {
    //   removeItem.unshift(removeItem[removeItem.length - 1]);
    //   setData([...removeItem]);
    // }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setActive((prev) => prev + 1),
    onSwipedRight: () => setActive((prev) => prev - 1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.carousalContainerTestimonials} {...handlers}>
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
}

export default TestimonialsCarousal;
