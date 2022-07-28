import style from "./ResumeCard.module.scss";

export default function ResumeCard({ date, subject, place, description }) {
  return (
    <div className={style.card}>
      <div className={style.card__bullet}></div>
      <div className={style.card__container}>
        <div className={style.card__header}>
          <div className={style.card__title}>
            <div className={style.card__date}>{date}</div>
            <div className={style.card__subject}>{subject}</div>
          </div>
        </div>
        <div className={style.card__body}>
          <div className={style.card__place}>{place}</div>
          <div className={style.card__description}>{description}</div>
        </div>
      </div>
    </div>
  );
}
