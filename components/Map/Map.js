import React, { useState, useEffect } from "react";
import styles from "./Map.module.css";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const INDIA_TOPO_JSON = require("./india.topo.json");
const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

const geographyStyle = {
  default: {
    outline: "none",
    fill: "#464646",
  },
  hover: {
    fill: "#d9d9d9",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    fill: "#d9d9d9",
    transition: "all 250ms",
    outline: "none",
  },
};

const getHeatMapData = () => {
  return [
    {
      id: "AP",
      state: "Andhra Pradesh",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "AR",
      state: "Arunachal Pradesh",
      value: {
        value: 1,
        winnings: "1.8 lacs+",
        cashes: "4",
        medals: "1",
      },
    },
    {
      id: "AS",
      state: "Assam",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "BR",
      state: "Bihar",
      value: { value: 7, winnings: "11 lacs+", cashes: "53", medals: "7" },
    },
    {
      id: "CT",
      state: "Chhattisgarh",
      value: { value: 2, winnings: "6 lacs+", cashes: "23", medals: "2" },
    },
    {
      id: "GA",
      state: "Goa",
      value: { value: 12, winnings: "98 lacs+", cashes: "179", medals: "12" },
    },
    {
      id: "GJ",
      state: "Gujarat",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "HR",
      state: "Haryana",
      value: { value: 21, winnings: "1.1 Cr+", cashes: "313", medals: "21" },
    },
    {
      id: "HP",
      state: "Himachal Pradesh",
      value: { value: 3, winnings: "7 lacs+", cashes: "22", medals: "3" },
    },
    {
      id: "JH",
      state: "Jharkhand",
      value: { value: 3, winnings: "45 lacs+", cashes: "11", medals: "3" },
    },
    {
      id: "KA",
      state: "Karnataka",
      value: { value: 12, winnings: "61 lacs+", cashes: "118", medals: "12" },
    },
    {
      id: "KL",
      state: "Kerala",
      value: {
        value: 0,
        winnings: "N/A",
        cashes: "N/A",
        medals: "N/A",
      },
    },
    {
      id: "MP",
      state: "Madhya Pradesh",
      value: { value: 5, winnings: "15 lacs+", cashes: "53", medals: "5" },
    },
    {
      id: "MH",
      state: "Maharashtra",
      value: { value: 50, winnings: "2.1 Cr+", cashes: "694", medals: "50" },
    },
    {
      id: "MN",
      state: "Manipur",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "ML",
      state: "Meghalaya",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "MZ",
      state: "Mizoram",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "NL",
      state: "Nagaland",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "OD",
      state: "Odisha",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "PB",
      state: "Punjab",
      value: { value: 8, winnings: "42 lacs+", cashes: "79", medals: "8" },
    },
    {
      id: "RJ",
      state: "Rajasthan",
      value: { value: 35, winnings: "1.2 Cr+", cashes: "370", medals: "35" },
    },
    {
      id: "SK",
      state: "Sikkim",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "TN",
      state: "Tamil Nadu",
      value: { value: 3, winnings: "23 lacs+", cashes: "32", medals: "3" },
    },
    {
      id: "TS",
      state: "Telangana",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "TR",
      state: "Tripura",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "UK",
      state: "Uttarakhand",
      value: { value: 3, winnings: "25 lacs+", cashes: "65", medals: "3" },
    },
    {
      id: "UP",
      state: "Uttar Pradesh",
      value: { value: 29, winnings: "1.2 Cr+", cashes: "390", medals: "29" },
    },
    {
      id: "WB",
      state: "West Bengal",
      value: { value: 11, winnings: "45 lacs+", cashes: "107", medals: "11" },
    },
    {
      id: "AN",
      state: "Andaman and Nicobar Islands",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "CH",
      state: "Chandigarh",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "DN",
      state: "Dadra and Nagar Haveli",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "DD",
      state: "Daman and Diu",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "DL",
      state: "Delhi",
      value: { value: 43, winnings: "1.7 Cr+", cashes: "573", medals: "43" },
    },
    {
      id: "JK",
      state: "Jammu and Kashmir",
      value: { value: 1, winnings: "1.3 lacs+", cashes: "12", medals: "1" },
    },
    {
      id: "LA",
      state: "Ladakh",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "LD",
      state: "Lakshadweep",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
    {
      id: "PY",
      state: "Puducherry",
      value: { value: 0, winnings: "N/A", cashes: "N/A", medals: "N/A" },
    },
  ];
};

const App = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 499) {
        setWidth(180);
        setHeight(430);
        return;
      }

      if (window.innerWidth > 499 && window.innerWidth <= 768) {
        setWidth(180);
        setHeight(360);
        return;
      }

      if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        setWidth(180);
        setHeight(240);

        return;
      }

      if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        setWidth(460);
        setHeight(250);

        return;
      }

      if (window.innerWidth > 1366) {
        setWidth(500);
        setHeight(220);
        return;
      }
    }
  }, []);

  const [activeState, setActiveState] = useState({
    id: "DL",
    state: "Delhi",
    value: {
      value: 43,
      winnings: "1.7 Cr+",
      cashes: "573",
      medals: "43",
    },
  });

  const onMouseEnter = (geo, current) => {
    return () => {
      setTooltipContent(`${current?.value?.value ?? "N/A"}`);
      setActiveState(current);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
    // setActiveState(defaultState);
  };

  return (
    <div className={styles.map__parent}>
      <h3>Medals of glory</h3>
      <p>
        The National Poker Series is India’s only national, poker-specific,
        celebratory championship.
      </p>
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerLeft}>
          <h3>{activeState?.state}</h3>
          <p>STATS</p>
          <div className={styles.mapNumber}>
            <div>
              <p>{activeState?.value?.winnings ?? "N/A"}</p>
              <span>Winnings</span>
            </div>
            <div>
              <p>{activeState?.value?.cashes ?? "N/A"}</p>
              <span>Cashes</span>
            </div>
            <div>
              <p>{activeState?.value?.medals ?? "N/A"}</p>
              <span>Medals</span>
            </div>
          </div>
        </div>
        <div className={styles.mapContainerRight}>
          <ReactTooltip>
            {tooltipContent && (
              <div className={styles.hoverText}>
                {`${tooltipContent} Winners`}
              </div>
            )}
          </ReactTooltip>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={width}
            height={height}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const current = data.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      // fill={current ? "#d9d9d9" : "#464646"}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};
export default App;
