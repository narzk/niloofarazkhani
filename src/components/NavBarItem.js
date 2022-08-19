import style from "./NavBarItem.module.scss";
export default function NavBarItem({ item , onClick}) {
  return (
    <li onClick={onClick}>
      <a>
        <span>{item}</span>
      </a>
    </li>
  );
}
