import ResumeCard from "../components/ResumeCard";
import ResumeCategories from "../components/ResumeCategories";
import SkillsCard from "../components/SkillsCard";
import { Education_Experience, skills } from "../constants/ResumeConst";
import style from "./Resume.module.scss";

export default function Resume() {
  return (
    <div>
      <div className={style.resume} id="resume">
        <div className={style.resume__cards}>
          {Education_Experience.map((item) => (
            <>
              <div className={style.resume__category}>{item.category}</div>
              {item.info.map((el) => (
                <ResumeCard
                  date={el.date}
                  subject={el.subject}
                  place={el.place}
                  description={el.description}
                  tasks={el.tasks}
                />
              ))}
            </>
          ))}
          <div className={style.resume__category}>Key Skills</div>

          <div className={style.resume__skills}>
            {/* {skills.map((skill) => (
              <SkillsCard
                title={skill.title}
                value={skill.value}
                LastWeekValue={skill.LastWeekValue}
                LastMonthValue={skill.LastMonthValue}
              />
            ))} */}

            {skills.map((skill) => (
              <div
                className={style.resume__skill}
            
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
