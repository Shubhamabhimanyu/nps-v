import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.about__wrapper}>
        <h2 className="head__text">ABOUT NATIONAL POKER SERIES</h2>
        <p>
          The National Poker Series is India�s only national, poker-specific,
          celebratory championship. With more than 180K entries and 450+ medals,
          across 150 events over the past 2 years, the National Poker Series is
          where India comes to compete, feel, inspire, be together and be the
          best in the world of Poker.
        </p>

        <div className={styles.large__timeline__wrapper}>
          <div className={styles.container}>
            <ul className={styles.timeline}>
              <li className={`active-tl`}>
                <span>June 2021</span>
                <span>First Edition</span>
              </li>
              <li>
                <span>Mar 2022</span>
                <span>Second Edition</span>
              </li>
              <li>
                <span>Apr 2023</span>
                <span>Third Edition</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.small__timeline__wrapper}>
          <div className={styles.rightbox}>
            <div className={styles.rb_container}>
              <ul className={styles.rb}>
                <li className={styles.rb_item} ng-repeat="itembx">
                  <div className={styles.timestamp}>June 2021</div>
                  <div class={styles.item_title}>First Edition</div>
                </li>
                <li className={styles.rb_item} ng-repeat="itembx">
                  <div className={styles.timestamp}>Mar 2022</div>
                  <div class={styles.item_title}>Second Edition</div>
                </li>

                <li className={styles.rb_item} ng-repeat="itembx">
                  <div className={styles.timestamp}>Apr 2023</div>
                  <div class={styles.item_title}>Third Edition</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.justify_content_center}>
        <div className={styles.col_lg_6}>
          <iframe
            className={styles.w_100}
            title="NPS Featured Video"
            src="https://www.youtube.com/embed/JEsdjKuCc8I"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className={styles.col_lg_6}>
          <iframe
            className={styles.w_100}
            title="NPS Featured Video"
            src="https://www.youtube.com/embed/hRj3dsWvfOA"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}

export default About;
