import style from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({handleDropShadowOpen}) => {
  return (
    <div className={style.menu} onClick={handleDropShadowOpen}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default HamburgerMenu;
