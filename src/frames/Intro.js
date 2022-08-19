import React, { useState } from "react";
import ColumnNav from "../components/ColumnNav";
import Close from "../components/icons/Close";
import NavBar from "../components/NavBar";
import style from "./Intro.module.scss";

export default function Intro() {
  const [isDropShadow, setIsDropShadow] = useState(false);

  const handleDropShadowClose = () => setIsDropShadow(false);
  const handleDropShadowOpen = () => setIsDropShadow(true);

  const navBar = [
    { text: "Home", onClick: () => window.open("#intro", "_self") },
    { text: "About", onClick: () => window.open("#about", "_self") },
    { text: "Resume", onClick: () => window.open("#resume", "_self") },
    { text: "Contact", onClick: () => window.open("#contact", "_self") },
  ];
  return (
    <div className={style.intro}>
      <div className={style.intro__layer}></div>
      {isDropShadow && (
        <div className={style.intro__dropShadow}>
          <Close
           
            handleDropShadow={handleDropShadowClose}
          />
          <ColumnNav
            navItems={navBar}
            handleDropShadowClose={handleDropShadowClose}
          />
        </div>
      )}
      <NavBar handleDropShadowOpen={handleDropShadowOpen} navItems={navBar} />
      <div className={style.intro__name}>
        <h3>Hey! I AM</h3>
        <h1>Niloofar Arazkhani</h1>
        <h2>
          I Am A <h2 className={style.writing}></h2>
        </h2>
      </div>
    </div>
  );
}
