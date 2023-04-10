import React from "react";
import styles from "./Stats.module.css";

function Stats() {
  const data = [
    {
      id: 1,
      amount: "450+",
      title: "Medals Won",
    },
    {
      id: 2,
      amount: "40 Cr+",
      title: "Prize Pool Reached",
    },
    {
      id: 3,
      amount: "150+",
      title: "Tournaments",
    },
    {
      id: 4,
      amount: "180K+",
      title: "Entries",
    },
  ];

  return (
    <div className={styles.stats__container}>
      {/* <div className={`${styles.first_glow} glow`}></div> */}
      {data?.map((s) => (
        <div key={s?.id} className={styles.mono__stat}>
          <h4>{s?.amount}</h4>
          <p>{s?.title}</p>
        </div>
      ))}
      {/* <div className={`${styles.second_glow} glow`}></div> */}
    </div>
  );
}

export default Stats;
