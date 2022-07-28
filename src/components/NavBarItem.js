import style from "./NavBarItem.module.scss";
export default function NavBarItem({ item }) {
  return (
    <li>
      <a>
        <span>{item}</span>
      </a>
    </li>
  );
}
