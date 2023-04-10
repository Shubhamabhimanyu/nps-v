import React from "react";
import TournamentCarousal from "../Common/Carousal/TournamentCarousal";
const Tournament = () => {
  return (
    <div className="globalContainer">
      <h2 className="global_h1">Special Tournaments</h2>
      {/* <p>
        The National Poker Series is India’s only national, poker-specific,
        celebratory championship.
      </p> */}
      <TournamentCarousal />
    </div>
  );
};

export default Tournament;
