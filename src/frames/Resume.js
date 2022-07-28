import ResumeCard from "../components/ResumeCard";
import ResumeCategories from "../components/ResumeCategories";
import { ResumeConst } from "../constants/ResumeConst";
import style from "./Resume.module.scss";

export default function Resume() {
  return (
    <div>
      <div className={style.resume}>
        <div className={style.resume__layer}>
          <ResumeCategories />
        </div>
        <div className={style.resume__cards}>
          {ResumeConst.map((item) => (
            <ResumeCard
              date={item.date}
              subject={item.subject}
              place={item.place}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
