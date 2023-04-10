import React from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
// import scheduleSheet from "../../assets/schedule/schedule-national-poker-series-india-2023.xlsx";

function Schedule() {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": "https://nationalpokerseries.in/schedule",
    url: "https://nationalpokerseries.in/schedule",
    name: "Check National Poker Series 2023 Tournament Schedule – NPS 2023",
    description:
      "Third Edition of National Poker Series India 2023 is starting from 29th March to 16th April 2023. Check all the tournament details and register now on PokerBaazi.",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: "https://nationalpokerseries.in/schedule",
      },
    ],
  };

  const handleDownload = () => {
    const urlDown = "schedule-national-poker-series-india-2023.xlsx";
    const filename = "schedule-national-poker-series-india-2023.xlsx"; // Replace with your desired filename

    fetch(urlDown, {
      headers: {
        "Content-Type": "application/xlsx",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const urlDown = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = urlDown;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
      });
  };
  return (
    <>
      <Head>
        <title>
          Check National Poker Series 2023 Tournament Schedule – NPS 2023
        </title>
        <meta
          name="description"
          content="Third Edition of National Poker Series India 2023 is starting from 29th March to 16th April 2023. Check all the tournament details and register now on PokerBaazi.
"
        />
        <link rel="canonical" href="https://nationalpokerseries.in/schedule" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.mt_100}>
        <div className="container">
          <div className="mobile_res row">
            <div className={styles.cons}>
              <h6 className="text-white res">29th March (Wednesday)</h6>
              <div className={styles.con}>
                <div className={styles.banner__btn__wrapper}>
                  <div className={styles.banner__btn__overlay}></div>
                  {/* <a href={"/players-stories"}>
                 VIEW ALL
              </a> */}

                  <a onClick={handleDownload}>
                    Download Schedule{" "}
                    <i
                      class="fa fa-download"
                      style={{ marginLeft: "5px", marginTop: "5px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <h6 className="text-white res1 ">29th March (Wednesday)</h6>
            </div>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #1 (7-MAX) KICK-OFF 30L GTD (RE)</td>
                    <td>2000+200 </td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #2 DEEPDIVE 18L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #3 MARATHON 20L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #4 WEDNESDAY VOLLEY 40L GTD (RE)</td>
                    <td>4000+400</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #5 (6-MAX) SPRINT 10L GTD (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #6 SLAMDUNK 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">30th March (Thursday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #7 MEGADIVE 10L GTD (RE)</td>
                    <td>2000+200 </td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #8 (PLO-5) 8L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #9 SLAMDUNK 8L GTD (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #10 THURSDAY THUNDER 40L GTD (RE)</td>
                    <td>7500+750</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS FREEZOUT 15L GTD QUALIFIER 1 (FO)</td>
                    <td>3500+350</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #11 (5-MAX) HYPER SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #12 (6-MAX) SPRINT 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">31st March (Friday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #13 (7-MAX) FRIDAY DEEPSTACK 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #14 RUN-UP 12L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #15 FRIDAY FREESTYLE 60L GTD (RE)</td>
                    <td>10000+1000</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS FREEZOUT 15L GTD QUALIFIER 2 (FO)</td>
                    <td>3500+350</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #16 (6-MAX) SPRINT 25L GTD (RE)</td>
                    <td>4000+400</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 1 (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #17 DEEPDIVE 15L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">1st April (Saturday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #18 (5-MAX) HYPER SPRINT 8L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #19 RELAY 7L GTD (RE)</td>
                    <td>700+70</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #20 NPS FREEZOUT 15L GTD (FINAL)</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #21 (PLO-6) HIGHROLLER 30L GTD (RE)</td>
                    <td>10000+1000</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #22 MARATHON 8L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 2 (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #23 SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">2nd April (Sunday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>2:00 PM</td>
                    <td>NPS #24 SUNDAY KICKOFF 20L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>3:30 PM</td>
                    <td>NPS #25 (7-MAX) SPRINT 30L GTD (RE)</td>
                    <td>4000+400</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #26 RELAY 15L GTD (RE)</td>
                    <td>1250+125</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 3 (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>7:00 PM</td>
                    <td>NPS #27 SUNDAY SLAMDUNK 60L GTD (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS #28 SPRINT 25L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #29 SUNDAY SMASH 12L GTD (RE)</td>
                    <td>1250+125</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">3rd April (Monday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #30 (4-MAX) HYPER SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #31 SPRINT 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #32 MONDAY MEDLEY 30L GTD (RE)</td>
                    <td>3500+350</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #33 (5-MAX) HYPER SPRINT 6L GTD (RE)</td>
                    <td>800+80</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 4 (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #34 SLAMDUNK 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">4th April (Tuesday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #35 RELAY 7L GTD (RE)</td>
                    <td>800+80</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #36 SPRINT 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #37 MINI HIGHROLLER 50L GTD (RE)</td>
                    <td>15000+1500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #38 DEEPDIVE 20L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 5 (RE) </td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #39 RELAY 10L GTD (RE)</td>
                    <td>1000+100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">5th April (Wednesday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #40 (PLO-6) SPRINT 7L GTD (RE)</td>
                    <td>800+80</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #41 (7-MAX) SPRINT 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #42 BIG KNOCKOUT 30L GTD (PKO-RE)</td>
                    <td>5000+2000+700</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>HIGHROLLER 1CR GTD QUALIFIER 1 (RE)</td>
                    <td>15000+1500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #43 DEEPDIVE 15L GTD (RE) </td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 6 (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #44 (6-MAX) HYPER SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">6th April (Thursday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #45 (4-MAX) HYPER SPRINT 5L GTD (RE)</td>
                    <td>700+70</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #46 MEGA RALLY 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #47 SLAMDUNK 10L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #48 (PLO-4) HIGHROLLER 30L GTD (RE)</td>
                    <td>10000+1000</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>HIGHROLLER 1CR GTD QUALIFIER 2 (RE)</td>
                    <td>15000+1500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #49 (7-MAX) SPRINT 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>VALUE MINE 50L GTD QUALIFIER 7 (TURBO-RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #50 DEEPDIVE 10L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">7th April (Friday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #51 RUN-UP 6L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #52 (PLO-5) SLAM DUNK 10L GTD (RE) </td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #53 SLAMDUNK 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #54 VALUE MINE 50L GTD (FINAL)</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #55 FRIDAY FORCE 50L GTD (RE)</td>
                    <td>10000+1000</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS #56 HIGHROLLER 1CR GTD (FINAL)</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #57 SPRINT 20L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #58 MARATHON 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h6
                className="text-center"
                style={{
                  backgroundColor: "#d4af37",
                  padding: "10px",
                  color: "#000000",
                  borderRadius: "8px",
                  fontSize: "initial",
                }}
              >
                8th April (Saturday) "Break Day"
              </h6>
            </div>
            <h6 className="text-white mt-3">9th April (Sunday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>2:00 PM</td>
                    <td>NPS #59 SUNDAY KICK-OFF 25L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                  <tr>
                    <td>3:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 1 (RE) </td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>3:30 PM</td>
                    <td>NPS #60 KNOCKOUT 20L GTD (PKO-RE)</td>
                    <td>3000+1000+400</td>
                  </tr>
                  <tr>
                    <td>6:00 PM</td>
                    <td>NPS #61 MINI MAIN EVENT 75L GTD (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>7:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 2 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:00 PM</td>
                    <td>NPS #62 SUNDAY SLAM 30L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS #63 (PLO-6) SPRINT 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>NPS #64 SUNDAY SAIL 15L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">10th April (Monday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #65 KNOCKOUT 6L GTD (KO-RE)</td>
                    <td>600+400+100</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #66 SPRINT 8L GTD (RE) </td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 3 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #67 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #68 BIG KNOCKOUT 25L GTD (KO-RE)</td>
                    <td>5000+2000+700</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 1 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #69 DEEPDIVE 12L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 4 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #70 SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">11th April (Tuesday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #71 SLAMDUNK 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #72 (4-MAX) HYPER SPRINT 5L GTD (RE) </td>
                    <td>800+80</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #73 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #74 (PLO-5) HIGHROLLER 30L GTD (RE)</td>
                    <td>10000+1000</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 2 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #75 SPRINT 15L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 5 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #76 MEGADIVE 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">12th April (Wednesday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #77 SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #78 MARATHON 10L GTD (RE) </td>
                    <td>1250+125</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #79 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #80 WEDNESDAY VOLLEY 30L GTD (RE)</td>
                    <td>4000+400</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 3 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #81 (PLO-4) 8L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 6 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #82 (7-MAX) SPRINT 15L GTD (RE)</td>
                    <td>3000+300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">13th April (Thursday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #83 SLAMDUNK 10L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #84 MARATHON 5L GTD (RE) </td>
                    <td>800+80</td>
                  </tr>
                  <tr>
                    <td>6:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 7 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #85 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #86 DEEPSTACK CHAMPIONSHIP 50L GTD (RE)</td>
                    <td>7500+750</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 4 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #87 SPRINT 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 8 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #88 (PLO-5) 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">14th April (Friday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #89 MARATHON 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>NPS #90 MEGA DIVE 8L GTD (RE) </td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #91 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 9 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #92 SUPER HIGHROLLER 1.25 CR GTD (RE)</td>
                    <td>40000+4000</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 5 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #93 (7-MAX) BIG SPRINT 25L GTD (RE)</td>
                    <td>4000+400</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 10 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #94 (5-MAX) HYPER SPRINT 10L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">15th April (Saturday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #95 RELAY 8L GTD (RE)</td>
                    <td>1000+100</td>
                  </tr>
                  <tr>
                    <td>5:00 PM</td>
                    <td>NPS #96 (6-MAX) SPRINT 8L GTD (RE) </td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>NPS #97 DEEPDIVE 5L GTD (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 11 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>NPS #98 SATURDAY SLAMDUNK 25L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 6 (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:30 PM</td>
                    <td>NPS #99 MEGADIVE 10L GTD (RE)</td>
                    <td>1250+125</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 12 (RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #100 (6-MAX) DEEPDIVE 7L GTD (RE)</td>
                    <td>1000+100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="text-white">16th April (Sunday)</h6>
            <div className="baazirewards__table table_responsive col-12 mb-4">
              <table className="table table_striped table_bg_logo">
                <thead>
                  <tr className="baazirewards__tablehead schedule_table">
                    <th>Time</th>
                    <th>Tournament Name</th>
                    <th>Buy-in</th>
                  </tr>
                </thead>
                <tbody className="schedule_tr ">
                  <tr>
                    <td>12:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 13 (HYPER-RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>1:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 7 (TURBO-RE) </td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>2:30 PM</td>
                    <td>GOLDEN RUSH 1CR GTD QUALIFIER 14 (HYPER-RE)</td>
                    <td>500+50</td>
                  </tr>
                  <tr>
                    <td>3:00 PM</td>
                    <td>MAIN EVENT 3 CR GTD QUALIFIER 8 (TURBO-RE) </td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>NPS #101 (PLO- 6) MARATHON 10L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>6:00 PM</td>
                    <td>NPS #102 SLAMDUNK 20L GTD (RE)</td>
                    <td>2500+250</td>
                  </tr>
                  <tr>
                    <td>7:00 PM</td>
                    <td>NPS #103 SUNDAY MARATHON 50L GTD (RE)</td>
                    <td>5000+500</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS #104 GOLDEN RUSH 1CR GTD (FINAL)</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>NPS #105 SUNDAY SMASH 15L GTD (RE)</td>
                    <td>1500+150</td>
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>NPS #106 MAIN EVENT 3 CR GTD (FINAL)</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>9:30 PM</td>
                    <td>NPS #107 AFTERPARTY MARATHON 12L GTD (RE)</td>
                    <td>2000+200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
