import React from 'react'
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";
export default function index() {
   
  return (
    <div style={{backgroundColor:"black"}}>
         <div className={styles.mt_100}>
            <div className='container'>
         <div class="tabContent tFreerolls mobile_res"  >
          <h6 class="text-white">27th March (Monday)</h6>
          <div class="baazirewards__table table-responsive mb-4">
             <table class="table table-striped table_bg_logo">
                <thead>
                   <tr class="baazirewards__tablehead schedule_table">
                      <th>S.No</th>
                      <th >Tournament Name</th>
                      <th >Time</th>
                   </tr>
                </thead>
                <tbody class={styles.schedule_tr}>
                   <tr>
                      <td>1</td>
                      <td>#1 NPS Freeroll 10L GTD Qualifier 1</td>
                      <td>1:15 PM</td>
                   </tr>
                   <tr>
                      <td>2</td>
                      <td>#1 NPS Freeroll 10L GTD Qualifier 2</td>
                      <td>2:15 PM</td>
                   </tr>
                   <tr>
                      <td>3</td>
                      <td>#1 NPS Freeroll 10L GTD Qualifier 3</td>
                      <td>3:15 PM</td>
                   </tr>
                   <tr>
                      <td>4</td>
                      <td>#1 NPS Freeroll 10L GTD (FINAL)</td>
                      <td>7:30 PM</td>
                   </tr>
                </tbody>
             </table>
          </div>
          <h6 class="text-white">28th March (Tuesday)</h6>
          <div class="baazirewards__table table-responsive mb-4">
             <table class="table table-striped table_bg_logo">
                <thead>
                   <tr class="baazirewards__tablehead schedule_table">
                      <th>S.No</th>
                      <th >Tournament Name</th>
                      <th >Time</th>
                   </tr>
                </thead>
                <tbody class={styles.schedule_tr}>
                   <tr>
                      <td>1</td>
                      <td>#2 NPS Freeroll 10L GTD Qualifier 1</td>
                      <td>1:15 PM</td>
                   </tr>
                   <tr>
                      <td>2</td>
                      <td>#2 NPS Freeroll 10L GTD Qualifier 2</td>
                      <td>2:15 PM</td>
                   </tr>
                   <tr>
                      <td>3</td>
                      <td>#2 NPS Freeroll 10L GTD Qualifier 3</td>
                      <td>3:15 PM</td>
                   </tr>
                   <tr>
                      <td>4</td>
                      <td>#2 NPS Freeroll 10L GTD (FINAL)</td>
                      <td>7:30 PM</td>
                   </tr>
                </tbody>
             </table>
          </div>
          <div class="baazirewards__table table-responsive">
             <table class="table table-striped table_bg_logo">
                <thead>
                   <tr class="baazirewards__tablehead schedule_table">
                      <th>S.No</th>
                      <th>Top 20 in each Freeroll Tournament Wins a Package worth 50K+</th>
                      <th>Buy-in</th>
                   </tr>
                </thead>
                <tbody class={styles.schedule_tr}>
                   <tr>
                      <td >1</td>
                      <td>SUNDAY SLAMDUNK 60L GTD (RE)</td>
                      <td >5500</td>
                   </tr>
                   <tr>
                      <td >2</td>
                      <td>NPS FREEZOUT 15L GTD QUALIFIER 1 (FO)</td>
                      <td >3850</td>
                   </tr>
                   <tr>
                      <td >3</td>
                      <td>(PLO-6) HIGHROLLER 30L GTD (RE)</td>
                      <td >11000</td>
                   </tr>
                   <tr>
                      <td >4</td>
                      <td>VALUE MINE 50L GTD QUALIFIER 3 (RE)</td>
                      <td >1100</td>
                   </tr>
                   <tr>
                      <td >5</td>
                      <td>GOLDEN RUSH 1CR GTD QUALIFIER 3 (RE)</td>
                      <td >550</td>
                   </tr>
                   <tr>
                      <td >6</td>
                      <td>MAIN EVENT 3 CR GTD QUALIFIER 2 (RE)</td>
                      <td >5500</td>
                   </tr>
                   <tr>
                      <td >7</td>
                      <td>MINI MAIN EVENT 75L GTD (RE)</td>
                      <td >5500</td>
                   </tr>
                   <tr>
                      <td >8</td>
                      <td>SUNDAY MARATHON 50L GTD (RE)</td>
                      <td >5500</td>
                   </tr>
                   <tr>
                      <td >9</td>
                      <td>BIG KNOCKOUT 30L GTD (RE)</td>
                      <td >7700</td>
                   </tr>
                   <tr>
                      <td >10</td>
                      <td>(7-MAX) BIG SPRINT 25L GTD (RE)</td>
                      <td >4400</td>
                   </tr>
                </tbody>
             </table>
          </div>
       </div>
       </div>
       </div>
    </div>
  )
}
