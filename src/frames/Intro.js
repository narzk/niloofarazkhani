import NavBar from "../components/NavBar";
import style from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.intro__layer}></div>
      <NavBar />
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
