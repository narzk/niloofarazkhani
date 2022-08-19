import style from "./ColumnNav.module.scss";

const ColumnNav = ({ navItems, handleDropShadowClose }) => {
  return (
    <div>
      {navItems.map(({ text, onClick }) => (
        <div className={style.navItem}
          onClick={() => {
            onClick();
            handleDropShadowClose();
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
export default ColumnNav;
