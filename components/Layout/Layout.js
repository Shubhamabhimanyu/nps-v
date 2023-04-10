import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Audio from "../Common/Audio/Audio"
function Layout({ children }) {
  return (
    <>
      <Header />
      <Audio/>
      {children}
      <Footer />

    </>
  );
}

export default Layout;
