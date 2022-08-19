import NavBarItem from "./NavBarItem";
import style from "./NavBar.module.scss";
import logo from "../assets/logo.PNG"
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar({handleDropShadowOpen,  navItems}) {



    return (
    <div className={style.NavBar}>

       <img loading="lazy" alt="logo" src={logo} className={style.NavBar__logo}/>
      <ul className={style.NavBar__right}>
        {navItems.map((Nav) => (
          <NavBarItem item={Nav.text} onClick={Nav.onClick}/>
        ))}
      </ul>
      <HamburgerMenu handleDropShadowOpen={handleDropShadowOpen}/>

    </div>
  );
}
