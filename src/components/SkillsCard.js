import style from "./SkillsCard.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function SkillsCard({title, value, LastWeekValue, LastMonthValue}) {
  return (
    <div className={style.card}>
      <div className={style.card__title}>{title}</div>
      <div className={style.card__progressBar}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            // Colors
            pathColor: `#ff3eaa`,
            textColor: "#ff3eaa",
          })}
        />
      </div>
      <div>
        <div className={style.card__footer}>
          <div className={style.card__lastProgress}>
            <div>{`${LastWeekValue}%`}</div>
            <div>Last Week improvement</div>
          </div>
          <div className={style.card__lastProgress}>
            <div>{`${LastMonthValue}%`}</div>
            <div>Last Month improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
}
