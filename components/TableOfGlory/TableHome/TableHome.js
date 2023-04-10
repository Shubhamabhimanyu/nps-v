import React, { useState, useEffect } from "react";
import PlayerTable from "../PlayerTable/PlayerTable";
import StateTable from "../StateTable/StateTable";
import styles from "./TableHome.module.css";
import Arrow from "../../Common/Arrow/Arrow";

function TableHome() {
  const [toggle, setToggle] = useState(1);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 5000);

    if (window.innerWidth < 768) {
      setShow(true);
    }
  }, []);

  return (
    <div className={styles.table__home__container}>
      <h1 className="head__text">TABLE OF GLORY</h1>

      {show && !hide && (
        <div className={styles.arrrow__container}>
          <Arrow />
        </div>
      )}

      <div className={styles.table__home__btn__wrapper}>
        <div className={styles.mono__btn__wrapper}>
          {toggle === 1 && <div className={styles.mono__btn__overlay}></div>}

          <button
            onClick={() => setToggle(1)}
            style={{
              background:
                toggle === 1
                  ? "linear-gradient(269.35deg, #D79B49 38.04%, #FEF472 100%)"
                  : "#4F4F4F",
              color: "white",
            }}
          >
            Player Wise
          </button>
        </div>
        <div className={styles.mono__btn__wrapper}>
          {toggle === 2 && <div className={styles.mono__btn__overlay}></div>}

          <button
            onClick={() => setToggle(2)}
            style={{
              background:
                toggle === 2
                  ? "linear-gradient(269.35deg, #D79B49 38.04%, #FEF472 100%)"
                  : "#4F4F4F",
              color: "white",
            }}
          >
            State Wise
          </button>
        </div>
      </div>

      {toggle === 1 && <PlayerTable />}

      {toggle === 2 && <StateTable />}
    </div>
  );
}

export default TableHome;
