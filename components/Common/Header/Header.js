import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import Logo from "../../../assets/homepage/logo/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Facebook from "../../../assets/homepage/footer/facebook.png";
import Youtube from "../../../assets/homepage/footer/youtube.png";
import Instagram from "../../../assets/homepage/footer/instagram.png";

function Header() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [router?.asPath]);

  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__large__wrapper}>
        <Link href="/" className={styles.header__logo}>
          <Image alt="Logo" src={Logo} fill />
        </Link>
        <div className={styles.header__quick__links}>
          <Link
            href={"/"}
            style={{
              color: router?.asPath === "/" && "#d79b49",
              textDecoration: router?.asPath === "/" && "underline",
            }}
          >
            Home
          </Link>
          <Link
            href={"/schedule"} 
            as={"/schedule/index.html"}
            style={{
              color: router?.asPath === "/schedule/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/schedule/index.html" && "underline",
            }}
          >
            Schedule
          </Link>
          <Link
            href={"/free-roll"}
            as={"/free-roll/index.html"}
            style={{
              color: router?.asPath === "/free-roll/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/free-roll/index.html" && "underline",
            }}
          >
            Freeroll
          </Link>
          <Link
            href={"/leaderboard"}
            as={"/leaderboard/index.html"}
            style={{
              color: router?.asPath === "/leaderboard/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/leaderboard/index.html" && "underline",
            }}
          >
            Leaderboard
          </Link>
        
          <Link
            href={"/players-stories"}
            as={"/players-stories/index.html"}
            style={{
              color: router?.asPath === "/players-stories/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/players-stories/index.html" && "underline",
            }}
          >
            Player Stories
          </Link>
          <Link
            href={"/golden-book"}
            as={"/golden-book/index.html"}
            style={{
              color: router?.asPath === "/golden-book/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/golden-book/index.html" && "underline",
            }}
          >
            Golden Book
          </Link>
          <Link
            href={"/table-of-glory"}
            as={"/table-of-glory/index.html"}
            style={{
              color: router?.asPath === "/table-of-glory/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/table-of-glory/index.html" && "underline",
            }}
          >
            Table Of Glory
          </Link>
          <Link
            href={"/night-of-glory"}
            as={"/night-of-glory/index.html"}
            style={{
              color: router?.asPath === "/night-of-glory/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/night-of-glory/index.html" && "underline",
            }}
          >
           Night Of Glory
          </Link>
        </div>
      </div>
      <div className={styles.header__small__wrapper}>
        <Link href="/" className={styles.header__small__logo}>
          <Image src={Logo} fill alt="Logo" contain center />
        </Link>

        <div
          className={`${styles.hamburger__icon} ${show ? styles.open : null}`}
          onClick={() => setShow(!show)}
        >
          <div className={styles.hamburger_btn_burger_1}></div>
          <div className={styles.hamburger_btn_burger_2}></div>
          <div className={styles.hamburger_btn_burger_3}></div>
        </div>

        <div
          className={styles.sidebar__menu}
          style={{
            transform: show && "translateX(0%)",
          }}
        >
          <div className={styles.sidebar__content}>
            <div className={styles.menu__links}>
            <Link
            href={"/"}
            style={{
              color: router?.asPath === "/" && "#d79b49",
              textDecoration: router?.asPath === "/" && "underline",
            }}
          >
            Home
          </Link>
          <Link
            href={"/schedule"} 
            as={"/schedule/index.html"}
            style={{
              color: router?.asPath === "/schedule/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/schedule/index.html" && "underline",
            }}
          >
            Schedule
          </Link>
          <Link
            href={"/free-roll"}
            as={"/free-roll/index.html"}
            style={{
              color: router?.asPath === "/free-roll/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/free-roll/index.html" && "underline",
            }}
          >
            Freeroll
          </Link>
          <Link
            href={"/leaderboard"}
            as={"/leaderboard/index.html"}
            style={{
              color: router?.asPath === "/leaderboard/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/leaderboard/index.html" && "underline",
            }}
          >
            Leaderboard
          </Link>
        
          <Link
            href={"/players-stories"}
            as={"/players-stories/index.html"}
            style={{
              color: router?.asPath === "/players-stories/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/players-stories/index.html" && "underline",
            }}
          >
            Player Stories
          </Link>
          <Link
            href={"/golden-book"}
            as={"/golden-book/index.html"}
            style={{
              color: router?.asPath === "/golden-book/index.html" && "#d79b49",
              textDecoration: router?.asPath === "/golden-book/index.html" && "underline",
            }}
          >
            Golden Book
          </Link>
          <Link
            href={"/table-of-glory"}
            as={"/table-of-glory/index.html"}
            style={{
              color: router?.asPath === "/table-of-glory/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/table-of-glory/index.html" && "underline",
            }}
          >
            Table Of Glory
          </Link>
          <Link
            href={"/night-of-glory"}
            as={"/night-of-glory/index.html"}
            style={{
              color: router?.asPath === "/night-of-glory/index.html" && "#d79b49",
              textDecoration:
                router?.asPath === "/night-of-glory/index.html" && "underline",
            }}
          >
           Night Of Glory
          </Link>
            </div>

            <div className={styles.social__links__wrapper}>
              <a
                href="https://www.instagram.com/nationalpokerseries/"
                className={styles.menu__social__link}
              >
                <Image width={25} height={25} alt="instagram" src={Instagram} />
              </a>
              <a
                href="https://www.facebook.com/NationalPokerSeries"
                className={styles.menu__social__link}
              >
                <Image height={22} width={8} alt="facebook" src={Facebook} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCSvasfLey_DpqGEI0OEbWug"
                className={styles.menu__social__link}
              >
                <Image width={30} height={25} alt="youtube" src={Youtube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
