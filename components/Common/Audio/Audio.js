import React from 'react';
import styles from "./Audio.module.css"
import  { useState, useRef, useEffect } from "react";
import play from '../../../assets/Audio/play.png';
import Image from "next/image";
export default function Audio() {
  
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

//   const [clientWindowHeight, setClientWindowHeight] = useState("");
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   });

//   const handleScroll = () => {
//     setClientWindowHeight(window.scrollY);
//   };
//   useEffect(() => {
//     let backgroundTransparacyVar = clientWindowHeight / 600;
// console.log(backgroundTransparacyVar);
//     if (backgroundTransparacyVar > 0.01) { 
//       startAudio();
    
//     }
//   }, [clientWindowHeight]);
  return (
    <div> 
        <div id='add' className={styles.audio}>
        <audio
        ref={myRef}
        src="https://web.pokerbaazicdn.com/mp3/nps-Intrumental-1-min-14sec.mp3"
       loop />
    <div id='adds' className={styles.audio_inner}>
      {audioStatus ? (
        <button onClick={pauseAudio}>II</button>
      ) : (
        <button onClick={startAudio}>&#9654;</button>
      )} 
       NPS Anthem
       </div>
 </div>
    </div>
  )
}
