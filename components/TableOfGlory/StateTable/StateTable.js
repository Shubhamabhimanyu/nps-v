import React, { useState, useEffect } from "react";
import styles from "../PlayerTable/PlayerTable.module.css";
import { gloryStateData } from "../../../GloryStateData";
import { BsChevronDown } from "react-icons/bs";

function StateTable() {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2022);
  const [selectedData, setSelectedData] = useState();
  const [toggleData, setToggleData] = useState();
  const [toggle, setToggle] = useState("State_Medals");

  const toggleOptions = [
    {
      id: 1,
      title: "MEDALS",
      key: "State_Medals",
    },
    {
      id: 2,
      title: "WINNINGS",
      key: "State_Winnings",
    },
    {
      id: 2,
      title: "CASHES",
      key: "State_Cashes",
    },
  ];

  const years = ["2022","2021"];

  useEffect(() => {
    setSelectedData(gloryStateData[0][year]);

    setToggleData(gloryStateData[0][year][toggle]);
  }, [year]);

  const toggleHandler = (key) => {
    setToggle(key);

    setToggleData(selectedData[key]);
  };

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
            <th>Rank</th>
            <th>{toggle?.split("_")[1]}</th>

            <th>STATE</th>
          </tr>

          {toggleData?.map((item, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td>
                {toggle === "State_Medals" && item?.Medals}
                {toggle === "State_Winnings" && Math.round(item?.winnings)}
                {toggle === "State_Cashes" && item?.Cashes}
              </td>
              <td>{item?.state}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default StateTable;
