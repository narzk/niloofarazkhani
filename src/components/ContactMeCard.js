import style from "./ContactMeCard.module.scss";
import "react-circular-progressbar/dist/styles.css";
import Email from "./icons/Email";
export default function ContactMeCard({ title , info}) {
  return (
    <div className={style.card}>
      <div className={style.card__header}>
          <Email/>
      </div>
      <div className={style.card__title}>{title}</div>
      <a className={style.card__info}>{info}</a>

    </div>
  );
}
