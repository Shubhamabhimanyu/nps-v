import React, { useState, useEffect } from "react";
import styles from "./PlayerTable.module.css";
import { BsChevronDown } from "react-icons/bs";
import { gloryPlayerData } from "../../../GloryPlayerData";

function PlayerTable() {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2022);
  const [selectedData, setSelectedData] = useState();
  const [toggleData, setToggleData] = useState();
  const [toggle, setToggle] = useState("Player_Medals");

  const toggleOptions = [
    {
      id: 1,
      title: "MEDALS",
      key: "Player_Medals",
    },
    {
      id: 2,
      title: "WINNINGS",
      key: "Player_Winnings",
    },
    {
      id: 2,
      title: "CASHES",
      key: "Player_Cashes",
    },
  ];

  const years = ["2022","2021"];

  useEffect(() => {
    setSelectedData(gloryPlayerData[0][year]);

    setToggleData(gloryPlayerData[0][year][toggle]);
  }, [year]);

  const toggleHandler = (key) => {
    setToggle(key);

    setToggleData(selectedData[key]);
  };

  //   console.log(toggleData);

  return (
    <div className={styles.player__section__container}>
      <div className={styles.table__filter__section}>
        <div className={styles.filter__upper}>
          <div className={styles.filter__left}>
            {/* <h4 className="head__text">PLAYER WISE</h4>
            <div className={styles.vertical__seperation}></div> */}

            <div className={styles.toggle__section}>
              {toggleOptions?.map((t, index) => (
                <h5
                  key={index}
                  onClick={() => toggleHandler(t?.key)}
                  style={{
                    color: toggle === t.key ? "#fff" : "#4f4f4f",
                  }}
                >
                  {t.title}
                </h5>
              ))}
            </div>
          </div>

          <div className={styles.select__tag__wrapper}>
            <div className={styles.select__div} onClick={() => setOpen(!open)}>
              <div className={styles.select__div__left}>
                <p className="head__text">FILTER</p>
                <span></span>
                <p>{year}</p>
                
              </div>

              <span
                style={
                  open
                    ? {
                        transform: "rotateZ(-180deg)",
                        transition: "all 0.4s ease",
                      }
                    : {
                        transform: "rotateZ(0deg)",
                        transition: "all 0.4s ease",
                      }
                }
              >
                <BsChevronDown color={"#fff"} />
              </span>
            </div>

            {open && (
              <div className={styles.select__div__options}>
                <div className={styles.select__div__option__wrapper}>
                  {years?.map((year, index) => (
                    <p
                      onClick={() => {
                        setOpen(false);
                        setYear(year);
                      }}
                      key={index}
                    >
                      {year}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className={styles.toggle__section__mob}>
          {toggleOptions?.map((t, index) => (
            <h5
              key={index}
              onClick={() => toggleHandler(t?.key)}
              style={{
                color: toggle === t.key ? "#fff" : "#4f4f4f",
              }}
            >
              {t.title}
            </h5>
          ))}
        </div> */}
      </div>

      <div className={styles.stats__table__container}>
        <table rules="none">
          <tr>
            <th>S.NO</th>
            <th>{toggle?.split("_")[1]}</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>STATE</th>
          </tr>

          {toggleData?.map((item, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td>
                {toggle === "Player_Medals" && item?.Medals}
                {toggle === "Player_Winnings" && Math.round(item?.winnings)}
                {toggle === "Player_Cashes" && item?.Cashes}
              </td>
              <td>{item?.Name}</td>
              <td>{item?.Username}</td>
              <td>{item?.State}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default PlayerTable;
