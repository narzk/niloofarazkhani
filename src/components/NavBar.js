import NavBarItem from "./NavBarItem";
import style from "./NavBar.module.scss";
import logo from "../assets/logo.PNG"

export default function NavBar() {


  const NavBar=[

    { text: "Home", onClick: () => window.open("#intro", "_self") },
    { text: "About", onClick: () => window.open("#about", "_self") },
    { text: "Resume", onClick: () => window.open("#resume", "_self") },
    { text: "Contact", onClick: () => window.open("#contact", "_self") },
  ]
    return (
    <div className={style.NavBar}>

       <img loading="lazy" alt="logo" src={logo} className={style.NavBar__logo}/>
      <ul className={style.NavBar__right}>
        {NavBar.map((Nav) => (
          <NavBarItem item={Nav.text} onClick={Nav.onClick}/>
        ))}
      </ul>
    </div>
  );
}
