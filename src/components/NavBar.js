import NavBarItem from "./NavBarItem";
import style from "./NavBar.module.scss";
import logo from "../assets/logo.PNG"

export default function NavBar() {
  const NAVBAR = [
    "Home",
    "About",
    "Resume",
    // "Services",
    // "Projects",
    // "My Blog",
    "Contact",
  ];
  return (
    <div className={style.NavBar}>

       <img src={logo} className={style.NavBar__logo}/>
      <ul className={style.NavBar__right}>
        {NAVBAR.map((Nav) => (
          <NavBarItem item={Nav} />
        ))}
      </ul>
    </div>
  );
}
