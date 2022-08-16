import style from "./SocialButton.module.scss";
export default function SocialButton({ children }) {
  return <button className={style.button}>{children}</button>;
}
